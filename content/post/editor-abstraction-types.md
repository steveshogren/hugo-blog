+++
title = "Editor Abstractions: Why Examine Them"
date = "2016-05-09"
Categories = ["technical skills","emacs"]
draft=true
+++

Not all editing tools are created equal.

> Combining several simple ideas into one compound one, and thus all complex
> ideas are made - John Locke, An Essay Concerning Human Understanding (1690)

While many words have been spent on the Holy Editor Flame Wars, I've read very
little that attempts to categorize _what they actually do_. Likewise, everyone
pays homage to the concept of using the "best tool for the job", but most have
no idea what tools are provided or when each tool would be best.

<!-- If every concrete sequence had its own bespoke functions, we would find them -->
<!-- much more difficult to use. Imagine if only Lists could be used in a -->
<!-- ```foreach```, and Dictionaries needed to be ```for-every``` while Array needed -->
<!-- a ```for``` loop. We would find them much harder to use. Moving code from one -->
<!-- data structure to another would be a massive undertaking. _This is what IDE's do -->

<!-- The three major sequence abstractions are far superior to dozens of specialized -->
<!-- functions. They are also superior to the overly generic function ```foreach```. -->
<!-- The ```foreach``` function is weak because it is too generic. The a they -->
<!-- abstract away the details needed to make ```foreach``` work. The three are easy -->
<!-- to learn, simple to combine, and allow for endless reuse. -->

Our editors also provide abstractions. I classify them into two main categories:

1. Semantic Tools
2. Syntactic Tools

-----------
<!-- Every additional editor abstraction is a new mental tax. -->

## Semantic Tools

Five abstractions make up the "Holy Grail" of Semantic Tools. If we had nothing
else but these, we would be at the pinnacle of power. The Big Five make a huge
program much more manageable.

* **Language Errors** - Highlight code that violates the rules of the language
* **Find All References** - See a list of all usages of a field, function, or class
* **Rename Symbol** - Rename the current field, function, or class
* **Auto-complete** - Show a list of possible symbols to complete section
* **Go To Definition** - Move editor to the symbol's defined location

The Big Five are just different ways of interacting with the AST of the
codebase. Unfortunately, building a correct AST before run-time is only possible
in certain languages. Building an always-accurate AST is impossible in
weakly-typed, dynamic languages (or those with unhygienic macros).

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
will only detect and modify usages in the current open project, not every
consumer. Reflection similarly breaks semantic tools. Depending on your
practices, this ranges from a minor nuisance to a major problem.

  <!-- In the last decade, several IDE's have added plugins that can build an AST from -->
  <!-- PHP, Python, Ruby, JavaScript, Clojure, etc. While incomplete by nature, these -->
  <!-- at least provide some modest functionality. -->
<!-- While I would never want to take over a huge codebase without the Big Four, I have lately come to rely on them less and less. -->

IDE's have a lot of refactorings they provide other than the Big Four. However
most of these refactorings are syntactic, not semantic.

## Syntactic Tools

A syntactic tool does not require an AST to work. Consider **Extract
Interface**. It takes a class and generates an interface next to the class
containing all the public functions from the class. The refactoring does not
require an AST to work, it can be easily achieved by combining several text
commands.

Any syntactic refactoring can be replaced with a text macro or regular
expression. Here is where we see the power of good abstractions. Where a
refactoring suite may provide dozens or hundreds of specialized commands that
only work in a single language, a few good text abstractions compose endlessly.

## Text Abstractions

* **Edit**
 * **Change** - Change a piece of text with another
 * **Replace** - Replace a character
 * **Insert** - Insert text
 * **Delete** - Delete text
 * **Copy** - Copy text
* **Motion**
 * **(Forward|Back) By (Letter|Word|Line|Sentence|Paragraph)** - Move cursor by
   specified delimiter
 * **Range** - Operate on a range of lines or search criteria
* **Repeat** - Repeat last command
* **Search** - Find instances of text
 * **Replace** - Replace with alternate text
 * **Operate** - Perform action on line containing text
 * **Delete** - Delete line containing text
* **Record|Playback** - Record and save actions, replaying them when needed

A skilled user of these basic abstractions can solve any syntactic refactoring
in only a few steps. They can invent new refactorings, solving any text
manipulation they need.

<!-- | |  | Correctly Call Function | Adding New State | Best When | -->
<!-- |------------- |-------------- | ------------ | ------------- | ------------- | -->
<!-- |**Semantic Tools** | Explicit |  Easier  | Harder | State Values Change Frequently -->
<!-- |**Syntactic Tools** | Implicit |  Harder  |  Easier | State Values Change Rarely -->
<!-- |**Text Abstractions** | Implicit |  Harder  |  Easier | State Values Change Rarely -->

<!-- The more I watch Patrick work, the more I realize how much mental and muscle -->
<!-- memory I have built up around "Visual Studio"-only abstractions. -->

<!-- Our editing tools are also abstractions. We memorize commands to perform -->
<!-- actions, disregarding the underlying implementation. -->

<!-- I have found that if you have a good set of abstractions for editing code, you -->
<!-- can be very productive across lots of languages and frameworks. -->
