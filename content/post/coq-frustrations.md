+++
title = "Darkest Proof: Day 1"
date = "2017-02-01"
Categories = ["technical skills", "coq", "proofs", "silly"]
+++

Day one working through
[Software Foundations](https://www.cis.upenn.edu/~bcpierce/sf/current/index.html)
with Coq. Since I like to rant, and I love
[Darkest Dungeon](http://www.darkestdungeon.com/), ENTER THE DARKEST PROOF.
<span class="subscript">(Please don't sue me!)</span>

<img src="/images/ruinhascome.png"></img>

## Precise Syntax

I copied a sample from the book by hand, but it always caused Company-Coq to go
into an **infinite loop**. I copied it again. Same deal.

This isn't my first rodeo, I've seen all sorts of syntax rules and such. But
alas, it still fails.

{{< highlight coq "style=default,noclasses=false" >}}
Theorem andb_commutative' : forall b c, andb b c = andb c b.
Proof.
  intros b c. destruct b.
  { destruct c.
    { reflexivity.}
    { reflexivity.} }
  { destruct c.
    { reflexivity.}
    { reflexivity.} }
Qed.
{{< / highlight >}}

<img src="/images/upset.jpg"></img>

Where the heck is it? I am losing my mind for 20 minutes looking back and forth
trying to figure out what I am missing. I seek the advice of a friend, he
suggests stepping line-by-line with `C-cC-n`.

## It fails on one line.

<img src="/images/coq-space1.png"></img>

## Wait.

<img src="/images/coq-space2.png"></img>

## Thats...

<img src="/images/coq-space3.png"></img>

## But...

<img src="/images/coq-space4.png"></img>

## NO!!!!!

<img src="/images/coq-space5.png"></img>

## Coq is WHITE-SPACE SENSITIVE?!

<img src="/images/angry.jpg"></img>

YEP! I add that space in, and it works fine!

{{< highlight coq "style=default,noclasses=false,hl_lines=5 6 8 9" >}}
Theorem andb_commutative' : forall b c, andb b c = andb c b.
Proof.
  intros b c. destruct b.
  { destruct c.
    { reflexivity. }
    { reflexivity. } }
  { destruct c.
    { reflexivity. }
    { reflexivity. } }
Qed.
{{< / highlight >}}

<img src="/images/facepalm.jpg"></img>
