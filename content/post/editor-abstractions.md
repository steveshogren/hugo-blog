+++
title = "Editor Abstractions"
date = "2016-05-09"
Categories = ["technical skills","emacs"]
draft=true
+++

Not all editing tools are created equal. A respected coworker said it best:

> "I am just as productive with basic Vim and command-line tools as I am with a
> refactoring suite like ReSharper." - Coworker

I have pair-programmed with him for hundreds of hours. He is equally productive.
Some tasks he is less efficient than with ReSharper, some he is more. The
greatest benefit comes when we work in JavaScript, Haskell, or Clojure. His
productivity doesn't change! **His Vim and grep skills work exactly the same on
any text.**

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

Our editors also provide abstractions. I classify them into two main categories:

1. Semantic Tools
2. Syntactic Tools

Every additional editor abstraction is a new mental tax.

## Semantic Tools

Four abstractions make up the "Holy Grail" of editing. If we had nothing else
but these, we would be at the pinnacle of power. The Big Four make a huge
program much more manageable. 

* **Find All References** - See a list of all usages of a field, function, or class
* **Rename Symbol** - Rename the current field, function, or class
* **Auto-complete** - Show a list of possible symbols to complete section
* **Go To Definition** - Move editor to the symbol's defined location

The Big Four are just different ways of exploring the AST of the codebase.
Unfortunately, building a correct AST before run-time is only possible in
certain languages. Weakly-typed, dynamic languages (or those with unhygienic
macros) make building an accurate AST impossible.

How impossible? Time for a fun story. My first encounter with the AST problem
came when my boss asked me to rename all uses of ```Contact.Id``` to
```Contact.ContactId``` in a big PHP project. I renamed all I could find using
sed and grep. I went to run the program, and encountered hundreds of run-time
errors. What did I miss? Someone had stored a string in the database containing
"Id", which was read out and combined with PHP magic to access the ```Id```
field on my class! No refactoring tool could have possibly detected that. That
sort of flexibility makes it impossible to build a correct AST.

Even the flagship refactoring languages like Java and C# still have a version of
this problem. Sharing dlls or jars breaks semantic tools. A **Rename Symbol**
will only detect and modify usages in the current project, not every consumer.
Reflection similarly breaks Semantic Tools. Depending on your practices, this
ranges from a minor nuisance to a major problem.

  <!-- In the last decade, several IDE's have added plugins that can build an AST from -->
  <!-- PHP, Python, Ruby, JavaScript, Clojure, etc. While incomplete by nature, these -->
  <!-- at least provide some modest functionality. -->
<!-- While I would never want to take over a huge codebase without the Big Four, I have lately come to rely on them less and less. -->

Most IDE's have a lot of refactorings they provide other than the Big Four.
However most refactorings they provide are syntactic, not semantic.

## Syntactic Tools

A syntactic tool does not require an AST to work. Consider **Extract
Interface**. It takes a class and generates an interface next to the class
containing all the public functions from the class. The refactoring does not
require an AST to work, it can be easily achieved by combining several Vim
commands.

Any syntactic refactoring can be replaced with a Vim macro or regex. Here is
where we see the power of good abstractions.

Short of the Big Four, I don't really need any refactoring tools if I have a
good mastery of 

<!-- The more I watch Patrick work, the more I realize how much mental and muscle -->
<!-- memory I have built up around "Visual Studio"-only abstractions. -->

<!-- Our editing tools are also abstractions. We memorize commands to perform -->
<!-- actions, disregarding the underlying implementation. -->

<!-- I have found that if you have a good set of abstractions for editing code, you -->
<!-- can be very productive across lots of languages and frameworks. -->
