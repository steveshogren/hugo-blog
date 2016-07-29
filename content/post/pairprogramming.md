+++
title = "Promiscuous Pairing"
date = "2016-07-22"
banner="/images/weave.jpeg"
Categories = ["technical skills", "unit-testing"]
Description = ""
draft=true
+++

Let me start with a disclaimer: solutions are only valuable if they solve a
problem. Please don't use this post to browbeat your colleagues. Programming
productivity hasn't yet been scientifically measured. Therefore **every**
process, language, or paradigm is recommended on personal preference or "gut
feeling". I will lay out my preferences and "gut feelings", but do not mistake
them for rigorous claims of productivity.

My current team has pair-programmed and followed strict TDD on a single codebase
for over ten years. The practices started from reading the literature on Extreme
Programming, which resonated with both the developers and leadership. As the
team changed, we continued to follow the practices.

In the last five years, the developers choose to implement Arlo Belshee's
"Promiscuous
Pairing"(1)[http://csis.pace.edu/~grossman/dcs/XR4-PromiscuousPairing.pdf]. We
switch pairs in short intervals: 180 minutes is our current preference.

The pairing sessions start at 8:45AM and 1:00PM with the typical five-minute
stand-up. People report on any data that the rest of the team needs to hear,
including noteworthy technical details. Afterwards, the developers crowd around
a board with the current tasks in progress. We randomize the pairs, then each
pair decides what to work on from the current tasks.

If a developer wants to not pair for a session, they go "odd". We have a working
agreement that no production code can be written while odd. The odd person works
on automated testing, answering questions, researching technical debt,
investigating root causes of bugs, and authoring throwaway "spikes" for major
refactorings.

## Pros

* No siloed information or "I don't touch that section" areas
* The team ends up adopting a fairly consistent set of styles, etc
* Developers can take vacation whenever they please
* Training is built-in to the process from day one
* Developers moving on doesn't throw the team into disarray
* Productivity is more stable across years
* Developers who enjoy pairing are passionate about it

## Cons 

* Many developers hate pairing
* Can be a lot for new developers to handle: seeing so many parts from day one
* 

## Tooling

We built a (simple page)[http://deliberate-software.com/pairpicker/] to
randomize the selected developers, allowing us to not struggle with picking
pairs.

1. (Promiscuous Pairing)[http://csis.pace.edu/~grossman/dcs/XR4-PromiscuousPairing.pdf]


# My Bias

To date, I have paired full-time for six years of my eight-year career. I've
used it at three out of four jobs, and seen two major codebases built with
pairing, and two built without. At this point, I very much prefer pairing, 
