+++
title = "OO-Design Part 3: When to Apply Encapsulation"
date = "2016-11-30"
Categories = ["technical skills", "csharp", "java", "oo-design"]
draft=true
+++

Part 3 of the series [OO-Design](/categories/oo-design/)

As discussed in the previous post
[Anemic Domain Models Are Healthy](/anemic-domain-model/), encapsulation makes
code harder to test. We should make important actions easy to do, and testing is
important.

Encapsulation and domain modeling are separate concepts. A good domain model is
possible with or without encapsulation.

Encapsulation is the design of trust boundaries between programmers.
Encapsulation shines when applied to API or module boundaries. A
well-encapsulated API ensures that other programmers cannot put your library or
service into an invalid state. For example, a builder-pattern API can be
helpful, self-documenting, and prevent invalid states.

> Encapsulation makes good sense between different teams

Code ownership boundaries are a good place to apply the rules of encapsulation.
Each team of programmers can work against the service's API without having to
read the internals of someone else's codebase.

Encapsulation is often a lot of extra work for a single team in a single
codebase. Since boundaries easily devolve into
[leaky abstractions,](https://en.wikipedia.org/wiki/Leaky_abstraction) extra
time and thought must go into building a design that offers full utility without
allowing invalid states. That extra time and thought should only be spent when
absolutely necessary.

While appropriate for libraries and API boundaries, encapsulation is often
misapplied to _internal code_ with _shared ownership_. We pretend that we cannot
trust ourselves to correctly use our own domain models and that putting our
logic inside a class will somehow protect it. This is silly. You and your
coworkers all have access to the code, they can do _anything they want_.
"Hiding" logic inside a class instead of putting in a pure function only makes
it harder to test!
