+++
title = "Editor Abstractions"
date = "2016-05-09"
Categories = ["technical skills","emacs"]
draft=true
+++

Not all editing tools are created equal.

I was recently inspired by a comment from a respected coworker:

> "I am just as productive with basic Vim and command-line tools as I am with a
> refactoring suite like ReSharper."

I have pair-programmed with him for hundreds of hours of C# development. He is
equally productive, that much I know. On some tasks he is less efficient than
with ReSharper, on others he is more. To clarify, we use the superb VsVim inside
Visual Studio, so he still relies on the built-in tools for "Auto-complete"
and "Go to Definition".

The greatest benefit comes when we work in JavaScript, Haskell, or Clojure. His
productivity doesn't drop! **His Vim and grep skills work exactly the same on
any text.**

The tools in our editors and IDE's are concrete abstractions. If you have a good
set of abstractions, you can use them to solve any problem. A well-designed
abstraction composes well, and can be combined for new utility. 

Consider the sequence abstractions. With only: ```map```, ```filter```, and
```fold```, you can transform any sequence of data into another shape. Mastering
the three sequence abstractions empowers you to transform any data. The power comes
from how easily they can be combined.

You can replicate most of the functionality of a refactoring suite using basic,
composable text-editing commands. The dozen Vim commands can be recorded,
edited, and replayed to transform text in any way you need. While no replacement
for the semantic tools "Go to Definition" and "Auto-complete", they are an easy
replacement for most other refactorings.

The composable text-editing commands are a much better abstraction than those
provided by a refactoring suite. Refactoring suites often have dozens of bespoke
commands that only work in certain contexts. Even the best of these suites are
often constrained to a single language. **If you ever work in more than one
language, you will get the most value learning to rely on abstractions that are
constant.**
