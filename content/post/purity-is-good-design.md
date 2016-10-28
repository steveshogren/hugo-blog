+++
title = "OO-Design Part 3: Purity Is Good Design"
date = "2016-04-22"
Categories = ["technical skills", "csharp", "java", "oop"]
draft=true
+++

Previously: [OO-Design Part 2: Anemic Domain Models Are Healthy](/anemic-domain-model/)

Purity is considered a bad design because it is incorrectly mixed with the
concept of better domain modeling. This is often incorrect. Which of the
following functions is easier to test and better models the domain?

``` java
Approval approveChange(Approval c)  // sets an approved field to true
```
or

``` java
Approved approveChange(ToBeApproved c) // makes a new object
```

While both functions are pure, the first function introduces a run-time error!
What if the ```Approval``` was already approved? That is a failure state allowed
because of poor modeling. The second function cannot even accept an unapproved
object, preventing this sort of error from even happening.

Previously: [OO-Design Part 2: Anemic Domain Models Are Healthy](/anemic-domain-model/)
