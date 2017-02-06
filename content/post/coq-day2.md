+++
title = "Coq: Day 2"
date = "2017-02-07"
Categories = ["technical skills", "coq"]
+++

Day two working through
[Software Foundations](https://www.cis.upenn.edu/~bcpierce/sf/current/index.html).
Since I like to rant, and rants help me learn, COMMENCE RANT.

## Naming

While trying to understand how `rewrite` works, I come across an obvious use-case:

```coq
Theorem plus_n_Sm : forall n m : nat, 
  S (n + m) = n + (S m).
Proof.
  intros n. induction n as [| n' IHn'].
  simpl. reflexivity.
  simpl. 
```

At this point, in current scope I have:

``` coq
1 subgoals, subgoal 1 (ID 90)
n' : nat
IHn' : forall m : nat, S (n' + m) = n' + S m
------------------------------------------
forall m : nat, S (S (n' + m)) = S (n' + S m)
```

Looks obvious enough. I _should_ be able to substitute the `n' + S m` in my
subgoal, with `S (n' + m)` using `rewrite` and `IHn'`. 

# NOPE

``` coq
Error: Found no subterm matching "n' + S ?252" in the current goal.
``` 

<img src="/images/upset.jpg"></img>

What do you mean, `n' + S ?252` the hypothesis clearly has `n' + S m`! Am I
losing my marbles?

After searching around, I come across a 6 year old thread with someone getting
the same error. The reply post says 

> The strange-looking "?738" means any term to be instantiated. It corresponds
> to the universally quantified "m" in IHn: rewrite tries to instantiate m with
> something so that the left hand side of its conclusion matches something in
> the conclusion of the goal. The matching is done syntactically (e.g. unfold
> definitions). Note that n is fixed. Besides, rewrite cannot rewrite under a
> "forall".




<img src="/images/facepalm.jpg"></img>
