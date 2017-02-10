+++
title = "Darkest Proof: Day 2"
date = "2017-02-07"
Categories = ["technical skills", "coq"]
+++

Day two working through
[Software Foundations](https://www.cis.upenn.edu/~bcpierce/sf/current/index.html)
with Coq. Since I like to rant, and I love
[Darkest Dungeon](http://www.darkestdungeon.com/), ENTER THE DARKEST PROOF.

<img src="/images/ruinhascome.png"></img>

## Naming

While trying to understand how `rewrite` works, I come across an obvious use-case:

{{< highlight coq "style=default,noclasses=false" >}}
Theorem adding_n_Sm : forall n m : nat, 
  n + S m = S n + m.
Proof.
  intros n. 
  induction n.
  simpl. reflexivity.
  simpl. rewrite <- IHn. 
{{< / highlight >}}

At this point, in current scope I have:

{{< highlight coq "style=default,noclasses=false" >}}
1 subgoals, subgoal 1 (ID 90)
  n : nat
  IHn : forall m : nat, n + S m = S (n + m)
---------------
  forall m : nat, S (n + S m) = S (S (n + m))
{{< / highlight >}}

Looks obvious enough. I _should_ be able to substitute the `n + S m` with `S (n + m)` in my goal using `rewrite <- IHn`.

# NOPE

<img src="/images/hopeless.jpg"></img>

``` coq
Error: Found no subterm matching "n + S ?252" in the current goal.
``` 

Why is it: `n + S ?252` the hypothesis clearly has `n + S m`! Where did
`m` go? Am I losing my marbles?

After searching around, I come across an old thread with someone getting the
same error. The reply post says

> The strange-looking "?738" means any term to be instantiated... Besides,
> rewrite cannot rewrite under a "forall".

Is `m` not defined? But it was up there in scope, right? Well my current scope
_did_ look like: `IHn : forall m : nat, n + S m = S (n + m)`

Oh, that _does_ say `forall m`, how to make it just for that one `m`? Well `n`
isn't `forall`, perhaps `intros`?

{{< highlight coq "style=default,noclasses=false,hl_lines=4" >}}
Theorem adding_n_Sm : forall n m : nat, 
  n + S m = S n + m.
Proof.
  intros n m.
  induction n.
  simpl. reflexivity.
  simpl. rewrite <- IHn. 
{{< / highlight >}}

<img src="/images/critforward.jpg"></img>

# SUCCESS

I.... I .... don't know what is happening.

<img src="/images/facepalm.jpg"></img>

(Artwork lovingly pulled from: [Darkest Dungeon](http://www.darkestdungeon.com/)
Please don't sue me!)
