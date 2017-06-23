+++
title = "A Career in Programming Without Going To School"
layout = "training"
+++

<h2 class="centereded">A path to full-time software development</h2>

<div class="container">
<div class="col-md-9">


<blockquote>
<p>"I Just Finished CodeAcademy/Khan Academy/etc, Now What?!"</p>
</blockquote>

<p> Breaking into a new career can be intimidating! Many people get stuck after
finishing an online course like CodeAcademy. We want to provide free guidance
necessary to get that dream job. </p>

<h2>Success Stories</h2>

<p>
We have used this program with several people to help them break into full-time
software developer jobs: 
</p>

<div class="col-md-4">
    <h3>Rachel B.</h3>
    <p>Rachel was working as a baker when we started together. After nine
months working this course she had her first full-time development job.</p>
</div>
<div class="col-md-4">
    <h3>Ariel S.</h3>
    <p>Ariel graduated with a degree in music and no technical experience.
Within eight months she was working as an automated tester, and now manages a
team of automated testers.</p>
</div>
<div class="col-md-4">
    <h3>Ben S.</h3>
    <p>Ben had a B.A. degree and one basic programming class in high-school.
He followed this program and had a full-time development job in six months. He
    now has four years of experience in both front-end and back-end development.</p>
</div>

<h2>The Free Course</h2>

> There are no shortcuts to learn how to program: just hard work!

The course is broken into sections. Each section builds on the skills in the
previous sections, so _don't skip around_. This is designed to teach the basic
skills needed to get an entry-level development job.

### Step 0 - The Right Mindset

A lot of this program is designed to teach you **how to learn**. If all you did
was learn some basic syntax and library calls, you'd be poorly situated to
succeed in your new career. Many excellent programmers recommend you learn a new
programming language and read at least one [high value book](/page/books) each
year. Technology moves at a fast pace, and programming is no exception. To be
able to keep up, you need to know _how to teach yourself, and how to do it
quickly_.

While daunting, you should get an idea for the whole course up front and decide
if you have the time to pursue it. I can't promise how long it will take, but
the average for the first three students was roughly 500 hours of "hands on
keyboard" work. In the grand scheme of things, 500 hours for a new career isn't
that much, but not everyone is willing or able to put in the time. 

Read through this whole page and get a sense of the structure of the course.
Each step will make more sense if you understand where it fits.

### Step 1 - Basic Syntax And Git

If you are already not familiar with any programming languages, then complete
both of these:

