+++
title = "OO-Design Part 3: Purity Is Good Design"
date = "2016-11-30"
Categories = ["technical skills", "csharp", "java", "oo-design"]
draft=true
+++

Part 3 of the series [OO-Design](/categories/oo-design/)

As discussed in the previous post
[Anemic Domain Models Are Healthy](/anemic-domain-model/), encapsulation makes
code harder to test. We should make important actions easy to do, and testing is
important.

Many books and blogs teach encapsulation as an important part of a good domain
modeling. Encapsulation and domain modeling are not the same concepts. A good
domain model is possible with or without encapsulation.

Encapsulation is the design of trust boundaries between programmers.
Encapsulation shines when applied to API or module boundaries. A
well-encapsulated API ensures that other programmers cannot put your library in
an invalid state. For example, a builder-pattern API can be helpful,
self-documenting, and prevent invalid states.

> Encapsulation makes good sense between teams

Code ownership boundaries are a good place to apply the rules of encapsulation.
Each team of programmers can work against the module's API without having to
read the internals of someone else's codebase.

Fluent API's using encapsulation are often a lot of extra work when a single
team shares ownership of a single codebase. Boundaries easily devolve into
[leaky abstractions.](https://en.wikipedia.org/wiki/Leaky_abstraction) Extra
time and thought must go into building a design that offers full utility without
allowing invalid states. That extra time and thought should only come for a
great reason.

> Separation of concerns and encapsulation are different goals

Separation of concerns (often referred to as Single Responsibility Principle) is
an excellent tool for improving internal organization. Single Responsibility
Principle reduces complexity by focusing each function to a single goal.
Encapsulation is not the same thing as SRP.

While appropriate for libraries and API boundaries, encapsulation is often
misapplied to _internal code_ with _shared ownership_. We pretend that we cannot
trust ourselves and our coworkers to know how to correctly use our models. This
is silly. You and your coworkers all have access to the code, they can do
_anything they want_. 

## A brief rant about getters and setters

If anything should serve as an example of misapplied encapsulation, let me
present the following "best practice".

``` java
private bool IsLate;
public bool GetIsLate() { return IsLate; }
public void SetIsLate(bool isLate) { IsLate = islate; }
```

The goal with this pattern is to achieve the dual purposes of "encapsulation"
and "I need access to the data". This is beyond silly. A get/set around a field
is mathematically equivalent to just accessing the field directly. If
encapsulation is the goal, this is just "encapsulation theater."

Note: the caveat to this is _interfaces_. If you desire to make an interface on
several data structures in a language like Java or C# (e.g.
[noun interfaces](/better-oo-design/)), only functions (or properties) can be
added to interfaces. Consider this a language tax.

## Good Design

Encapsulation is orthogonal to a good design. While good design does prevent
building an object in an incorrect state, it can be done without encapsulation.
A good design is possible with or without encapsulation. Consider the following
functions. Which better models the domain?


``` java
void approveChange()  // (encapsulated design) sets an approved field to true
Approval approveChange(Approval a)  // (pure design) sets an approved field to true
Approved approveChange(ToBeApproved c) // (pure, type-safe design) makes a new object
```

The first two functions introduce a run-time error if the ```Approval``` was
already approved. The run-time error is a failure state allowed because of poor
modeling. Neither purity nor encapsulation alone solved a problem caused by bad
modeling.

The third function is a better domain model: it cannot even accept an unapproved
object. The type system prevents this sort of error from even happening. We have
turned a run-time error into a compile-time error!
