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

Which seems easier to test? A function with the signature:

```GameState movePlayerNorth(GameState g)```

or a function with the signature:

```void movePlayerNorth()```

One has explicit inputs and outputs. The other has implicit and hidden state and
no return. While the ```void``` function is easier to _call_, it is much harder
to test. To test the ```void``` function, we would likely end up having to
expose the internal ```GameState``` in some other way that breaks encapsulation.

Quite to the contrary


