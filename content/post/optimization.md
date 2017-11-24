+++
title = "MOBA Linear Optimization In Haskell"
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

The equation to maximize combines power+speed+crit+armor pen. I also wanted to
allow the person running the optimization to select if they wanted a blink
(teleport), a percentage of lifesteal, and if they wanted to use a crit bonus
card or not.
