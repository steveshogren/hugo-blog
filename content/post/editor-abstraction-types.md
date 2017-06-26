+++
title = "Analysis of Editor Abstractions"
date = "2017-06-13"
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

Our editors provide abstractions classified into two main categories:

1. Semantic Tools
2. Text-based Tools

-----------

## Semantic Tools

Five abstractions are the core of Semantic Tools. If we had nothing else but
these, we would be at the pinnacle of power. The Big Five make a huge program
much more manageable.

* **Language Errors** - Highlight code that violates the rules of the language
* **Find All References** - See a list of all usages of a field, function, or class
* **Rename Symbol** - Rename the current field, function, or class
* **Auto-complete** - Show a list of possible symbols to complete section
* **Go To Definition** - Move editor to the symbol's defined location

The Big Five are just different ways of interacting with the
[Abstract Syntax Tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree) (AST)
of the codebase. Unfortunately, building a correct AST before run-time is only
possible in certain languages. Building an always-accurate AST is impossible in
weakly-typed, dynamic languages (or those with syntactic macros).

> How impossible? Time for a fun story. My first encounter with the AST problem
> came when a manager asked me to rename all uses of ```Contact.Id``` to
> ```Contact.ContactId``` in a big PHP project. I renamed all I could find using
> sed and grep. I ran the program and encountered hundreds of run-time errors.
> What did I miss? Someone had stored the string "Id" in the database which was
> read out and combined with PHP magic to access the ```Id``` field on my class!
> No refactoring tool could have possibly detected that. That sort of
> flexibility makes it impossible to build a correct AST.

Even flagship IDE languages like Java and C# still have a version of this
problem. Sharing dlls or jars breaks semantic tools. A **Rename Symbol** will
only detect and modify usages in the current open project, not every consumer of
the produced jar. Reflection and explicit casting also breaks semantic tools.
Depending on your environment, this ranges from a minor nuisance to a major
problem.

In the last decade, several IDE's have added plugins that can build an AST from
PHP, Python, Ruby, JavaScript, Clojure, etc by using raw text parsing or through
a modification to the interpreter. While incomplete by nature, these at least
provide some modest functionality.

IDE's also provide a lot of refactorings they provide other than the Big Five.
However most of these refactorings are just variations on themes of the Big
Five, or rely on parsing the syntax of of the language.

While I would never want to take over a huge codebase without the Big Five,
these weaknesses have caused me to rely on them less and less.

## Text-Based Tools

A text-based tool does not require an AST to work. Consider **Extract
Interface**. It takes a class and generates an interface next to the class
containing all the public functions from the class. The refactoring does not
require an AST to work, it can be easily achieved by combining several text
commands.

Any refactoring can be replaced with a text macro or regular expression. Here is
where we see the power of good abstractions. Where an IDE refactoring suite may
provide dozens or hundreds of specialized commands that only work in a single
language, a few good text abstractions compose endlessly.

For example, as demonstrated in Vim, extracting an interface in C# can be just:

<img class="pull-left" src="/images/interface-small.gif"></img>
<div class="container-fluid">
</div>

* ```:11,37t8``` - Copy the class body to line 8
* ```:10,35g!/public/d``` - Delete every line not containing the word public from
  line 10 to 35
* ```:10,12s/public//g``` - Delete all the public keywords in lines 10-12
* ```:10,12s/$/;/g``` - End each line with a semi-colon

A skilled user of these basic abstractions can solve any text-based refactoring
in only a few steps. They can invent new refactorings, solving any text
manipulation they need.

If you are skilled with good set of abstractions for editing code, you can be
very productive across lots of languages and frameworks. The real power comes
when you can combine Semantic and text-based tools. If you have an accurate **Go
To Definition** AND the ability to **playback** a macro, your options are
limitless!

For this reason, if you have the ability, you should learn one from each
category of tools available to you. If you have access to a set of Semantic
tools for your languages, learn them well, but know their limits! If you have
access to a set of text-based tools like those found in a Vim plugin, install
the Vim plugin and learn it well. You will have all the power of both at your
disposal!
