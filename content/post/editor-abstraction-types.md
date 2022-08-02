+++
title = "Powerful Editor Abstractions"
date = "2022-08-02"
Categories = ["technical skills","vim"]
+++

Not all editing tools are created equal.

> Combining several simple ideas into one compound one, and thus all complex
> ideas are made - John Locke, An Essay Concerning Human Understanding (1690)

While many words have been spent on the Holy Editor Flame Wars, I've read very
little that attempts to categorize _what they actually do_. Likewise, everyone
pays homage to the concept of using the "best tool for the job", but few talk
about when each tool would be best.

Our editors provide abstractions classified into three main categories:

1. Semantic Tools
2. Run-time Inspection Tools
3. Text-based Tools

-----------

## Semantic Tools

Five abstractions are the core of Semantic Tools. If we had nothing else but
these, we would have quite a bit indeed! These make a huge program much more
manageable.

* **Language Errors** - Indicate code that violates the rules of the language
* **Find All References** - See a list of all usages of a field, function, or class
* **Rename Symbol** - Rename the current field, function, or class
* **Auto-complete** - Show a list of possible symbols to complete section,
  ideally with documentation
* **Go To Definition** - Move editor to the symbol's defined location

These actions allow us to interact with the [Abstract Syntax
Tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree) (AST) of the codebase.
Unfortunately, building a correct AST before run-time is not always possible.
Building an always-accurate AST is impossible in any language with reflection,
or weak types, or dynamic types, or those with syntactic macros.

> My first encounter with the AST problem came when a manager asked me to rename
> all uses of ```Contact.Id``` to ```Contact.ContactId``` in a big PHP project.
> I renamed all I could find using sed and grep. I ran the program and
> encountered hundreds of run-time errors. What did I miss? Someone had stored
> the string "Id" in the database which was read out and combined with PHP magic
> to access the ```Id``` field on my class! No refactoring tool could have
> possibly detected that. That sort of reflection makes it impossible for any
> tool to build a completely correct AST.

Even flagship IDE languages like Java and C# still have a version of this
problem. Sharing dlls or jars to another project breaks semantic AST tools. A
**Rename Symbol** will only detect and modify usages in the current open
project, not every consumer of the produced binary. Reflection and explicit
casting also breaks semantic tools. Depending on your environment and what you
do with binaries, this ranges from a minor nuisance to a major inconvenience.

In the last decade, several IDE's have added plugins that can build an AST from
PHP, Python, Ruby, JavaScript, Clojure, etc by using raw text parsing or through
a modification to the interpreter. While incomplete by nature, these at least
provide some modest functionality as long as the programmer is aware of their
limitations.

## Run-time Inspection Tools (Debuggers, REPLs)

These tools allow the programmer to execute the code, and inspect what is
happening. They are typically integrated with the language itself, either
provided directly or through a library.

* **Stop at Breakpoint** - Run code to a point and stop execution there
* **Inspect Call Stack** - See the function calls that led to a breakpoint
* **Inspect scope** - See all variables in scope at a breakpoint
* **Execute statement at point** - Run any arbitrary code in the scope of the current breakpoint
* **Modify the executing code** - Modify variables and functions dynamically in the running code

Run-time inspection tools are excellent for seeing how a program is executing.
They allow the programmer direct insight into a running program. There have been
many times when I've been completed stumped with a program, only to run it with
a debugger and suddenly realize what was happening. If you have access to these
tools, they are worth learning well.

Debuggers are most useful if you can recreate the scenario you need to inspect.
Debuggers will not help for debugging an issue unless you cannot completely
recreate the exact scenario you need. For this reason, unit tests combined with
a debugger are a powerful combo.

Many REPLs (Read Eval Print Loop) allow you to modify the code live while
connected to the running process. Languages like Common Lisp, Smalltalk, and
Clojure are famous for allowing the programmer to replace blocks of code on a
running server: sometimes even in production! Integrated REPLs are an extremely
powerful tool, and powerful tools can be quite dangerous. Knowing how to use a
tool well is the first step in knowing how to use it wisely.

## Text-Based Tools

A text-based tool operates on raw text only. It can be limited to a single file,
or many files. Text tools do not know anything about the AST or structure, they
only operate on raw text. 

* **Find/Replace** - Search for text and replace it
* **Regular Expressions** - Transform text based on pattern matching rules
* **Record/Playback Macro** - Record and playback a series of operations
* **Balance parenthesis/brackets/quotes** - Transform balanced sections
* **Linting/Style enforcement** - Show places code doesn't match a preferred
  style, optionally fix style warnings

Consider the common Semantic transformation **Extract Interface**. It takes a
class and generates an interface next to the class containing all the public
functions from the class. The refactoring does not require an AST to work, it
can be easily achieved by combining several text commands. See example in my
post [Vim Refactoring
Patterns](/vim-refactoring-patterns)

Any refactoring can be replaced with a text macro or regular expression. Here is
where we see the power of good abstractions. Where an IDE refactoring suite may
provide dozens or hundreds of specialized commands that only work in a single
language, a few good text abstractions compose endlessly in any text files.

A skilled user of these basic abstractions can solve any text-based refactoring
in only a few steps. They can invent new refactorings, solving any text
manipulation they need.

{{<rawhtml>}}
  <p class=" bookAdBanner col-xs-12 col-sm-12 col-md-12">
    <span class="col-xs-10 col-sm-10 col-md-10">
      Become a master of <strong>Regular Expressions</strong> or
  <strong>Macros</strong> with practice exercises to teach you how to <i>think</i> using these tools, and identify places
      where they are best used: 
      <a href="https://leanpub.com/deliberatevim">
        10 Minute Vim
      </a>
    </span>
    <a class=" col-xs-2 col-sm-2 col-md-2" href="https://leanpub.com/deliberatevim">
      <img style="padding:1rem" src="/images/vim.jpg"></img>
    </a>
  </p>
{{</rawhtml>}}


### Balance Parenthesis

This set of tools is not very well known, despite being very useful in the right
context. The best example of it is:
[ParEdit](http://danmidwood.com/content/2014/11/21/animated-paredit.html)

The tool by default prevents the programmer from entering unbalanced characters,
but then offers a suite of commands for transforming them. 

ParEdit is less useful in languages with relatively fewer balanced characters,
and most useful in languages where balanced characters contain an entire
expression:

| Balanced Characters             | Languages                       |
|---------------------------------|---------------------------------|
| **Fewer**                       | Python, Ruby, OCaml/F#, Haskell |
| **More**                        | C#, Java, Javascript, C++       |
| **Surround Entire Expressions** | Clojure, Scheme, Racket         |

If you regularly use a language in the bottom two rows, you might want to check
out if your editor has an implementation of ParEdit!

## Conclusion - Have all tools at your disposal

The real power comes when you can combine Semantic, run-time, and text-based
tools to solve different problems.

For this reason, if you have the ability, you should learn one from each
category of tools available to you. 

1. Semantic Tools
   - Intelij IDEA, PyCharm, VS Code, Visual Studio, Eclipse 
2. Run-time Inspection Tools
   - Debuggers in Intelij IDEA, PyCharm, VS Code, Visual Studio, Eclipse 
   - REPL (Python, Ruby, Clojure, Haskell, Javascript, Smalltalk)
3. Text-based Tools
   - Vim / Emacs (even available an IDE plugin!)
   - ParEdit
   - Grep
   - AWK

Mastering each category of tools will go a long way to increasing your ability
to write and transform code efficiently.
