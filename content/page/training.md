+++
title = "Training"
+++

<h1 class="centereded">Myths</h1>

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

The first language you learn should not be your last! Ideally, you will learn
the basics of two or three languages before getting your first job. Learning
several different languages is very effective for training developers. Having a
few under your belt gives you a breadth of understanding that helps you learn
new concepts faster.

<h1 class="centereded">The Course</h1>

### Step 1 - Basic Syntax And Git

Several fantastic resources exist for learning the basics of programming
language syntax. I recommend at least one of the following, preferably both:

* [CodeAcademy Javascript module](https://www.codecademy.com/learn/javascript)
* [Learn Python the Hard Way](https://learnpythonthehardway.org/)

You will also need to sign up for [GitHub](www.github.com) and work through
their tutorial for setting up git on your workstation. Make a repository for the
code from "Learn Python the Hard Way". Every time you get something working, or
complete an exercise, commit your work. 

> Commit early, commit often

Make sure you push your changes as often as possible (at least hourly). If your
computer ever dies, everything you pushed is backed up. This will have the
side-effect of giving you an online portfolio of all the work you do. 

Make a new github repository for every new language, book, or project you start.
By the end of this course, you will have at several repositories of projects and
book homework. This will be very effective in showing your progress to potential
employers.

### Step 2 - Basic Tools 

You need to invest in some skills to make your learning faster. You should learn
how to do something called Test Driven Development. Read through the wikipedia
page on
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

Use TDD with either Python or Javascript to finish three small katas from the
[Kata Catalog](http://codingdojo.org/cgi-bin/index.pl?KataCatalogue). We
recommend KataTennis, KataRomanNumerals, and KataBowling. 

For the rest of the course, we recommend you do thirty minutes of kata practice
every time you sit down. Redo the same kata multiple times, until you can do it
effortlessly in both Python and Javascript.

### Step 3 - Basic Semantics

Armed with the power of TDD and regular kata practice, you need to invest in
some foundations. These concepts can be a little slow to learn, but they are
incredibly valuable. To best learn these foundations, we recommend reading and
completing the exercises of the first three chapters of the textbook
[Structure and Interpretation of Computer Programs](https://mitpress.mit.edu/sicp/full-text/book/book.html),
also known as "SICP".

SICP will help you build a mastery of basic algorithms and data structures,
which are essential for interviewing practice. Complete the exercises in MIT
Scheme, which can be run from either the command-line or
[DrRacket](https://racket-lang.org/download/).

DrRacket is a general editor and code-runner for Racket and Scheme. There are
many different versions of Racket and Scheme, so to run DrRacket in "MIT Scheme
mode", you need to put a header at the top of your files to tell DrRacket which
language to use: ```#lang planet neil/sicp```

When you first run a file, DrRacket will download a working version of MIT
Scheme that can be used to complete the exercises. ```Ctrl-R``` will execute a
file and output the results.

You can see an example of a basic test framework for Scheme in the file
[scheme-tdd.rkt](/code/scheme-tdd.rkt). Right click and "Save Link As" to save
the file. Open it in DrRacket, and type ```Ctrl-R``` to run the tests.

Some of the exercises are very challenging! You will probably not be able to
complete every single exercise without help. This is okay! Plenty of people have
posted excellent answers online for how to solve all the homework. If you get
stuck and frustrated, just look up a solution and take some time to understand
it.

### Step 4 - Pick A Language

When you have finished the homework in the first three chapters of SICP, you
will want to select a programming language to get that first job. Any language
in the [Tiobe top ten](http://www.tiobe.com/tiobe-index/) will do.

Many skills of the different software development areas are easily learned, so
what matters most are the intangibles of the job environment. Do you want to be
able to go home every day at 5pm? You might want steer clear of video games or
start-ups. Does the business matter to you? How important is an extra 10-15%
more pay if the work is otherwise boring? Many boring big-business Java jobs
make good pay with short hours. You'll want to ask yourself these questions when
thinking about what domain you want to get into.

Here are some wild generalizations of how different languages are used in the
industry:

* Java or C# are typical for business-oriented big-company jobs
* Ruby or NodeJS are common in Silicon Valley start-up jobs
* Javascript is mandatory for web front-end jobs
* C++ or C# Unity for most video game jobs
* Assembly or C for embedded hardware jobs 
* R or Python for data science or numerical analysis jobs (I wouldn't attempt
  these without a math degree or equivalent)

Take some time to research what people say about these different types of job
environments, and remember these are just generalizations. Java is used for many
Android mobile games. People run start-ups in every possible language. Some
mega-companies have huge Perl desktop applications. As a rule, every language
can and has been used for every type of application. But if, for example, you
really want to work in web development, do you want to limit yourself to the one
company that forces VB6 into the browser, or the tens of thousands that just use
plain Javascript?

Look around the job boards for languages used in your current location. If you
want to get a job in Chicago, get a quick count of how many jobs for each
language exist in Chicago. The more jobs in that language, the easier it will be
to get a job!

Whatever you pick, it shouldn't be the last language you learn. You will want to
learn a new language at least once a year for the rest of your career. Most
developers are able to switch languages several times in their careers. This
language just has to get you that first job.

If I was picking a good "first job" language in late 2016, I'd pick one of:
Java, C#, NodeJS, PHP, Python, C++, C, or Ruby. I'd likely settle on Java and/or
front-end Javascript for a combination of practicality and breadth of jobs.
Remember you can always switch languages and jobs after a few years!

### Step 5 - Regularly Go to Meetups

When you pick a language, use a site like [Meetup.com](www.meetup.com) to find
local meetups and user groups about that language. In most major cities there
are typically several free meetups every single day around programming,
languages, and technology. Most even have free food and door prizes! Find the
local meetups for your language, and attend every single session.

If you are in a more remote location, the meetups might be less specific.
Instead of a meetup just for PHP, you might have to settle for one just about
web-programming. This is fine!

Try to meet _at least_ two people a night. Ask them what technologies they use,
how they got started programming. Ask them what sort of job they have and their
role. Do they have any side projects they are interested in? Most developers
will light up at the chance to talk about their programming hobbies, and will
talk your ear off all night! This is great, you've made a friend! 

Let everyone you meet know that you are trying to break into the field. Ask for
recommendations and suggestions. If they know what SICP is, they will be majorly
impressed with your progress.

### Step 6 - Small Project

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

### Step 7 - Algorithm and Interview Practice

At this point we introduce the first non-free material.

Purchase the book
[Cracking the Coding Interview](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850)
and do all the problems in chapters 1-9 in your "first job" language. If you
have time, finish all the problems in the whole book. You will find most of the
problems are significantly easier if you use TDD. TDD can be very effective for
algorithmic work like the problems presented in this book. While it may seem
slower to write tests, you only have to write them once!

If you want to use only free materials, you can instead work through the
material on [ProgrammerInterview.com](http://www.programmerinterview.com/). Do
"Design Patterns", "Data Structures", and if it is there, the section on your
language of choice.

Every couple of problems, take a break and complete another kata using TDD. You
should be able to complete something like KataTennis in about 30 minutes from
scratch using TDD. Do each kata at least a couple times, until it feels fluid
and natural. These will help you learn that new language quickly.

### Step 8 - Start Interviewing

At this point, you'll be able to pass an entry-level developer interview with a
very decent success rate. You'll be well versed in the basics of object-oriented
programming, functional programming, data structures, algorithms, and unit
testing. You'll have a good grasp of the basics of several different programming
languages, and have a portfolio of code and projects to discuss.


<h1 class="centereded">I Need More!</h1>

Some people 
