+++
title = "Promiscuous Pairing"
date = "2016-07-22"
banner="/images/weave.jpeg"
Categories = ["technical skills", "unit-testing"]
Description = ""
draft=true
+++

Let me start with a disclaimer: solutions are only valuable if they solve a
problem. Please don't use this post to browbeat your colleagues.

My current team has been pair-programming and following strict TDD on a single
codebase for over ten years. The practices started from reading the literature
on Extreme Programming, which resonated with both the developers and the current
leadership.

In the last five years, the developers (now very much self-organizing)
implemented Arlo Belshee's ("Promiscuous
Pairing")[http://csis.pace.edu/~grossman/dcs/XR4-PromiscuousPairing.pdf]. 

We have tried different frequencies to experiment with our preference. We tried
90, 120, and finally 180 minutes. As a group, 180 is our current preference.

# Tooling

We built a (simple page)[http://deliberate-software.com/pairpicker/] to
randomize the selected developers, allowing us to not struggle with picking
pairs.

If a developer wants to not pair for a session, they go "odd", with the
understanding that the "odd person" is the first point of contact for questions
from the rest of the business. We have a working agreement that no production
work can be done while odd. The odd person works on automated testing, answering
questions, researching technical debt, investigating root causes of bugs, and
authoring throwaway "spikes" for major refactorings.
