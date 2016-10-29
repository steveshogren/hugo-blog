+++
title = "OO-Design Part 2: Anemic Domain Models Are Healthy"
date = "2016-04-22"
Categories = ["technical skills", "csharp", "java", "oo-design"]
draft=true
+++

Part 2 of the series [OO-Design](/categories/oo-design/)

The **Anemic Domain Model** is often quoted as being an anti-pattern in
Domain-Driven Design. Martin Fowler goes so far as to term the alternative a
["rich domain model"](http://www.martinfowler.com/bliki/AnemicDomainModel.html).

Unfortunately, in a language like Java or C#, an **Anemic Domain Model** is one
of the best ways to unit-test your code!

Which is easier to test? A **pure function** with the signature:

```java
GameState movePlayerNorth(GameState g)
```

or an **impure function** with the signature:

```java
void movePlayerNorth()
```

The first function has explicit inputs and outputs. The second function has
implicit, hidden state. While the ```void``` function is easier to _call_, it is
much harder to _test_. The tester must setup some internal or global state to
even run the test. If the GameState is encapsulated too, you would need to end
up calling dozens of methods just to get the GameState in the correct state for
your test! (This isn't an exaggeration, I've seen people do this many times.)

Functions are considered **pure** if they produce the same output when given the
same input. Addition is a pure function. We expect ```add(1,1)``` will always
produce ```2```. Pure functions are the easiest to test. The more logic you have
in pure functions, the easier your code is to test.

> Encapsulation is ~~a rich domain model~~ **impure**. 

The point of encapsulation is to hide state from the caller; it is impure by
definition. Impure functions require global or class-level state to operate. 

Pure functions have been maligned as a bad design. Purity has been given nasty
sounding names like "anemic domain model" or "exposed state". In reality, there
is nothing wrong with pure programming, it produces good designs that are easy
to understand and test.

> Purity is a good design!

Purity in object-oriented design is a continuum. Most code-bases have a variety
of functions: some pure, some impure. On the one side you have rich domain
models with completely encapsulated state and void methods. On the other side
you have easily-tested code with pure functions and separate data structures.

``` java
Encapsulation (Impure) |------------------------| Pure functions
```

If you need or desire testability, choose data structures and pure, stateless
functions. Avoid encapsulated state: put all state in data structures with all
public fields. Strive to make your codebase as pure as possible.

Next: [OO-Design Part 3: Purity Is Good Design](/purity-is-good-design/)
