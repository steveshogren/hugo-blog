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

Encapsulation is ultimately about boundaries and trust. Encapsulation shines
when applied to API or module boundaries. It is a good design to ensure that
your users cannot put your library in an invalid state. A fluent,
builder-pattern API can be helpful and self-documenting.

> Encapsulation makes sense between teams

A good place for a library or module API would be between code ownership
boundaries. Builder-pattern boundaries makes good sense if one team owns
"publishing" and another owns "workflow". Each team can work against the module
API rather than always having to read the internals of the other team's
codebase.

Fluent APIs using encapsulation are often a lot of extra work when a single team
shares ownership of a single codebase. Separation of concerns is an excellent
tool for organization, but it can be separated from the overhead of
encapsulation.

While appropriate for libraries and API boundaries, encapsulation is often
misapplied to _internal code_ with _shared ownership_. We pretend that we cannot
trust ourselves and our coworkers to know how to correctly use our models. This
is silly. You and your coworkers all have access to the code, they can do
_anything they want_. That getter that "protects" the field from write access
could easily be changed to set it to ```null``` every time. 

## An brief rant about getters and setters

If anything should serve as an example of misapplied encapsulation, let me
present the following "best practice".

``` java
private bool IsLate;
public bool GetIsLate() { return IsLate; }
public void SetIsLate(bool isLate) { IsLate = islate; }
```

The goal with this pattern is to achieve the dual purposes of "encapsulation"
and "I need access to the data". This is beyond silly. A get/set around a field
is mathematically equivalent to just accessing the field directly. If
encapsulation is the goal, this pattern completely fails to even provide that.

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
modeling. Neither purity nor encapsulation alone solved a problem caused by bad
modeling.

The third function is a better domain model: it cannot even accept an unapproved
object. The type system prevents this sort of error from even happening. We have
turned a run-time error into a compile-time error!
