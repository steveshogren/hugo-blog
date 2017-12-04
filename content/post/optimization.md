+++
title = "MOBA DPS Optimization In Haskell"
date = "2017-11-27"
Categories = ["technical skills"]
draft=true
+++

I love MOBA's (Dota, LoL, Paragon), and I love Haskell. Since Paragon is my
current go-to game, I want to determine the cards to buy to maximize my Damage
Per Second (DPS).

First things first, I found a spreadsheet of all the cards, colors, costs, and
stats. Using some Vim magic, I made them into a list of tuples:

``` haskell
("Wellspring Staff",3,Universal,"6 Power|30 Mana|Fully Upgraded Bonus:30 Mana|0.3 Mana Regen"),
("Whirling Wand",3,Universal,"6 Power|5.5 Attack Speed|Fully Upgraded Bonus:11 Attack Speed"),
```

Which I parse into a data structure: 

``` haskell
data Card = Card
    { _cost :: Integer
    , _power :: Integer
    , _speed :: Integer
    , _crit :: Integer
    , _pen :: Integer
    , _lifesteal :: Integer
    , _crit_bonus :: Integer
    , _ward :: Integer
    , _blink :: Integer
    , _name :: String
    , _firstType :: String
    , _secondType :: String
    , _afinity :: Afinity
    } deriving (Show)
makeLenses ''Card
```

The equation to maximize DPS combines the stats: power, speed, crit chance,
armor pen, crit bonus, and the enemy's armor. Each character can have six cards
at once, with three upgrades each. Many fully upgraded cards give extra bonuses.
Cards only give two stats each. Card upgrades are limited to the two stat types
given by the card.

```
dmgReduction enemy_armor penetration_points =
  let effectiveArmor = enemy_armor - (penetration_points * 4.0)
      realArmor = if (effectiveArmor < 0) then 0 else effectiveArmor
      reduction = (100/(100 + effectiveArmor))
  in if reduction > 1 then 1 else reduction

dps hero power_points attack_speed_points crit_points penetration_points crit_damage enemy_armor = do
  let reduction = dmgReduction enemy_armor penetration_points
      base_dmg = ((hero^.base_damage)+(6*power_points*(hero^.scaling)))
      hits_second = 1/((hero^.base_attack_time)/(((5.5*attack_speed_points) + (hero^.attack_speed))/100))
      crit_bonus = (1+((0.04*crit_points)*(crit_damage-1)))
  base_dmg * hits_second * crit_bonus  * reduction
```

To speed up the optimization problem, I broke it down into two calculations.
First I run the DPS algorithm against all the possible combinations of values
with a max total cost of sixty points and six total cards. Since each card gets
a bonus when completed with all three upgrades, those counted for extra:

```haskell
maxDps :: Bool -> Bool -> Bool -> Integer -> String -> Integer -> Double -> Build
maxDps     w       b     cheapCrit lifeSteal hero_name reduce_by en_armor =
  let totalPoints = 66 -- counts the bonus +1 of the 6 cards when completed
      ward = if w then 1 else 0
      blink = if b then 1 else 0
      maxPen = if hero_name == "sparrow" then 0 else 30
      points = totalPoints - lifeSteal - (3 * ward) - (6 * blink) - reduce_by
      totals = [ (calcIfUnder hero_name dmg speed crit pen critbonus points ward blink lifeSteal en_armor) |
                 dmg <- [0..30],
                 speed <- [0..30],
                 crit <- [0..30],
                 pen <- [0..maxPen],
                 critbonus <- [0..1]]
      build = head $ sortBy (flip compare `on` _bdps) totals
  in bcheapCrit .~ cheapCrit $ build
```

The function ```calcIfUnder``` returns a completed ```Build``` if the total
card point equaled 60, otherwise an empty ```Build```.

From this, we can quickly calculate the highest possible DPS for any given
character, as a ```Build``` of the power, speed, crit chance, armor pen, enemy
armor, and crit bonus points needed.

