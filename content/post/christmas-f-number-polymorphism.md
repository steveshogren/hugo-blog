+++
title = "christmas f number polymorphism"
date = "2014-12-06"
slug = "2014/12/06/christmas-f-number-polymorphism"
Categories = ["Technical Skills", "f#"]
+++

One of my favorite things about F# is how it lets you choose how you want
to align your data.

In the previous posts highlighting on
[pattern matching](http://deliberate-software.com/function-pattern-matching/)
and
[inverted polymorphism](http://deliberate-software.com/inversed-polymorphism/)
we covered how pattern matching in F# is safer than ```if```
statements and can replace classes and interfaces for polymorphism. If
you are unfamiliar with these concepts, you might want to skim those
first.

Today, for the 6th day of the
[F# Advent Calendar](https://sergeytihon.wordpress.com/2014/11/24/f-advent-calendar-in-english-2014/)
I wanted to highlight F#'s flexibility in solving the
"[expression problem](http://c2.com/cgi/wiki?ExpressionProblem)".

Let's show the two alternatives, first here is one with interfaces:

``` fsharp
type IChristmasTrees = 
    abstract member Cost : int -> int
    abstract member Colors : unit -> string list
    
type PlasticTree() =
    interface IChristmasTrees with
        member this.Cost(jolly_factor) = (100 * jolly_factor) / 2
        member this.Colors() = ["green";"silver"]
        
type LiveTree() =
    let HEAD_ACHE = 15
    interface IChristmasTrees with
        member this.Cost(jolly_factor) = (jolly_factor + 10) * HEAD_ACHE
        member this.Colors() = ["green";"brown"]
``` 

Now the same functionality using pattern matching and discriminated unions.

``` fsharp
type IChristmasTrees2 =
  | PlasticTree
  | LiveTree

let colors = function
  | PlasticTree -> ["green";"silver"]
  | LiveTree -> ["green";"brown"]

let cost tree jolly_factor =
  match tree with
    | PlasticTree -> (100 * jolly_factor) / 2
    | LiveTree ->
      let HEAD_ACHE = 15
      (jolly_factor + 10) * HEAD_ACHE
``` 

What changes if we want to add a new type of tree? In the class-based
example, adding a new type is quite simple, you only need to edit one
place to find all the definitions regarding the new type.

<img src="/images/new-interfaces.png"></img>

In the pattern matching example, adding a new type requires editing
every single place you created a function that matches on the
type.

<img src="/images/new-pattern-matching.png"></img>

Thankfully, in both cases the compiler gives warnings about missing
functions or matches, so both are equally "safe".

What about changing an existing function or adding a new function? We
now see the opposite behavior. Classes become harder to edit, because
the functions are spread across multiple classes.

<img src="/images/change-interfaces.png"></img>

A pattern matching system is now the easier to modify, each function
only lives in one place. 

<img src="/images/change-pattern-matching.png"></img>

And that is the expression problem! The best thing about F# is that
you get to pick which one is better for each type of data! If you know
a certain type will need new behavior often, but rarely need new
types, use pattern matching. If you know there is a static set of
functions for a set of types, but the type list changes often, maybe
the traditional interfaces and classes makes the most sense.

There is no reason not to mix and match the two ways to handle
polymorphism, so you are free to choose the best representation for
each type of data you have!

Happy F#-filled Festivities!
