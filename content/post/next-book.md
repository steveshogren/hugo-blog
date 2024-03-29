+++
title = "What Book Should I Read Next?"
date = "2014-07-26"
newdev = "yes"
Categories = ["Technical Skills", "Meta Game", "management"]
+++

Edit: As a supplement to this: check out my <a class="homelink"
href="/page/books">favorite books</a>.

"It's my first job, what book should I read first?"

I've been asked this question many times. Even mid and senior level developers
I've known sometimes struggle with this question.

If you want to be truly great, you have to read technical books and white
papers, and you have to learn new programming languages. You could figure the
content out yourself from first principles, but you will be about 50 years
behind those who just read the books. Additionally, if you stick to a certain
language, you are limiting yourself to thinking about problems in only one way.

Just like with adding new features to a project, you should prioritize
your learning.

I'd start by getting into the mindset that you will need roughly a
decade and at least ten thousand high quality hours to become a master
programmer. To be able to get that many high-value hours, you will
need to carefully select your jobs, and constantly be learning new
things that actually make you a better developer.

## Languages ##

        "A language that doesn't affect the way you think about programming,
        is not worth knowing." - Alan Perlis

I agree with <a
href="http://michaelochurch.wordpress.com/2012/07/27/six-languages-to-master/">other developers</a> who assert that a language is <a
href="http://en.wikiquote.org/wiki/Alan_Perlis">not worth learning</a>
unless it teaches you something new and mind-expanding. There are exceptions of course. Maybe you want to switch stacks to get an awesome high-value job. By all means, learn the new stack.

If you want to follow the extremely good <a
href="http://pragprog.com/the-pragmatic-programmer">advice of others</a> and learn one new programming language a year, make each
one count. For example, if you are a Ruby guy, it is safe to say you
will learn nothing of really any mind-expanding value if you try to
learn PHP, Python, JavaScript, or Perl.

Same for the family of Java, C++, C#, or VB.NET. One of those is plenty.

Instead aim for languages that will really expand your thought process. I like
the advice given by <a href="http://norvig.com/21-days.html">Peter Norvig</a>:

         "Learn at least a half dozen programming languages. Include one
         language that supports class abstractions (like Java or C++), one that
         supports functional abstraction (like Lisp or ML), one that supports
         syntactic abstraction (like Lisp), one that supports declarative
         specifications (like Prolog or C++ templates), one that supports
         coroutines (like Icon or Scheme), and one that supports parallelism
         (like Sisal)."

I would add to that my own personal list: a pure language that forces you to use
monads for controlling side-effects (like Haskell), and a language that allows
for dependent types (like Idris or Coq).

If you find yourself saying, "wow, in Python, you have to put a colon at the end
of the function signature line, unlike in Ruby, that blows my mind", or "wow, in
Java, the String keyword is uppercase instead of lowercase!" chances are you are
getting a very low return for your investment of time.

What is important about a new language is _not_ a new syntax. A new
syntax is just cruft that gets in the way of the new concepts. A new
concept might be closures. If you have always worked in Java, a
closure will really expand your mind. Or macros. If you have never
seen macros, the concept alone is completely foreign, not just the
syntax. That is where the value is. A good test if you are learning
something new is if you have to research what the concept even means,
without even needing to see the syntax first. For example, when I
started learning monads, I didn't even need to see the syntax for how
Haskell does them, I didn't even understand the concept _at all_, so I
could read pretty much anything about the concept and get value out of
it. That is the high value content.

## Frameworks ##

I would say very few frameworks are going to expand your mind in a way
that is worth the effort to learn them. Some very select frameworks
can cause you to think of a problem in a novel way and thus expand
your mind (off the top of my head: React.js, Cycle.js, Core.Async, Akka,
Datomic) but those are very few and far between.

Obviously, in production use, frameworks have their place, and they
can provide an immense boost to your day-to-day productivity and
safety, but very few overall will expand your mind in such a way that
would make you better at the craft. It is not hard to reason why. A
framework can only do what is possible in the language. If the
language is only so powerful, the framework cannot be more powerful
than that. You will be using tools that you could've written yourself
with your current skill level, but you won't even get the benefit of
writing it yourself. Hopefully, those tools will be safer and save you
a lot of time, but saved time cranking out widgets at work will not
directly cause you to better understand programming.

## Paradigms ##

It is fashionable these days to get into functional programming. If
you haven't learned a language that supports a functional paradigm, I
highly recommend that as a good place to start. That being the case,
don't forget to add a logic, a literate, and a declarative programming
language to your list too (you have ten years remember, you'll need a
list). Why not pile on a stack based language too?

## Libraries ##

While it is important to be aware of the libraries in your space, I
would say these often provide the least mind-expanding
opportunities. A library, much like a framework, is usually
constrained by the power of the language. In most languages, libraries
are just convenience abstractions at or below the same abstraction
layer as the rest of your code. I would never consider doing my
day-to-day work without the full power of available libraries, but
they are not going to help me think any better about the work.

## "Meta" books ##

A vast number of books exist that attempt to impart something of a
"mindset" for the developer. Usually, the author is retelling his
experiences, which can be entertaining, but of limited reuse. The best
meta books are those that use actual research and data to try to
explain our industry. Books like Peopleware, Code Complete, and
Pragmatic Programmer are great in this regard. These best books can
cause you to see the creation of software artifacts with a totally
different light: e.g. I remember first reading about using a
programming language to generate automatically the source files for a
given project. At the time for me, it was revolutionary.

## Pattern Books ##

I lately have come to think "pattern books" like Domain Driven Design, Design
Patterns, Patterns of Enterprise Application Architecture, Refactoring, etc are
just a way to try to replicate missing features in a language of a lower power.
These seem to be written for entirely Java and C#, and are mostly complex
solutions to complex problems created by the lack of power of the language.
Apparently, I am not alone: <a
href="http://www.c2.com/cgi/wiki?AreDesignPatternsMissingLanguageFeatures">Are
Design Patterns Missing Language Features?</a>

That being said, I think some parts of these books are helpful,
specifically, the ubiquitous language ideas from Domain Driven
Design. If your team has decided on always using the terms from a
certain book, and you are the only person who does not know them, I do
recommend at least skimming it just to ensure smooth communication.

## Suggestions ##

*Edit*: I've consolidated my list into a separate page of my
[favorite books](/page/books/). If you are looking to expand your mind, I'd
check out the bold ones first.

## Wrap up ##

It takes courage to step outside your comfort zone and learn something
new. You might be the only person learning something new on your
team. That is ok! Don't worry about "converting" everyone else to the
path of learning, and **do not make fun of them or the only language
they know**. (Developers who only know one language take any comment
good or bad about "their" language as a comment about themselves.) If
you do make fun of them, you will start to resent them. It'll make you
look like an outsider, and they will ignore you and finally push you
out of the team.

When you learn a new thing, be very careful to not run around trying
to use it everywhere. I am very careful to not use any new tool in
production until I've "moved on" to learning another tool, so I could
critically consider the best tool for the job without the "honeymoon"
effect clouding my judgment.

My experience has been: keep getting better, and you will find yourself in
better and better places to work. A person who puts in the effort to really
master the craft is easy to spot and impossible to fake. Most people want to
work with those who think like them, and you cannot think like a master engineer
only knowing one tool, so get started now, and have fun!
