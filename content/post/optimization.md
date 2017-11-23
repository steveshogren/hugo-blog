+++
title = "MOBA Item Optimization In Haskell"
date = "2017-11-27"
Categories = ["technical skills"]
draft=true
+++

I love MOBA's (DOTA, LoL, Paragon), and I love Haskell. Since Paragon is my
current go-to game, I want to optimize exactly what cards should I buy to
maximize my DPS.


/*

My friends and I used to play DOTA 1, back when it was just a Warcraft 3 mod.
We'd play for hours, trying all the different characters and items. Fast forward
to my current game: Paragon.

Unlike most MOBA's, you build a deck of cards before the match starts. Instead
of an item shop, you pick a deck at the beginning of a match to play. When you
go back to base you can only buy cards from your deck. Like a Collectible Card
Game, all cards have a color, and you can only build a deck from two colors.
*/

First things first, I found a list of all the cards, colors, costs, and
stats. Using some Vim magic, I made them into a list of tuples: 

```
("Bump Juice",1,Fury,"Active:Restore 50 Health.|15s.Charges: 2"),
("Cast Token",1,Universal,"6 Power"),
```

riting, Paragon (my current favorite) had 205 different
cards. 
