+++
title = "MOBA DPS Optimization In Haskell"
date = "2017-11-27"
Categories = ["technical skills"]
draft=true
+++

/*
My friends and I used to play DOTA 1, back when it was just a Warcraft 3 mod.
We'd play for hours, trying all the different characters and items. Fast forward
to my current game: Paragon.

Unlike most MOBA's, you build a deck of cards before the match starts. Instead
of an item shop, you pick a deck at the beginning of a match to play. When you
go back to base you can only buy cards from your deck. Like a Collectible Card
Game, all cards have a color, and you can only build a deck from two colors.
*/

I love MOBA's (Dota, LoL, Paragon), and I love Haskell. Since Paragon is my
current go-to game, I wanted to optimize exactly what cards should I buy to
maximize my Damage Per Second (DPS).

First things first, I found a spreadsheet of all the cards, colors, costs, and
stats. Using some Vim magic, I made them into a list of tuples:

``` haskell
("Wellspring Staff",3,Universal,"6 Power|30 Mana|Fully Upgraded Bonus:30 Mana|0.3 Mana Regen"),
("Whirling Wand",3,Universal,"6 Power|5.5 Attack Speed|Fully Upgraded Bonus:11 Attack Speed"),
```

Which I could parse into a data structure: 

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

The equation to maximize DPS combines power, speed, crit chance, armor pen, enemy
armor, and crit bonus. I also wanted to allow the person running the
optimization to select if they wanted extras like a blink card (teleport), a
percentage of lifesteal, and if they wanted to buy a reusable ward card or not.

To speed up the optimization problem, I broke it down into two calculations.
First I run the DPS algorithm against all the possible combinations of values
with a max total cost of 60 and 6 total cards. Since each card gets a bonus when
completed with 3 upgrades, those counted for extra:

```haskell
maxDps :: Bool -> Bool -> Bool -> Integer -> String -> Integer -> Double -> Build
maxDps w b cheapCrit lifeSteal hero_name reduce_by en_armor =
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

From this, I am able to almost instantly calculate the highest possible DPS for
any given character, as a ratio of the power, speed, crit chance, armor pen,
enemy armor, and crit bonus points needed. 

The hard part is 
