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

After completing Step 1, you need to invest in some skills to make your learning
faster. You should learn how to do something called Test Driven Development.
Read through the wikipedia page on
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

### Step 3 - Basic Semantics (~80 hours)

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
will want to select a programming language to get that first job. Really any
language in the [Tiobe top ten](http://www.tiobe.com/tiobe-index/) will do.

Many skills of the different software development areas are easily learned, so
what matters most are the intangibles of the job environment. Do you want to be
able to go home every day at 5pm? You might want steer clear of video games or
start-ups. Does the business output matter to you? How important is an extra
10-15% more pay if the work is otherwise boring? You'll want to ask yourself
these questions when thinking about what domain you want to get into.

* Java or C# for business-oriented big-company jobs
* Ruby or NodeJS for Silicon Valley start-up jobs
* C++ or C# Unity for most video game jobs
* Assembly or C for embedded hardware jobs 
* R or Python for data science or numerical analysis jobs (I wouldn't attempt
  these without a math degree or equivalent)

Take some time to research what people say about these different types of job
environments, and remember these are just generalizations. Java is used for many
Android video games, and I've seen people run start-ups on Java, C#, or Python.
Also look around the job boards for languages used in your current location. If
you want to get a job in Chicago, see how many jobs for each language exist. The
more jobs, the better chance you'll get a job!

Whatever you pick, it almost certainly won't be the last language you learn! You
will want to learn a new language at least once a year for the rest of your
career. Most developers are able to switch languages several times in their
careers. This language just has to get you that first job!

If I was picking a good "first job" language in late 2016, I'd pick one of:
Java, C#, NodeJS, PHP, Python, C++, C, or Ruby. I'd likely settle on Java for a
combination of practicality and breadth of jobs. Remember you can always switch
languages and jobs after a few years!

### Step 5 - Small Project (~100 hours)

Choose a small project to build yourself using your newly selected language.
Ideally, it will align with the sorts of jobs that language is most commonly
used for. Maybe a basic web-site for saving a shopping cart, a simple game, or a
graphing calculator. Write out a list of the features you would want to see
before you start.

You will want to list out all the things you will need. Perhaps you need a way
to run a web site, or build an Android game. Maybe you need to store data in a
file or database. Use the internet to around for tutorials for the simplest
way to get those tools up and running. For almost any topic, many excellent
tutorials exist that can guide you to a starting application.

Keep a running list of questions, and spend some time each session searching
for answers. Almost any question you have has been answered on forums, Stack
Overflow, and blogs. If you have Internet, you can teach yourself to build
almost any sort of programming project.

Work on this until you have finished enough that you have answered most of your
own questions and implemented most of your own features. The purpose of this
exercise is two-fold. It provides you with a list of questions to teach you how
to research, and the motivation to research them! Second, it gives you a chance
to see a project bigger than a simple Kata.

### Step 6 - Algorithm and Interview Practice (~30 hours)

Purchase the book
[Cracking the Coding Interview](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850)
and do all the problems in chapters 1-4 in your "first job" language. If you
have time, finish all the problems in the whole book. 

Do another Kata using TDD every couple of problems. You should be able to
complete something like KataTennis in about 30 minutes using TDD. Do each Kata
at least a couple times, until it feels fluid and natural. These will help you
learn that new language quickly.

