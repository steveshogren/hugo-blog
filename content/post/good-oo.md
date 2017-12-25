+++
title = "OO-Design Part 4: Purity Is Good Design"
date = "2016-11-30"
Categories = ["technical skills", "csharp", "java", "oo-design"]
draft=true
+++

Part 4 of the series [OO-Design](/categories/oo-design/)

As discussed in the previous post
[Anemic Domain Models Are Healthy](/anemic-domain-model/), encapsulation makes
code harder to test. We should make important actions easy to do, and testing is
important.

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
