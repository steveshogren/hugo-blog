+++
title = "Vim Refactoring Patterns"
date = "2016-05-25"
Categories = ["technical skills","vim","refactoring"]
draft=true
+++

The Vim commands can be used to edit any type of code. Each command can be
composed with others to accomplish more.

Here are some patterns that are helpful for demonstrating how to build major
structural refactorings of code using the Vim commands.

# Reorder A List Of Numbers

I needed to reorder the numbers on the end of each line to be increasing.
Whenever I need a repeated action, I first reach for a macro:

<img class="pull-left" src="/images/proto-macro-small.gif"></img>

The commands to run this were simple:

* ```/;``` - Search for ';'
* ```n```  - Go to next ';'
* ```qq``` - Start macro
* ```db``` - Delete Backwards
* ```N```  - Search for previous ';'
* ```yb``` - Yank Backwards
* ```n```  - Search for next ';'
* ```P```  - Paste backwards
* ```Ctrl+a``` - Increment Number
* ```n```  - Go to next ';'
* ```n```  - Go to next ';'
* ```q```  - Stop Recording Macro
* ```33@q``` - Replay 33 times the 'q' macro

This took me a few seconds to type, and was a lot more interesting!

# 

