+++
title = "Scientific Software Design: Human Working Memory"
date = "2018-02-23"
Categories = ["technical skills", "oo-design"]
+++

### Good design must be measurable

Good software design should be scientific, universal, and measurable. Saying
"this code is good", or "this code is crap" is useless if we cannot even agree
on what is good design.

Design philosophies like "Single Responsibility Principle" can't be objectively
measured. The programmer must interpret if the code they are reading actually
adheres to the pattern. Such an interpretation is subject to biases and
confusion.

As much as we may joke to the contrary, modern programming languages are
designed to allow humans to express our ideas to other humans. We should adopt
design philosophies that best supplement human cognition.

### Example: Human Working Memory

For example,
[Miller's law](https://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two)
cites that the average human working memory can only maintain approximately
seven chunks of data at a time. Using this, we could determine a scientific
design principle: "no more than seven variables in scope."

> No more than seven variables in scope 

This simple design philosophy is grounded in human cognition and is empirically
measurable by programmers and machines.


