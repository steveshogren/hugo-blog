+++
title = "Darkest Proof: Day 3"
date = "2017-04-27"
Categories = ["technical skills", "coq"]
draft = true
+++

Day three working through
[Software Foundations](https://www.cis.upenn.edu/~bcpierce/sf/current/index.html)
with Coq. Since I like to rant, and I love
[Darkest Dungeon](http://www.darkestdungeon.com/), ENTER THE DARKEST PROOF.
<span class="subscript">(Please don't sue me!)</span>

<img src="/images/ruinhascome.png"></img>


I am trying to prove a helper proof to use to rewrite another helper proof to
use to rewrite another proof for the commutativity of multiplication. You can't
make this stuff up. 

I just need to prove this where ```S n``` is ```n + 1```:

```
m * S n = m + m * n.
```

Should be simple...

```
Theorem mult_comm_lemma : forall n m, m * S n = m + m * n.
Proof.
  intros m n.
  induction m as [| p].
```

Gives me:

```
2 subgoals, subgoal 1 (ID 291)
  n * 1 = n + n * 0

subgoal 2 (ID 295) is:
 n * S (S p) = n + n * S p
```

# Wat.

I expected performing an induction on `m` to produce something like this: 

``` coq
2 subgoals, subgoal 1 (ID 291)
   0 * S n = 0 + 0 * n

subgoal 2 (ID 294) is:
 S p * S n = S p + S p * n
```

Instead it is inducting `n`?! 

# Wait.

<img src="/images/mult_comm_lemma.png"></img>

# No.

<img src="/images/mult_comm_lemma2.png"></img>

# WHY?!

<img src="/images/mult_comm_lemma3.png"></img>

# IT OVERWRITES THE NAMES IF PUT IN THE WRONG ORDER?!

<img src="/images/poor_caretaker.jpg"></img>

## The poor caretaker, I fear his long-standing duties here have... _affected him_

