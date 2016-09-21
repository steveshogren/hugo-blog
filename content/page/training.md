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

### Step 1 - Basic Syntax (~25 hours)

Several fantastic resources exist for getting the basics of programming
language syntax. I recommend at least one of the following, preferably both:

* [CodeAcademy Javascript module](https://www.codecademy.com/learn/javascript)
* [Learn Python the Hard Way](https://learnpythonthehardway.org/)

### Step 2 - Basic Tools (~10 hours)

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

### Step 3 - Basic Semantics (~100 hours)

Armed with the power of TDD and regular kata practice, you need to invest in
some foundations. These concepts can be a little slower to learn, but incredibly
valuable. We recommend reading and completing the exercises of the first three
chapters of the excellent introductory book
[Structure and Interpretation of Computer Programs](https://mitpress.mit.edu/sicp/full-text/book/book.html).

This book will help you build a mastery of basic algorithms and data
structures, which are essential for interviewing practice. Complete the
exercises in MIT Scheme, which can be run from either the command-line or the
sophisticated tool DrRacket.

DrRacket is a general editor and code-runner for Racket and Scheme. There
are many different versions of Racket and Scheme, so to run DrRacket in "MIT
Scheme mode", you need to put this at the top of your files: ```#lang planet neil/sicp```

When you first run a file, DrRacket will download a working version of MIT
Scheme that can be used to complete the exercises. ```Ctrl-R``` will execute
a file.

You likely will not be able to complete every single exercise without help.
This is okay! Plenty of people have posted excellent answers online for how to
solve all the homework. If you get stuck and frustrated, just look up a
solution and take some time to understand it.

### Step 4 - Pick A Language (~10 hours)

When you have finished the homework in the first three chapters of SICP, you
will want to select a programming language to get that first job. If I was
picking a good "first job" language in late 2016, I'd pick one of: Java, C#,
NodeJS, PHP, Python, C++, C, or Ruby. Really any language in the
[Tiobe top ten](http://www.tiobe.com/tiobe-index/) will do. 

Many skills of the different software development areas are easily learned, so
what matters most are the intangibles of what the job environment is like. Do
you want to be able to go home every day at 5pm? Does the business output matter
to you?

* Java or C# for high paying, business-oriented big-company jobs
* Ruby or NodeJS for Silicon Valley start-up jobs
* C++ or C# Unity for most video game jobs
* Assembly or C for embedded hardware jobs 
* R or Python for data science or numerical analysis jobs

Any of those langa

### Step 5 - Small Project (~100 hours)

When you have finished the homework in the first three chapters of SICP, you
will want to select a programming language to get that first job. If I was
picking a good "first job" language in late 2016, I'd pick one of: Java, C#,
NodeJS, PHP, Python, C++, C, or Ruby. Really any language in the
[Tiobe](http://www.tiobe.com/tiobe-index/) top ten will do. I'd probably pick
Java or C# if I wanted a high-paying big company job, and I'd pick Ruby or
NodeJS if I wanted to do the whole Silicon Valley start-up scene.

 choose
a small project to build yourself. Maybe a basic web-site for saving a shopping
cart, a simple game, or a graphing calculator. Write out a list of the features
you would want to see before you start.

You will want to list out all the things you will need. Perhaps you need a way
to run a web site, or build an Android game. Maybe you need to store data in a
file or database. Use the internet to around for tutorials for the simplest
way to get those tools up and running. For almost any topic, many excellent
tutorials exist that can guide you to a starting application.

Keep a running list of questions, and spend some time each session searching
for answers. Almost any question you have has been answered on forums, Stack
Overflow, and blogs. If you have Internet, you can teach yourself to build
almost any sort of programming project.

Work on this until you have finished enough that you have answered most of
your own questions and implemented most of your own features. The purpose of
this exercise is two-fold. First, it provides you with a list of questions to
teach you how to research, and the motivation to research them! Second, it
gives you a chance to see a project bigger than a simple Kata.

### Step 5 - Algorithm and Interview Practice (~100 hours)

Purchase the book
[Cracking the Coding Interview](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850)
and do all the problems in your "first job" language.