Now that we know the best possible ```Build```, the hard part is figuring out
what cards and upgrades to buy. Using
[glpk-hs](https://hackage.haskell.org/package/glpk-hs), I make a tuple of each card with
the possible upgrades. Since I want it to solve for an exact set of values, I
can use the ```equalTo``` function to force the solver to ensure we get exactly
that total amount of each stat. 

```collectCostAndNameTuples``` gathers cards with the requested stat:

```
-- For cost
[["Whirling Wand - speed:1,power:5",6],
 ["Whirling Wand - speed:2,power:4",6],
 ["Whirling Wand - speed:3,power:3",6], ...]
-- For power
[["Whirling Wand - speed:1,power:5",5],
 ["Whirling Wand - speed:2,power:4",4],
 ["Whirling Wand - speed:3,power:3",3], ...]
-- For speed
[["Whirling Wand - speed:1,power:5",1],
 ["Whirling Wand - speed:2,power:4",2],
 ["Whirling Wand - speed:3,power:3",3], ...]
```

This turns out to be roughly a few thousand cards+upgrades per stat. Since we
only care about matching a stat exactly, we can use ```equalTo``` from glpk-hs:

``` haskell
lpCards :: Build -> LP String Integer
lpCards build = execLPM $ do
  let hero = heroFromName $ build^.bhero
  let useCheapCrit = (build^.bcheapCrit)
  equalTo (linCombination (collectCostAndNameTuples hero _cost useCheapCrit)) totalCXP
  equalTo (linCombination (collectCostAndNameTuples hero _power useCheapCrit)) (build^.bpower)
  equalTo (linCombination (collectCostAndNameTuples hero _speed useCheapCrit)) (build^.bspeed)
  equalTo (linCombination (collectCostAndNameTuples hero _crit useCheapCrit)) (build^.bcrit)
  equalTo (linCombination (collectCostAndNameTuples hero _pen useCheapCrit)) (build^.bpen)
  equalTo (linCombination (collectCostAndNameTuples hero _lifesteal useCheapCrit)) (build^.blifesteal)
  equalTo (linCombination (collectCostAndNameTuples hero _crit_bonus useCheapCrit)) (build^.bcrit_bonus)
  equalTo (linCombination (collectCostAndNameTuples hero _ward useCheapCrit)) (build^.bward)
  equalTo (linCombination (collectCostAndNameTuples hero _blink useCheapCrit)) (build^.bblink)
  equalTo (linCombination (map (\(_,name) -> (1, name)) $ collectCostAndNameTuples hero _power useCheapCrit)) totalCards
  mapM (\(_,name) -> varBds name 0 1) $ collectCostAndNameTuples hero _power useCheapCrit
  mapM (\(_,name) -> setVarKind name IntVar) $ collectCostAndNameTuples hero _power useCheapCrit

solverFailed :: IO [HandCard]
solverFailed = return [toHandCard("Combination impossible", 0)]

optimize :: Build -> IO [HandCard]
optimize b = do
  x <- glpSolveVars mipDefaults (lpCards b)
  putStrLn $ "Build" ++ (show b)
  case x of (Success, Just (obj, vars)) ->
              let cards = (map toHandCard) $ filter (\(name, count) -> count /= 0) $ Map.toList vars
              in if null cards then solverFailed
                 else return cards
            (failure, result) -> solverFailed
```

Running ```optimize``` gathers a solution for six card+upgrade tuples that match
the desired ratio, and it is fast enough to run in under a second! Sometimes the
solver fails to come up with a solution (even for the same parameters),
regardless if one actually exists.

And there you have it, a solver for the best DPS cards to build for Paragon for
any hero!




I put together a quick site to allow a user to select their desired hero, and
preferences on wards, crit, lifesteal, and blink. The first brute force solver
shows the top 3 DPS ratios. Then they select one of those ratios to run through
the optimizer and suggest a card layout.
