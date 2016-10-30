+++
title = "OO-Design Part 3: Purity Is Good Design"
date = "2016-04-22"
Categories = ["technical skills", "csharp", "java", "oo-design"]
draft=true
+++

Part 3 of the series [OO-Design](/categories/oo-design/)

Purity is considered a bad design because encapsulation is incorrectly mixed
with the concept of better domain modeling. Encapsulation does not produce
better designs, it is orthogonal to a good design.

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