* [CodeAcademy Javascript module](https://www.codecademy.com/learn/javascript)
* [Learn Python the Hard Way](https://learnpythonthehardway.org/)

You will also need to sign up for [GitHub](http://www.github.com) and work
through their tutorial to set up git on your computer. Make a repository for the
code from "Learn Python the Hard Way". Commit and push your work every time you
get something working or complete an exercise.

> Commit early, commit often

Make sure you push your changes as often as possible (at least semi-hourly). If
your computer ever dies, you will have lost no more than an hour or two of work,
because everything is backed up. This will have the side-effect of giving you an
online portfolio of all the work you do.

> Immediately commit and push any code you want to keep safe

Make a new github repository for every new language, book, or project you start.
By the end of this course, you will have at several repositories of projects and
book homework. This will be very effective in showing your progress to potential
employers.

### Step 2 - Powerful Tools 

Knowing the best tools for the job will accelerate your learning. Before we get
too far, you need to invest in some skills to make your learning faster. One of
the fastest tools we know is called
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

For the rest of the course, we recommend you do **thirty minutes of kata practice
every day**. Redo the same kata multiple times, until you can do it effortlessly
in both Python and Javascript. Each time commit the work to GitHub, as it will
continue to add to your online portfolio.

### Step 3 - Concrete Foundations

Armed with the power of TDD and regular kata practice, you need to invest in
some foundations. These concepts can be a little slow to learn, but they are
incredibly valuable. We recommend reading and completing the exercises of the
first three chapters of the textbook
[Structure and Interpretation of Computer Programs (SICP)](https://mitpress.mit.edu/sicp/full-text/book/book.html).

SICP will help you build a mastery of basic algorithms and data structures,
which are essential for interviewing practice. Complete the exercises in MIT
Scheme, which can be run from either the command-line or
[DrRacket](https://racket-lang.org/download/).

DrRacket is a general editor and code-runner for Racket and Scheme. There are
many different versions of Racket and Scheme, so to run DrRacket in "MIT Scheme
and SICP mode", you need to put a header at the top of your files to tell DrRacket which
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

Almost every new programmer feels significant pressure to pick the "right
language". When you have finished the homework in the first three chapters of
SICP, you will want to select a programming language to get that first job. Any
language in the [Tiobe top ten](http://www.tiobe.com/tiobe-index/) will do just
fine.

Many skills of the different software development areas are easily learned, so
what matters most are the intangibles of the job environment. Do you want to be
able to go home every day at 5pm? You might want steer clear of video games or
start-ups. Does the business matter to you? How important is an extra 10-15%
more pay if the work is otherwise boring? Many boring big-business Java jobs
make good pay with short hours. Many game jobs are rewarding in other ways, as
you take pride in seeing a product unfold. You'll want to ask yourself these
questions when thinking about what domain you want to get into.

Here are some wild generalizations of how different languages are used in the
industry:

* Java (and some C#) are typical for business-oriented big-company jobs
* Ruby (and NodeJS) are common in Silicon Valley start-up jobs
* JavaScript is mandatory for web front-end jobs
* C++ (and some C# Unity) are used for most video game jobs
* Assembly and C for embedded hardware jobs (more difficult without an
  electrical engineering degree or equivalent)
* R or Python for data science or numerical analysis jobs (I wouldn't attempt
  these without an advanced math degree or equivalent)

Take some time to research what people say about these different types of job
environments, and remember these are just generalizations. Java is used for many
Android mobile games. People run start-ups in every possible language. Some
mega-companies have huge Perl desktop applications. As a rule, every language
can and has been used for every type of application.

It goes without saying that you will have an easier time finding a job if you
pick a language is commonly used for that domain. For example, you really want
to work in web development, do you want to limit yourself to the one company
that forces VB6 into the browser, or the tens of thousands that just use plain
Javascript?

Look around the job boards for languages used in your current location. If you
want to get a job in Chicago, get a quick count of how many jobs for each
language exist in Chicago. The more jobs in that language, the easier it will be
to get a job!

Whatever you pick, it shouldn't be the last language you learn. You will want to
learn a new language at least once a year for the rest of your career. Most
developers are able to switch languages several times in their careers. This
language just has to get you that first job.

If I was picking a good "first job" language in mid 2017, I'd pick one of: Java,
C#, NodeJS, PHP, Python, or Ruby. With my weak math background, I'd likely
settle on either Java or Ruby for a combination of practicality and breadth of
jobs. If I lived in a place with more Ruby jobs than Java, I'd pick Ruby. I
would also learn the basics of front-end JavaScript so I could get into most web
jobs. Remember you can always switch languages and jobs after a few years!

### Step 5 - Regularly Go to Meetups

The more people you know in the industry, the more potential contacts you will
have for finding a great job. A person with less skills and good contacts
sometimes gets the better job.

Use a site like [Meetup.com](http://www.meetup.com) to find local meetups and user
groups in your chosen language. In most major cities there are typically several
free meetups every single day around programming, languages, and technology.
Most even have free food and door prizes! Find the local meetups for your
language, and attend every single session. Go to a minimum of one meetup per
week.

> **Who** you know can be more important than **what** you know

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

### Step 6 - Small Project (aka the "Vision Quest", aka "building your lightsaber")

Choose a small project to build yourself using your newly selected language. The
project should align with your targeted industry. Maybe a basic web-site for
saving a shopping cart, a simple game, or a graphing calculator. Write out a
list of the features you would want to see before you start.

This project should be important to you. Perhaps it solves a problem you've
always had. Some examples we've seen are: a baking inventory management website
with up-to-date prices pulled of an on-line store API, a movie review and
recommendation website, a basic recreation of a top-down Zelda NES game with
Avatar characters, and a website for tracking student loan repayment progress
and expected payoff time-line.

You will want to list out all the things you will need. Perhaps you need a way
to run a web site, or build an Android game. Maybe you need to store data in a
file or database. Search the internet for tutorials to get those tools up and
running. For almost any topic, many excellent tutorials exist that can guide you
to a starting application.

This is the point where you spread your wings and start to _apply_. Bad pun.
You've learned a lot about _how to learn_ programming concepts, and these bigger
concepts are not really that different. You need to start applying the skill of
learning to solve bigger problems.

Keep a list of questions, and spend some time each session searching for
answers. Almost any question you have has been answered on forums, Stack
Overflow, and blogs. If you have access to the Internet and motivation, you can
teach yourself to build almost any sort of programming project.

Work on this until you have finished enough that you have answered most of your
own questions and implemented most of your own features. A small project
provides you with a list of questions, and the motivation to learn how to
research them. A small project also teaches you important details and
technologies you would otherwise miss in katas.

A small project like this probably won't feel like _work_ it will feel like
_fun_. This is the point of no return, you're now a programmer for life, paid or
not. Now we just need to get you paid!

### Step 7 - Algorithm and Interview Practice

At this point we introduce the first non-free material. If you want to use only
free materials, you can instead work through the questions on
[ProgrammerInterview.com](http://www.programmerinterview.com/). Do "Design
Patterns", "Data Structures", and if it is there, the section on your language
of choice. Search the internet for interview questions and study them.

If you can afford it, purchase the book
[Cracking the Coding Interview](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850)
and do all the problems in chapters 1-9 in your "first job" language. If you
have time, finish all the problems in the whole book. You will find most of the
problems are significantly easier if you use TDD. TDD can be very effective for
algorithmic work like the problems presented in this book. While it may seem
slower to write tests, you only have to write them once!

Every couple of problems, take a break and complete another kata using TDD. You
should be able to complete something like KataTennis in about 30 minutes from
scratch using TDD. Do each kata at least a couple times, until it feels fluid
and natural. These will help you learn that new language quickly.

### Step 8 - Start Interviewing

At this point, you'll be able to pass an entry-level developer interview with a
very decent success rate! You'll be well versed in the basics of object-oriented
programming, functional programming, data structures, algorithms, and unit
testing. You'll have a good grasp of the basics of several different programming
languages, and have a portfolio of code and projects to discuss.

<h2 class="centereded">Myths</h2>

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

</div>
  <div class="col-md-3 sidebarcolor">
<h2 class="centered">Train With Us</h2>

<p>
We offer one-one-one pair-programming and mentorship. Work through katas, get
feedback through code-review, and practice interview questions together.
</p>
<p>
Our team of three instructors has over thirty years of expertise building
software solutions. We each have over seven years of experience in training and
pair-programming.
</p>
<p>
We can pair and offer instruction in the following languages:
<ul>
<li>Ruby</li>
<li>C#</li>
<li>Javascript</li>
<li>Typescript</li>
<li>Java</li>
<li>Android Java</li>
<li>F#</li> 
<li>Haskell</li>
<li>Common Lisp</li>
<li>Racket</li>
<li>Scheme</li>
<li>Clojure</li>
<li>Python</li>
<li>Perl</li>
<li>PHP</li>
</ul>
</p>
<p>

Our training is $20/hour. Contact us through Steve's [Twitter](http://twitter.com/steveshogren) </p> </div> </div>
