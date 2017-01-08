+++
title = "OO-Design Part 3: Purity Is Good Design"
date = "2016-11-30"
Categories = ["technical skills", "csharp", "java", "oo-design"]
draft=true
+++

Part 3 of the series [OO-Design](/categories/oo-design/)

As we covered in the previous post [Anemic Domain Models Are Healthy](/anemic-domain-model/), encapsulation makes
code harder to test. Code that is harder to test, often gets tested less.

Many books and blogs teach encapsulation as an important part of a good
object-oriented design. Encapsulation and domain modeling have been incorrectly
tangled together. A good domain model is possible with or without encapsulation.

Encapsulation is ultimately about boundaries and trust. Encapsulation _can be_ a
good idea across API or module boundaries. Ensuring that the users of your
library cannot put your libraries' objects in an invalid state is a good design.
This is where encapsulation shines. You should not trust the users of a library
or API to correctly use your models.

While appropriate for libraries and APIs, encapsulation is often misapplied to
_internal code_. We pretend that we cannot trust ourselves and our coworkers to
know how to correctly use our models. This is silly. You and your coworkers all
have access to the code, they can do _anything they want_. That getter that
"protects" the field from write access could easily be changed to set it to
```null``` every time. Trying to protect ourselves from doing stupid things with
models by "hiding" the state, but allowing us to change the internals of a class
is completely silly.

## An brief rant about getters and setters

If anything should serve as an example of misapplied encapsulation, let me
present this code I recently found:

``` java
private bool IsLate;
public bool GetIsLate() { return IsLate; }
public void SetIsLate(bool isLate) { IsLate = islate; }
```

The goal with this pattern is achieve the dual purposes of "encapsulation" and
"I need access to the data". This is beyond silly. A get/set around a field is
mathematically equivalent to just accessing the field directly. If encapsulation
is the goal, this pattern completely fails to even provide that.

Note: the caveat to this is _interfaces_. If you desire to make an interface on
several data structures in a language like Java or C# (e.g.
[noun interfaces](/better-oo-design/)), you are required to make a getter and
setter around each field you desire to expose through the interface. Consider
this a language tax.

## Encapsulation Makes 

Encapsulation is orthogonal to a good design. While good design does prevent
building an object in an incorrect state, it can be done without encapsulation.
A good design is possible with or without encapsulation. Consider the following
functions. Which better models the domain?


``` java
void approveChange()  // sets an approved field to true
Approval approveChange(Approval a)  // sets an approved field to true
Approved approveChange(ToBeApproved c) // makes a new object
```

The first two functions introduce a run-time error if the ```Approval``` was
already approved! The run-time error is a failure state allowed because of poor
modeling. Neither purity nor encapsulation solved a problem caused by bad
modeling.

The third function is a better domain model: it cannot even accept an unapproved
object. The type system prevents this sort of error from even happening. We have
turned a run-time error into a compile-time error!
