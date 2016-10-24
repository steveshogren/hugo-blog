+++
title = "Anemic Domain Models Are Healthy"
date = "2016-04-22"
Categories = ["technical skills"]
draft=true
+++

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

The first function has explicit inputs and outputs. The section function has
implicit, hidden state. While the ```void``` function is easier to _call_, it is
much harder to test. It relies on implicit global state to be correctly setup to
even run the test.

Functions are considered **pure** if they produce the same output when given the
same input. Addition is a pure function. We expect ```add(1,1)``` will always
produce ```2```. Pure functions are the easiest to test. The more logic you have
in pure functions, the easier your code is to test.

> Encapsulation is **impure**. 

Encapsulation and rich domain models do not always produce the same results from
their inputs. Functions have very little output and the caller does not have to
"know" what happens under the hood. The "inputs" to ```game.movePlayerNorth()```
are the state of the ```game``` class.

Object-oriented design is a continuum. 


```java
Encapsulation (Impure) |----------------------------| Pure Functions
```

On the one side you have the rich domain models with encapsulated state and void
methods. On the other side you have easily-tested code with functions and data
structures and no encapsulated state.

If you need or desire testability, choose data structures and small stateless
functions. Avoid encapsulated state, put all state in data structures with all
public fields.
