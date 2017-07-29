+++
title = "Design Pattern Dangers"
date = "2017-08-09"
Categories = ["technical skills"]
draft=true
+++

An elephant sits in the room.

> **Design Patterns and Domain Driven Design are two of the most dangerous books
> a new developer can read.**

Behold the elephant! He wears no clothes!

The books themselves are not bad. They offer standardized names for common
programming practices, which has made communication a lot easier for everyone.
The problem is: both books are highly prescriptive. Highly prescriptive books
discourage critical thinking if the reader lacks sufficient context.

> both books are highly prescriptive

When an author says "I've done this, and it was a great silver bullet!", they
are prescribing a set of patterns _that worked in a very specific context_. The
careful thinker can deconstruct the prescription and apply it to situations they
have seen before. They will consider the ramifications of the change in the
context of their previous projects.

Standardizing on terminology is a fine idea, and aids communication. Sometimes
you will see that a pattern is merely a new name for something you may have
already invented. Perhaps what you were calling a "_builder_" they a
"_factory_". What you called a "_chain_", they call a "_builder_". If you use
the standard names, communication will be easier.

Unfortunately, as new developers, we've seen very few previous projects. We've
_not_ already invented these concepts. **The allure of a silver bullet is so
tempting that we get "pattern madness".** Pattern madness? You know the signs.
Every new line of code must be in service of a new pattern. We write patterns in
places they do not belong: solutions looking for problems.

We can easily counter pattern madness. **Never attempt to apply a pattern you
have only read about, only apply the name to existing places that implement a
pattern.** You will find the inversion is much more useful. You become a sleuth:
searching for places the pattern already exists. Your code reading, working
memory, and pattern recognition skills will all improve.

> only apply the name to existing places that implement a pattern

If you find a place where a pattern already exists, get confirmation from
someone else. If the team agrees with you, why not rename it to match the more
standard name? Using the standardized name is probably a net benefit for
everyone.

> Not every house needs an elevator

**Do not try to force every pattern into a codebase.** Many codebases might only
have one or two places where a pattern _needs_ to exist. Some codebases might
not have need for a given pattern _at all_. Don't worry when this happens, it is
not a sign you have bad code or a bad architecture. As a metaphor, perhaps "not
every house needs an elevator".

