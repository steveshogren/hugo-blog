+++
title = "Anemic Domain Models Are Healthy"
date = "2016-04-22"
Categories = ["technical skills"]
draft=true
+++

The "Anemic Domain Model" is often quoted as being an anti-pattern in
Domain-Driven Design. Martin Fowler goes so far as to term the alternative a
["rich domain model"](http://www.martinfowler.com/bliki/AnemicDomainModel.html).

Unfortunately, in a language like Java or C#, an "Anemic Domain Model" is one of
the best ways to unit test your code!

Which is easier to test? A function with the signature:

```GameState movePlayerNorth(GameState g)```

or a function with the signature:

```void movePlayerNorth()```

One has explicit inputs and outputs. The other has implicit and hidden state and
no return. While the ```void``` function is easier to _call_, it is much harder
to test. To test the ```void``` function, we have to expose the internal
```GameState``` in some other way that breaks encapsulation.

The idea of a rich domain model is not inherently bad, but it makes unit-testing
so much harder. Object-oriented design is a continuum. On the one end, you have
the rich domain models with lots of encapsulated state and void methods, and on
the other you have easily-tested SOLID with lots of functions with no
encapsulated state.

If you need testability, choose the SOLID patterns with small stateless
functions. Don't encapsulate state, put it in a data structure with all public
fields and pass it to functions. If you don't need to be able to test, choose
the rich domain model patterns.
