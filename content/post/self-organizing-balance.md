+++
title = "Self-Organizing Balance"
date = "2017-02-20"
Categories = ["management", "meta game"]
draft = true
+++

My team has a decade of experience applying
[self-organizing teams](/self-organizing-teams/) and
[pair programming](/pairprogramming/) to reduce wasted productivity in an
enterprise banking application.

We have several democratically-elected practices to help remove obstacles:

+ Full-time pair programming on all production code
+ Any pair can make any technical decision
+ Pairs switch randomly twice a day
+ Strong unit-testing culture
+ Bugs and broken CI builds are the top priority

### No Technical Lead

These foundational practices eliminate the need for a technical lead who assigns
and follows up on work. No work is assigned to any individual. If a pair has
nothing to do, there is a priority queue of features and technical debt close at
hand. 

If a pair makes a technical decision that isn't ideal, the next pair rotation
will have to decide to continue down that path or adjust the code to a better
solution. To prevent significant rework, we meet once a week for under an hour
to chat about the upcoming week's features and get a rough idea of the direction
we want to go.

### No Pull Requests

Pairing and pair rotation eliminates the need for an asynchronous code review
and a pull request process. Any pair can make any decision, so code review
happens 100% of the time. A single feature is usually seen by three to five
developers as they rotate through the pairs.

### How does this work?

As amazing as it all sounds, I have recently started to wonder what prevents
this process from falling into anarchy. How has this been working for over ten
years with very little oversight? The teams have completely changed three times
(roughly a 3.6 year average turnaround). 

I recently finished the book (Reinventing Organizations)[]


I've seen that concept a lot lately as I've read more about healthy
self-organizing teams. Trust should always be given, but a good way to produce
accountability is through openness and "sharing" like that. Recently I've come
to realize that really the practice of stand-ups has a great knock on benefit of
that: pairs aren't assigned work and not really "checked up on", but the sharing
and openness of the stand-up helps give accountability to the group.
