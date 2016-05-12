+++
title = "Why Emacs"
date = "2016-05-09"
Categories = ["technical skills","clojure", "clojurescript"]
draft=true
+++

An IDE is a "T-shaped" editor. The IDE provides an amazing experience for one or
two languages, and an average or poor experience in everything else. By default
Visual Studio and Intellij IDEA offer phenomenal support for C# and Java. They
both have plugins that decently support other languages like SQL, JavaScript,
HTML, etc. But neither have decent C, Scheme, Rust, or Go support.

My Preferences:
* Great cross-language support
* Mouse-free
* Stable shortcuts for every language
* Customizable

What I don't need:
* Already installed on every system
* Easy to install

When choosing an editor or IDE, the most value comes from learning it well. A
master never blames their tools.

A few years ago, I decided to learn one editor really well. My work was in Perl,
PHP, and Java. I was also tinkering with Ruby. I wanted something that could
handle Perl, PHP, and Ruby well.

I decided to try Emacs entirely on the recommendation of my mentor. He could
make everything fly in Emacs. His fingers would dance over the keyboard while
text flashed about the screen. It was a sight to behold, and I wanted that
magic.

After a few years of heavy Emacs usage, I started to get pinky finger numbness
and tingling. I picked up Vimpulse, the Vim editing system inside Emacs. Pinky
numbness went away!

Meanwhile, I moved from Perl and PHP to Python, then from Python to Clojure and
Scheme. While Emacs has fine support for all of these, it doesn't have the same
features of a big box IDE like Intellij or Visual Studio.

This isn't to say it is better or worse, just a different feature set. I still
use Intellij exclusively for Java and Android development and Visual Studio at
work, where I wrangle a large C# codebase.

Emacs has many good plugins for different languages. Many, like the plugins for
Haskell and Clojure, offer full suites of refactoring, auto-complete, automatic
build errors, and navigation. These plugins are fine, but often they come with a
mental price for new shortcuts and workflows. Each new plugin has slightly
different features and shortcuts. Over time, I have become less and less
enamored with these plugins.

Patrick Boe, a respected coworker said it best:

> A mastery of basic Vim and command-line tools rivals the productivity of
> integrated refactoring solutions like ReSharper, and they work in every
> language. - Patrick Boe

I have had the unique experience of pairing with him and with several other
ReSharper gurus over hundreds of hours in the last four years. I can safely say
he is right, he is certainly as effective. He is very productive with just Vim
macros and command line tools. Some tasks he is less efficient than ReSharper,
some he is more. The benefit to him is he is just as productive in JavaScript,
Haskell, and Clojure as he is in C#. He can cross terrain that ReSharper cannot.

The tools we use to produce code are as much an abstraction as the tools we rely
on in code. If you have a good set of abstractions, you can use them to solve
any problem. A well-designed abstraction composes well, and therefore can be
easily combined for new utility.

Consider the sequence abstractions. With the abstractions: map, filter, and fold
(in Linq: select, where, and aggregate), you can transform any sequence of data
into another shape. A mastery of these three abstractions is the power to
transform any data. The power of these abstractions comes from how easily they
can be combined.



I have found that if you have a good set of abstractions for editing code, you
can be very productive across lots of languages and frameworks.


| | Dependencies | Complexity |
|-------------          |-------------- |  ------------- |
|**Pass As Parameter**  | Explicit     | Less Complex |
|**Unnamed Parameter** | Explicit     | Less Complex |
|**Reader Type**        | Explicit     | More Complex |


I regularly work on the train, where it is difficult to use a mouse. I also
cannot always easily move my arms around for reaching the trackpad or arrow
keys. 
