+++
title = "When Self-Organizing Teams Are Effective"
date = "2016-03-16"
draft=true
Categories = ["management", "meta game"]
+++

> "Great, now instead of programmers, we are politicians"

A self-organizing team can be one of the most effective ways to build a team of
high-quality professionals.

## What Is A Self-Organizing Team?

I have managed several self-organizing teams over the last few years. They are
expected to follow these tenets:

+ The whole team organizes themselves to best meet the business needs
+ Each team chooses their practices and working agreements
+ All technical and organizational decisions are driven through consensus
+ Product owners determine "what" happens, the team determines "how"
+ All staff participates in a culture of high-quality development
+ Systems and practices are designed to maintain greatest productivity across
  the next decade

## When It Works Well

+ Small teams
+ Highly skilled workers
+ Need for high-quality software
+ Business need for continuous and stable productivity for 5+ years
+ Buy-in from management that "productivity is worth feeling out of control"

Self-organizing teams work best when most people on your team are eager to do
more, be more, and learn more. A team of such developers will find a single
leader to be a bottleneck. Running every idea past a single decision maker will
impair their abilities to grow and gain critical thinking skills.

## Case Study

I currently lead a self-organizing team of ten developers. We share in the work
of adding features to 4.6 million-line codebase. The codebase is over 10 years
old, and the entire team has turned over twice since the project started. This
is no maintenance project, this quarter we converted the main calculation engine
(~600KLOC) to allow calculations to be split up across dozens of nodes for a
substantial increase in throughput. I am certain this was only possible because
of the effectiveness of self-organization.

> We actively develop in a 10 year old codebase sized at ~460KLOC per developer

When deciding on working agreements, the team voted on strict pair-programming,
frequent pair switches
([promiscuous pairing](http://csis.pace.edu/~grossman/dcs/XR4-PromiscuousPairing.pdf)),
and test-driven development. Each subsequent iteration of the team has continued
to vote for these agreements. We believe that it is one of the easiest ways to
keep a team capable in such an enormous codebase. Pairing and switching prevents
siloing of knowledge: our rapid pair switching causes everyone to rotate
randomly every 2-8 hours.

In any other company, our least experienced developers would be team leads and
architects; and our most experienced developers would be CTO's. They've gotten
this experience by living it. Each member of our team is responsible for "being
the lead" in certain ways. Their own interests guide each developer to develop
expertise in several subjects. By being an expert, others listen to them, so
they often have an attentive audience when speaking on their specialties.

## How to Start

> **Tip:** The most important way to build such a team is to allow them to fail

To start, the team must be allowed to face the consequences of their actions. If
a code refactoring project goes badly, the team should have the individual clean
up their mess. When someone is wasting time on a project that doesn't align with
the goals of the business, the team should speak with them. When a developer
successfully campaigns for a change that increases productivity, they should be
celebrated.

Every time someone in authority demands the team do something different, it
reduces the intrinsic motivation of the team. Each demand teaches the team
members that they don't have to be responsible, someone else will take care of
the "important" things for them. Treat such demands with the utmost care, only
making demands extremely infrequently.

> **Tip:** Fewer demands allows for greater intrinsic motivation

A self-organizing team is very much like a democracy. The team is expected and
entrusted to organize around the needs of the business. Decisions should be made
by consensus. The team can only learn what works and what doesn't by facing
consequences and successes.

# Conclusion

Self-organizing teams are one of the most effective ways to manage a
high-performing group.
