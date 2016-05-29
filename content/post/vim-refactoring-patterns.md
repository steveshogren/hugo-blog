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

# Macro Saving

If I had just built a complex macro and I wanted to save it for later, I would
save it off to a file. Since a macro is just a list of commands to execute, we
can copy and paste macros into registers just like text:

* ```"qp``` - Paste the 'q' register contents
* ```"qy``` - Save selection to the 'q' register

# Reorder A List Of Numbers

I needed to reorder the numbers on the end of each line to be increasing.
Whenever I need a repeated action, I first reach for a macro:

<img class="pull-left" src="/images/proto-macro-small.gif"></img>

The commands to run this were simple:

* ```/;``` - Search for ';'
* ```n```  - Go to next ';'
* ```qq``` - Start macro in 'q' register
* ```db``` - Delete backwards
* ```N```  - Search for previous ';'
* ```yb``` - Yank backwards
* ```n```  - Search for next ';'
* ```P```  - Paste backwards
* ```Ctrl+a``` - Increment number
* ```n```  - Go to next ';'
* ```n```  - Go to next ';'
* ```q```  - Stop Recording macro
* ```33@q``` - Replay 33 times the 'q' macro

This took me a few seconds to type, and was a lot more interesting! I was able
to run this across the whole file by replaying it the number of lines minus one.
Because I saved it in the 'q' register, I was able to keep it saved for the
whole session, which involved refactoring several dozen similar files. I got to
re-use the saved macro at least 20 more times in that three hour session!

I don't think this macro is very complex. I would only leave it in the register
for a single session, and remake it in the future if needed. But if I wanted to
save it, running ```"qp``` spits out: ```dbNybnP^ann```.

# Extract Interface From Class 

Extracting an interface is several commands composed together. First we grab the
contents of the class including the curly brackets. 

<img class="pull-left" src="/images/interface-small.gif"></img>

* ```11,37t8``` - Copy the class body to line 8
* ```10,35g!/public/d``` - Delete every line not containing the word public from
  line 10 to 35
* ```10,12s/public//g``` - Delete all the public keywords in lines 10-12
* ```10,12s/$/;/g``` - End each line with a semi-colon
* ```:8``` - Jump to line 8 (and add interface and name)
* ```:14``` - Jump to line 14 (and add interface name)

