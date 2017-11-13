+++
title = "OO-Design Part 2: Anemic Domain Models Are Healthy"
date = "2016-11-16"
Categories = ["technical skills", "csharp", "java", "oo-design"]
+++

Part 2 of the series [OO-Design](/categories/oo-design/)

The Anemic Domain Model is often quoted as an anti-pattern in the terminology of
Domain-Driven Design. Martin Fowler goes so far as to term the alternative a
["rich domain model"](http://www.martinfowler.com/bliki/AnemicDomainModel.html).

A rich domain model makes perfect sense until you attempt to write your first
unit test. You discover that rich domain models are very hard to test. Most
examples of unit-testing use Anemic Domain Models! Do you really have to pick
between good testing and good design?

## Let's Talk About Purity

Functions are considered **pure** if they produce the same output when given the
same input. Addition is a pure function. We expect ```add(1,1)``` will always
produce ```2```. Pure functions are the easiest to test. As a rule, the more
logic you have in pure functions, the easier your code is to test.

Consider which of the following is easier to test. A **pure function** with the
signature:

```java
GameState movePlayerNorth(GameState g)
```

or an **impure function** with the signature:

```java
void movePlayerNorth()
```

The first function has explicit inputs and outputs. The second function has
implicit, hidden state. While the ```void``` function is easier to _call_, it
impurity makes it much harder to _test_. Testing a impure function requires
implicit state to be setup before each test. Since GameState is encapsulated,
you would need to either expose it (breaking encapsulation) or call other
methods to get it into the correct state for your test!

> Encapsulation is ~~a rich domain model~~ **impure**. 

The point of encapsulation is to hide state from the caller; it is impure by
definition. Impure functions require global or class-level state to operate. 

Pure functions have been maligned as a bad design. Purity has been given nasty
sounding names like "anemic domain model" or "exposed state". In reality, there
is nothing wrong with pure programming, it produces good designs that are easy
to understand and test.

Misapplied encapsulation is why most developers do not venture very far into
unit testing. Their first production unit test slams into a function with a lot
of impure state. They see how much work it is to test an impure function and
give up, thinking that all unit testing is that hard.

> Purity is a good design!

We should strive for purity as much as possible. In most languages, purity is an
ideal to strive for, not a goal that can ever be fully achieved. For example:
language features like exceptions and null will always prevent complete purity.

Purity in object-oriented languages is always on a continuum. Most codebases
have a variety of functions: some pure, some impure. On one side of the spectrum
you have rich domain models with completely encapsulated state and void methods.
On the other side you have easily-tested code with pure functions and separate
data structures.

If you need or desire testability, strive to put as much logic as possible
inside pure functions. Avoid encapsulated state: put all state in data
structures with all public fields. Strive to make your codebase as pure as
possible.
