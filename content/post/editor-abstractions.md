+++
title = "Editor Abstractions"
date = "2016-05-09"
Categories = ["technical skills","emacs"]
draft=true
+++

Not all editing tools are created equal. A respected coworker said it best:

> "I am just as productive with basic Vim and command-line tools as I am with a
> refactoring suite like ReSharper." - Respected Coworker

I have pair-programmed with him for hundreds of hours. He is equally productive.
Some tasks he is less efficient than with ReSharper, some he is more. The
greatest benefit comes when we work in JavaScript, Haskell, or Clojure. His
productivity doesn't change! **Vim and grep work exactly the same on any text.**

The tools we use to produce code are as much an abstraction as the tools we rely
on in code. If you have a good set of abstractions, you can use them to solve
any problem. A well-designed abstraction composes well, and can be combined for
new utility.

Consider the sequence abstractions. With only: ```map```, ```filter```, and
```fold``` (in Linq: ```select```, ```where```, and ```aggregate```), you can
transform any sequence of data into another shape. Mastery of the three
abstractions gives the power to transform any data. The power comes from how
easily they can be combined.

The three major sequence abstractions are far superior to dozens of specialized
functions. The three are easy to learn, simple to combine, and allow for endless
reuse.

Every additional editor abstraction is a new mental tax.

# The Big Four

Four abstractions make up the "Holy Grail" of editing. If we had nothing else
but these, we would be at the pinnacle of power.

* **Find All References** - See a list of all usages of a field, function, or class
* **Rename Symbol** - Rename the current field, function, or class
* **Auto-complete** - Show a list of possible symbols to complete section
* **Go To Definition** - Move editor to the symbol's defined location

I would not want to work in a huge program without the Big Four.

The Big Four are just different ways of exploring the AST of the codebase.
Unfortunately, building a correct AST before run-time is only possible in
certain languages. Weakly-typed, dynamic languages (or those with unhygienic
macros) make building an accurate AST impossible.

How impossible? Time for a fun story. My first encounter with the AST problem
came when my boss asked me to rename all uses of "Id" to "ContactId" in a big
PHP project. I renamed all I could find using sed and grep. I went to run the
program, and encountered hundreds of run-time errors. What did I miss? Ah,
someone had stored a string in the database containing "Id", which was read out
and combined with PHP magic to access the "Id" field on my class. No refactoring
tool could have possibly detected that. That sort of flexibility makes it
impossible to build a correct AST.

Even the flagship refactoring languages like Java and C# still have a version of
this problem. Sharing dlls or jars breaks refactoring tools. A **Rename Symbol**
will only detect and modify usages in the current project, not every consumer.
Depending on your practices, this ranges from a minor nuisance to a major
problem.

While I would never want to take over a huge codebase without the Big Four, I
have lately come to rely on them less and less.


<!-- The more I watch Patrick work, the more I realize how much mental and muscle -->
<!-- memory I have built up around "Visual Studio"-only abstractions. -->

<!-- Our editing tools are also abstractions. We memorize commands to perform -->
<!-- actions, disregarding the underlying implementation. -->

<!-- I have found that if you have a good set of abstractions for editing code, you -->
<!-- can be very productive across lots of languages and frameworks. -->
