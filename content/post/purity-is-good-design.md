+++
title = "OO-Design Part 3: Purity Is Good Design"
date = "2016-04-22"
Categories = ["technical skills", "csharp", "java", "oo-design"]
draft=true
+++

Part 3 of the series [OO-Design](/categories/oo-design/)

As we covered in the [previous post](/anemic-domain-model/), encapsulation makes
code harder to test. Code that is harder to test, often gets tested less.

Many books and blogs teach encapsulation as an important part of a "good" OOP
design. Unfortunately, encapsulation does not produce better domain models.

Encapsulation is ultimately about boundaries and trust. Encapsulation _sometimes
can be_ a good idea across API or module boundaries. Ensuring that the users of
your library cannot put your libraries' objects in an invalid state is a good
design. This is where encapsulation shines. You should not trust the users of a
library or API to correctly use your models.

Unfortunately, this sometimes useful pattern is often applied to _internal
code_. You _should_ trust your coworkers to know not to screw around with
models.


Encapsulation is often considered a necessary part of every domain object

in our code-bases, even though it makes our code harder to reuse, extend, and
test.



Encapsulation is orthogonal to a good design. A good design 

A good design is possible with or without encapsulation. Consider the following
pure functions. Which is easier to test and better models the domain?

``` java
Approval approveChange(Approval c)  // sets an approved field to true
```

or

``` java
Approved approveChange(ToBeApproved c) // makes a new object
```

While both functions are pure, the first function introduces a run-time error if
the ```Approval``` was already approved! The run-time error is a failure state
allowed because of poor modeling. 

The second function is a better domain model, because it cannot even accept an
unapproved object. The type system prevents this sort of error from even
happening.
