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

To start, consider if a macro or a search/replace makes the most sense for the
task. A macro is usually a little more tedious to get right, but can be more
forgiving than a search/replace for a complex task. If the search/replace
requires you to parse several patterns at once, a macro might just be easier.

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

The commands:

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

<div class="container-fluid">
</div>

# Extract Interface From Class 

Let's extract an interface from a class. A region-based search and replace is a
great fit for this task. Since we are not matching or reordering several blocks
of text, several search/replace steps works well. First, duplicate the whole
class body to the top of the file. Delete all lines that are not the function
signature lines. Remove all public keywords and add in semicolons on each line
ending. Finish up with adding the interface name and adding it to the class.

<img class="pull-left" src="/images/interface-small.gif"></img>

* ```11,37t8``` - Copy the class body to line 8
* ```10,35g!/public/d``` - Delete every line not containing the word public from
  line 10 to 35
* ```10,12s/public//g``` - Delete all the public keywords in lines 10-12
* ```10,12s/$/;/g``` - End each line with a semi-colon
* ```:8``` - Jump to line 8 (and add interface and name)
* ```:14``` - Jump to line 14 (and add interface name)

<div class="container-fluid">
</div>

# Change a Function Signature

Let's change a function signature to move a parameter into a generic and not
have to cast. I want to change a line like this

``` m.Name = (NameType)getEnum(typeof(NameType), req.Name); ```

into this:

``` m.Name = getEnum<NameType>(req.Name); ```

Normally, this is a very manual task, requiring many edits.


In this case, a search/replace is possible,
but probably a lot more complex. We'd have to identify and remove the
```(NameType)```, locate the opening ```(``` of the parameter list, put in the
```NameType``` inside a pair of ```<>```, then remove the first parameter and
comma. While possible, a macro record/playback fits this task easily.

We perform those steps above, but use the f/F commands to find markers in the
line. This allows the playback to work on any line with the same markers.

<img src="/images/generic2.gif"></img>

* ```/getEnum``` - Search for ```getEnum```
* ```qq``` - Start macro in ```q```
* ``F(```` - Backwards find ```(```
* ``da(```` - Delete whole block in ```()```
* ```f(``` - Find next ```(```
* ```P``` - Paste backwards one character
* ```r>``` - Replace character with ```>```
* ```F(``` - Backwards find ```(```
* ```r<``` - Replace character with ```<```
* ```f(``` - Find next ```(```
* ```l``` - Left one character
* ```df ``` - Delete up to and including next space
* ```n``` - Search next ```getEnum```
* ```q``` - Stop macro recording
* ```5@q``` - Replay macro 5 times



