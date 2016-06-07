+++
title = "Vim Refactoring Patterns"
date = "2016-05-25"
Categories = ["technical skills","vim","refactoring"]
draft=true
+++

Editor macros are a secret weapon for editing text. While they are hard to
learn, no other tool offers such broad speed and power for automating changes. A
skilled macro wielder can make huge changes to a codebase with ease.

Here are some inspirational patterns to demonstrate major structural
refactorings using Vim macros and search/replace commands.

Learning how to record and playback macros is a skill like any other. With
practice, it becomes second-nature. When skilled, writing a useful macro takes
very little effort.

Like any other skill, the first few dozen times you write a macro it won't work
right, or will mangle the text. That is okay! If you are setting out to learn
macros, allow yourself to be slow while you master the skill. Touch-typing can
be many times faster than hand-writing or hunt-and-peck, but while learning you
will be slower. Macros will save you huge amounts of time, but you have to allow
yourself to be slow while you master the skill.

<!-- # Macro Saving -->

<!-- When you build a complex macro and want to save it for later, just save it off -->
<!-- to a file. Since a macro is just a list of commands to execute, you can copy and -->
<!-- paste macros into registers just like text: -->

<!-- * ```"qp``` - Paste the 'q' register contents -->
<!-- * ```"qy``` - Insert selected text into the 'q' register -->

# Reorder A List Of Numbers

A change left me with a file with unordered numbers. The numbers needed to be
increasing, without changing the actual order of the lines. Macros are my first
choice to accomplish a repeated action.

<img class="pull-left" src="/images/proto-macro-small.gif"></img>
<div class="container-fluid">
</div>

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

This only took me a few seconds to type! I was able to run this across the whole
file by replaying it the number of lines minus one. Because I saved it in the
'q' register, I was able to keep it saved for the whole session, which involved
refactoring several dozen similar files. I got to re-use the saved macro at
least 20 more times in that three hour session!

I don't think this macro is very complex. I would only leave it in the register
for a single session, and remake it in the future if needed. But if I wanted to
save it, running ```"qp``` spits out: ```dbNybnP^ann```.

<div class="container-fluid">
</div>

# Extract Interface From Class 

Let's extract an interface from a class. A region-based search and replace is a
great fit for this task. Since we are not matching or reordering several blocks
of text, several search/replace steps work well. First, duplicate the whole
class body to the top of the file. Delete all lines that are not the function
signature lines. Remove all public keywords and add in semicolons on each line
ending. Finish up with adding the interface name and adding it to the class.

<img class="pull-left" src="/images/interface-small.gif"></img>
<div class="container-fluid">
</div>

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

In this case, a search/replace is possible, but probably a lot more complex.
We'd have to identify and remove the ```(NameType)```, locate the opening
```(``` of the parameter list, put in the ```NameType``` inside a pair of
```<>```, then remove the first parameter and comma. A macro record/playback
fits this task easily.

We perform those steps above, but use the f/F commands to find markers in the
line. This allows the playback to work on any line with the same markers.

<img src="/images/generic2.gif"></img>
<div class="container-fluid">
</div>

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

<div class="container-fluid">
</div>

# Update SQL Query Fields

I needed to replace the names in a set of sql queries to sanitize some data to
hand off to a customer. I grabbed a set of
[Star Wars names](http://www.dimfuture.net/starwars/random/generate.php) and
copied it to my sql file. They were tab AND newline separated.

<img src="/images/rename.gif"></img>
<div class="container-fluid">
</div>

* ```:1,26s/\t//g``` - Replace tabs with newlines
* ```:1,100s/^\W*//g``` - Delete leading whitespace
* ```:1,100s/\W*$//g``` - Delete trailing whitespace
* ```:101``` - Jump to line 101
* ```qq``` - Start macro in ```q``` register
* ```:-100``` - Jump 100 lines up
* ```2yw``` - Yank (copy) two words
* ```:+100``` - Jump down 100 lines
* ```f)``` - Jump to next ```)```
* ```f'``` - Jump to next ```'```
* ```l``` - Move right
* ```vi'``` - Select text in quotes
* ```p``` - Paste clipboard
* ```:+1``` - Jump down one line
* ```q``` - End macro
* ```99@q``` - Replay macro 99 times

# Conclusion

You probably noticed a couple of patterns. I typically use a macro when a
search/replace would require using several groups. In macros, I use relative
line jumps and liberal uses of the search (```/``` and ```n/N```) and find
(```f/F```) commands for navigating. The search and find commands let my macro
work the same on many different shapes of lines. I also end each macro with a
step for finding the "next" line to operate on. By ensuring each iteration
finishes by going to the "next" line, I can repeat the command with the built-in
command repeat without manually executing each one.

Macros are an incredibly powerful tool for editing text. Like any tool, they
require practice to develop mastery. With practice macros become second-nature.
