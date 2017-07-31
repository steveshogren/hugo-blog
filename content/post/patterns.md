+++
title = "Design Pattern Dangers"
date = "2017-08-01"
Categories = ["technical skills"]
draft=true
+++

> **Design Patterns and Domain Driven Design are two of the most dangerous books
> a new developer can read.**

The books themselves are not bad. They offer standardized names for common
programming practices, which has made communication a lot easier for everyone.
Sometimes you will see that a pattern is merely a new name for something you may
have already invented. Perhaps what you were calling a "_builder_" they call a
"_factory_". If you use the standard names, communication will be easier.

The problem is: both books are highly prescriptive. Highly prescriptive books
discourage critical thinking if the reader lacks sufficient context.

> both books are highly prescriptive

When an author says "I've done this, and it was a great silver bullet!", they
are prescribing a set of patterns that worked in a very specific context. The
careful thinker can deconstruct the prescription. **The most important part is
when to do the pattern, not how to do it.** Experienced programmers can mentally
apply the patterns to situations they have seen before. They can consider the
ramifications of any change in the context of their previous projects.

> the most important part is _when_ to do the pattern, not _how_


Unfortunately, as new developers, we've seen very few previous projects. We've
_not_ already invented these concepts. The allure of a silver bullet is so
tempting that we get "pattern madness".

Pattern madness? You know the signs. Every new line of code must be in service
of a new pattern. We write patterns in places they do not belong: solutions
looking for problems.

We can easily counter pattern madness. **Never attempt to apply a pattern you
have only read about, only rename existing places that already implement a
pattern.** This inversion is much more useful. You become a sleuth: searching
for places the pattern already exists. Your code reading, working memory, and
pattern recognition skills will all improve.

> Not every house needs an elevator

**Do not try to force every pattern into a codebase.** Many codebases might only
have one or two places where a pattern would solve a problem. Some codebases
might not need a given pattern _at all_. Don't worry when this happens, it is
not a sign you have bad code or a bad architecture. As a metaphor, "not every
house needs an elevator."

