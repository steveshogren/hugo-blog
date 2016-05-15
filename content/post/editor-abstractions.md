+++
title = "Editor Abstractions"
date = "2016-05-09"
Categories = ["technical skills","emacs"]
draft=true
+++

Not all editing tools are created equal.

A respected coworker said it best:

> "I am just as productive with basic Vim and command-line tools as I am with a
> refactoring suite like ReSharper."

I have pair-programmed with him for hundreds of hours. I am certain he is
equally productive. Some tasks he is less efficient than ReSharper, some he is
more. The greatest benefit comes when we work in JavaScript, Haskell, or
Clojure. All his favorite tools work exactly the same. He is still effective
when refactoring suites are not.

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

Every additional editor tool is a new mental tax. Not to knock on automated
refactoring tools, I would drown in my 3 1/2 million

<!-- The more I watch Patrick work, the more I realize how much mental and muscle -->
<!-- memory I have built up around "Visual Studio"-only abstractions. -->

<!-- Our editing tools are also abstractions. We memorize commands to perform -->
<!-- actions, disregarding the underlying implementation. -->

<!-- I have found that if you have a good set of abstractions for editing code, you -->
<!-- can be very productive across lots of languages and frameworks. -->
