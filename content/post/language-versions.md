+++
title = "Language Versions"
date = "2015-07-20"

Categories = []
+++

Let's play a thought exercise. Imagine your development toolchain is like a
semantic version number. Small features that incrementally improve your
situation are like minor updates. They don't cause any large shifts in thinking
or process. Major updates are big, new concepts, quantum jumps in theory or
practice.

I am not talking about the political, social, or financial aspects of a
toolchain. For example, hiring is a complex beast entirely in its own
category. The criteria for choosing a tool when hiring a few hundred offshore
developers is very different than the criteria for hiring for a team of three
senior developers. I'll leave those aspects alone.

What are some examples of these value changes I've noticed in my development?

## Minor Benefits

### Perl - PHP - Python - Ruby

Switching from Perl to PHP for me was a minor change. I was able to carry over
almost all my skills, and for the most part, the differences were mostly
syntactic. Later, when I started using Python, most of my experience from Perl
and PHP was still useful. The libraries had different names, and a few concepts
were different, but on the whole, all three were in a same class of productivity
for me.

More recently, on taking over a small Ruby codebase (scripts, not Rails), I again
found much of my previous experience was still valuable. I can almost guess what
things will be called or how they should be used. I still have to look up
library names and keywords, but on the whole, the languages all provide very
similar workflows. I suspect all four are in the same class of productivity,
with some minor differences here and there. These days I put effort only into
maintaining familiarity with one of these languages, since I am confident I
could quickly relearn any of the other three on demand.

### Java - VB.NET - CSharp

Moving between Java, VB.NET, and C# feel similarly minor in tangible
productivity. For the most part, all the expectations and experience carries
between the three. Obviously the tools are different, and there are a number of
gotchas, but nothing changed my productivity in any major way. I doubt any of
those three have any one killer feature that cannot be had in the other.

## Major Benefits

### Automated Testing

Switching from "run it and see" testing to automated unit and integration
testing was a major change with large productivity benefits. All my experience
to date was still useful, but I needed a whole new set of skills to be able to
apply the techniques. Tools like dependency injection, mocking, TDD, and
continuous integration enabled me to build and revive much larger
systems. Automated testing is a skill that applies well to every language I've
worked in, with benefits that grow increasingly valuable with more complex
systems. I don't always automated test, but it is an invaluable tool for certain
classes of problems. 

### REPL Development (moving from Python/Ruby to Clojure)

Repl based development with live hot patching was another major change. It
required a new way of thinking about programming, and with it came an
instantaneous feedback loop. Much like unit testing, it was an entirely new
skill, but opened up a very fast method of building up a system from small
parts. Additionally, it allowed me to rapidly progress in my skills, because I
could instantly see live feedback from my code, without needing to write a whole
test just to execute the code.

### Powerful Static Typing (moving from C# to F#)

Moving from a typical static typed language to one with algebraic data types has
been a major change, with major productivity benefits. I have noticed entire
classes of defects disappearing. Additionally, because of the better compiler
errors, the resulting codebases are much easier to refactor, which means a
faster reaction to a changing domain. 

