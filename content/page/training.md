+++
title = "Training"
+++

<h1 class="centereded">Learning To Program</h1>

> "I Just Finished CodeAcademy/Khan Academy/etc, Now What?!"

### Myth: I Need a Degree/Six Months of Bootcamp

Anyone with desire and drive can learn to program in their spare time. You can
get a full-time programming job without any schooling or credentials. All you
you need is hard work, practice, and some basic guidance!

### Myth: I Need Expensive Books/Software

I have trained many people from zero to full-time programmers. We only used free
resources to teach them everything they needed. They used free tools like
Notepad++, Vim, Intellij Community, and Visual Studio Express.

### Myth: I Need a Fancy New Computer

You can learn everything you need with just an old computer and the internet! If
it can reliably run notepad and a web browser, it will do just fine. I have been
a professional developer for almost a decade, and I learned much of what I know
on an old Acer Aspire One netbook. It barely ran three tabs on Chrome, but it
got the job done!

### Myth: I Need to Pick the Right Language Now!

The first language you learn should not be your last! Ideally, you should learn
two or three languages before getting your first job. Something about switching
languages is very effective for training developers. Having a few under your
belt gives you a breadth of understanding that helps you learn new concepts
faster.

## The Course:

### Step 1 - Basic Syntax

  Several fantastic resources exist for getting the basics of programming
  language syntax. I recommend at least one of the following, preferably both:

  * [CodeAcademy Javascript module](https://www.codecademy.com/learn/javascript)
  * [Learn Python the Hard Way](https://learnpythonthehardway.org/)

### Step 2 - Basic Tools

  After completing Step 1, you need to invest in some skills to make your
  learning faster. You should learn how to do something called Test Driven
  Development. First, read through the wikipedia page on
  [Test-driven development](https://en.wikipedia.org/wiki/Test-driven_development).

  Read and work through the following post where they show you how to write
  basic unit tests with Javascript:

  * [Learn Test Driven Development](https://github.com/dwyl/learn-tdd)

  After you have finished that, we've provided a basic way to run tests for
  Python. All the code, tests, and test helpers are in the same file. This works
  for small TDD katas, but you will want to research how to split up those
  sections for larger katas.

  * To run the python tests, right-click and "Save Link As" the following
    files: [python-tdd.py](/code/python-tdd.py) to a file called
    "python-tdd.py" and execute the file with ```python python-tdd.py```. You
    should see the results printed out, with a ```.``` for success and a
    message for a failure.

  We included two correct passing tests, and one failing test to illustrate a
  test failure. You can delete the failing test, because it is nonsensical.

  Use TDD with either Python or Javascript to finish a 3 small katas from the
  [Kata Catalog](http://codingdojo.org/cgi-bin/index.pl?KataCatalogue). We
  recommend KataTennis, KataRomanNumerals, and KataBowling:

### Step 3 - Basic Semantics

  After completing Step 1, you need to invest in some foundational concepts.
  These are a little slower, but incredibly valuable. We recommend reading and
  completing the exercises of the first three chapters of the excellent
  introductory book
  [Structure and Interpretation of Computer Programs](https://mitpress.mit.edu/sicp/full-text/book/book.html).
  This book will help you build a mastery of basic algorithms and data
  structures, which are essential for interviewing practice. Complete the
  exercises in MIT Scheme, which can be run from either the command-line, or
  the sophisticated tool DrRacket.

  DrRacket is a general editor and code-runner for Racket and Scheme. There
  are many different versions of Racket and Scheme, so to run DrRacket in "MIT
  Scheme mode", you need to put this at the top of your files: ```#lang planet neil/sicp```

  When you first run a file, DrRacket will download a working version of MIT
  Scheme that can be used to complete the exercises. ```Ctrl-R``` will execute
  a file.

