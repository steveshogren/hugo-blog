+++
title = "Editor Abstractions"
date = "2016-05-09"
Categories = ["technical skills","emacs"]
draft=true
+++

Not all editing tools are created equal. A respected coworker said it best:

> "I am just as productive with basic Vim and command-line tools as I am with a
> refactoring suite like ReSharper."

I have pair-programmed with him for hundreds of hours. I am certain he is
equally productive. Some tasks he is less efficient than ReSharper, some he is
more. The greatest benefit comes when we work in JavaScript, Haskell, or
Clojure. All his favorite tools work exactly the same! 

The tools we use to produce code are as much an abstraction as the tools we rely
on in code. If you have a good set of abstractions, you can use them to solve
any problem. A well-designed abstraction composes well, and can be combined for
new utility.

Consider the sequence abstractions. With only: ```map```, ```filter```, and
```fold``` (in Linq: ```select```, ```where```, and ```aggregate```), you can
transform any sequence of data into another shape. Mastery of the three
abstractions gives the power to transform any data. The power comes from how
easily they can be combined.

The three major sequence abstractions are far superior to several dozen
specialized functions. The three are easy to learn, simple to combine, and
provide for endless re-use.

Every additional editor abstraction is a new mental tax.

# The Big Four

Four abstractions 

I would not want to work in a huge program without "Find All References",
"Rename Symbol", "Auto-complete", and "Go To Definition". All four are just
different ways of exploring the AST of the code-base. Unfortunately, building a
correct AST before run-time is only possible in certain languages. Weakly-typed,
dynamic languages make it impossible to build an accurate AST before run-time.

A little break for a fun story. My first encounter with this problem came when
my boss asked me to rename all uses of "Id" to "ContactId" in a big PHP project.
I renamed all I could find using sed and grep. I went to run the program, and
encountered hundreds of run-time errors. What did I miss? Ah, someone had stored
the "Id" string in the database, then read it out and used PHP magic to access
the "Id" field on my class. No refactoring tool could have possibly detected
that.

Not to knock on automated refactoring tools,

<!-- The more I watch Patrick work, the more I realize how much mental and muscle -->
<!-- memory I have built up around "Visual Studio"-only abstractions. -->

<!-- Our editing tools are also abstractions. We memorize commands to perform -->
<!-- actions, disregarding the underlying implementation. -->

<!-- I have found that if you have a good set of abstractions for editing code, you -->
<!-- can be very productive across lots of languages and frameworks. -->
