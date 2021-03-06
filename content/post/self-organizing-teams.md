+++
title = "When Self-Organizing Teams Are Effective"
date = "2016-03-16"
Categories = ["management", "meta game", "self-organization"]
manager="yes"
+++

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
+ Systems and practices are designed to maintain the greatest productivity across
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

I currently lead a self-organizing team of ten developers. We alone actively
develop in a 4.6 million line codebase. The codebase is over 10 years old, and
the entire team has turned over twice since the project started. This is no
maintenance project, this quarter we converted the main calculation engine
(~600KLOC) to allow calculations to be parallelized across dozens of nodes for a
substantial increase in throughput.

Our team has recently been recognized as producing the most business value with
the highest quality across our +700 person software company. Our CEO and SVP of
Product have highlighted our recent accolades. I am certain this was only
possible because of the intrinsic motivation of our staff caused by
self-organization.

> We actively develop in a 10 year old codebase sized at ~460KLOC per developer

When deciding on working agreements, the original team voted on strict
pair-programming, frequent pair switches
([promiscuous pairing](http://csis.pace.edu/~grossman/dcs/XR4-PromiscuousPairing.pdf)),
and test-driven development. Each subsequent iteration of the team has continued
to vote for these agreements. We believe that it is one of the easiest ways to
keep a team capable in such an enormous codebase. Randomized pairing and 2-8
hour switching prevents siloing of knowledge.

In any other company, our least experienced developers would be team leads and
architects; and our most experienced developers would be CTO's. They've gotten
this experience by living it. In case you think we've hired a team of seasoned
graybeards, our average developer only has six years of experience.

Each member of our team is responsible for "being the lead" in certain ways. The
individual's own interests guide them to develop expertise in subjects. By being
an expert, others listen to them, so they often have an attentive audience when
speaking on their specialties. This positive feedback loop encourages additional
research.

## How to Start

> **Tip:** The most important way to build such a team is to allow them to fail

The team must be allowed to face the consequences of their actions in a safe
space. If a refactoring project goes badly, the team should have the individual
clean up their mess. When someone is spending time on a project that doesn't
align with the goals of the business, the team should speak with them. When a
developer successfully campaigns for a change that increases productivity, it
should be celebrated. In all cases, strive to have your office be a safe place
to fail.

Every time someone in authority demands the team do something different, it
reduces the intrinsic motivation of the team. Each demand teaches the team
members that they don't have to be responsible, someone else will take care of
the "important" things for them. Treat such demands with the utmost care, only
making demands extremely infrequently.

> **Tip:** Fewer demands allows for greater intrinsic motivation

A self-organizing team is very much like a democracy. The team is expected and
entrusted to organize around the needs of the business. Decisions should be made
by consensus. Very rarely should an "override" be needed from management.

# Conclusion

Self-organizing teams are one of the most effective ways to manage a
high-performing group. The team benefits from the best aspects of each member.
Team members "grow up" quickly, as they are exposed to others around them who
behave like trusted professionals. Each developer becomes intrinsically
motivated, outperforming their peers in similar command and control teams.

# Replies

[PeterGao](https://lobste.rs/u/petergao) on lobste.rs
[pointed out](https://lobste.rs/s/1fhkxo/when_self-organizing_teams_are_effective/comments/e3niex#c_e3niex)
that undergrad school projects often see everyone grouping by skill, with all
the best in a group together. I too have had bad luck with undergrad CS school
projects, especially since at the time I was a C-performer. School projects mix
a fairly homogeneous group of immature students with a subtly different goal:
“pick a few other people, your work will be compared to everyone else’s”.
Self-selected grouping by skill makes sense, it’s effectively a competition. One
of the recommended alterations for group projects is “your grade is the average
grade of all the group projects”. Suddenly, you won’t see those teams separating
by skill. Instead students will organize with a team mix as even as possible,
with cross-communication (and likely rotation) happening to ensure high quality
across all the projects. Bam, now you’ve got my office ;)
