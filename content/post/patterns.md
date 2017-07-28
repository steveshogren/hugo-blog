+++
title = "Design Pattern Dangers"
date = "2017-08-09"
Categories = ["technical skills"]
draft=true
+++

An elephant sits in a room.

**Design Patterns and Domain Driven Design are two of the most dangerous books a
new developer can read.**

Behold the elephant! He wears no clothes!

The books themselves are not bad. They offer standardized names for common
programming practices, which has made communication a lot easier for everyone.
The problem is: both books are highly prescriptive.
Highly prescriptive books discourage critical thinking if the reader lacks
sufficient context.

> both books are highly prescriptive

When an author says "I've done this, and it was a great silver bullet!", they
are prescribing a set of patterns _that worked in a very specific context that
is most likely irrelevant, if not even unrepeatable_. The careful thinker can
deconstruct the prescription and apply it to situations they have seen before.
They will consider the ramifications of the change in the context of their
previous projects.

Standardizing on terminology is a fine idea, and aids communication.
Oftentimes you will see that a particular pattern is merely a new name for something you
may have already invented. Perhaps you called it a "_builder_", but they call it
a "_factory_". What you called a "_chain_", they call a "_builder_".

Unfortunately, a new developer has seen very few previous projects. They've
_not_ already invented these concepts. **The allure of a silver bullet is so
tempting that they get "pattern madness".** Pattern madness? You know the signs,
you've seen it before, perhaps even in yourself. Every new line of code they
write must be in service of a new pattern that they just read, or they will
rewrite (potentially poorly or even wrongly) huge parts of the project, forcing
it to conform to newly acquired ubiquitous language.

You can easily counter pattern madness. **Never attempt to apply a pattern you
have only read about, only apply a name to existing places that implement a
pattern.** You will find the inversion is much more useful. You should become a
sleuth, engaging your reticular activating system, in search of places the pattern already exists. Your
code reading, working memory, and pattern recognition skills will sharply improve.

If you find a place where a pattern already exists, get confirmation from
someone else. If the team agrees with you, why not rename it to match the more
standard name? A rename to a standardized name is harmless, and probably a net
benefit for everyone.

**Do not try to force each pattern into a codebase.** Many codebases might only
have one or two places where a pattern _needs_ to exist. Some codebases might
not have need for a pattern _at all_.
