+++
title = "OO-Design Part 3: Purity Is Good Design"
date = "2016-11-30"
Categories = ["technical skills", "csharp", "java", "oo-design"]
draft=true
+++

Part 3 of the series [OO-Design](/categories/oo-design/)

As we covered in the [previous post](/anemic-domain-model/), encapsulation makes
code harder to test. Code that is harder to test, often gets tested less.

Many books and blogs teach encapsulation as an important part of a good
object-oriented design. I believe that encapsulation and domain modeling have
been incorrectly tangled together. A good domain model is possible with or
without encapsulation.

Encapsulation is ultimately about boundaries and trust. Encapsulation _sometimes
can be_ a good idea across API or module boundaries. Ensuring that the users of
your library cannot put your libraries' objects in an invalid state is a good
design. This is where encapsulation shines. You should not trust the users of a
library or API to correctly use your models.

While appropriate for libraries and APIs, encapsulation is often misapplied to
_internal code_. We pretend that we cannot trust ourselves and our coworkers to
know how to correctly use our models. This is silly. You and your coworkers all
have access to the code, they can do _anything they want_. That getter that
"protects" the field from write access could easily be changed to set it to
```null``` every time. Trying to protect ourselves from doing stupid things with
models by "hiding" the state is completely silly.

## An brief rant about getters and setters

If anything should serve as an example of misapplied encapsulation, let me
present this code an anonymous coworker wrote the other day.

``` java
private bool IsLate;
public bool GetIsLate() { return IsLate; }
public void SetIsLate(bool isLate) { IsLate = islate; }
```

The goal with this pattern is achieve the dual purposes of "encapsulation" and
"I need access to the data". This is beyond silly. A get/set around a field is
mathematically equivalent to just accessing the field directly. If encapsulation
is the goal, this pattern completely fails to even provide that.

## Encapsulation Makes 

Encapsulation is orthogonal to a good design. It is true that a good design
prevents building an object in an incorrect state, but this is no easier or
harder with encapsulation. Often it is said that "protecting" the business logic
inside a class method will prevent an invalid state. But in reality, because all
developers have access to the same code, if you cannot trust them to build an
object correctly, how can you trust them to not modify your classes methods
incorrectly?

A good design is possible with or without encapsulation. Consider the following
pure functions. Which better models the domain?

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
