+++
title = "Promiscuous Pairing"
date = "2016-07-22"
banner="/images/pair.jpeg"
Categories = ["technical skills", "unit-testing"]
Description = ""
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

In the last five years, the developers choose to implement Arlo Belshee's ["Promiscuous Pairing"](http://csis.pace.edu/~grossman/dcs/XR4-PromiscuousPairing.pdf). We
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
* The team ends up adopting a consistent set of styles, tools, shortcuts, workflow
* Developers can take vacation whenever they please
* Training is built in to the process from day one
* Developers quitting doesn't throw the team into disarray
* Productivity is fairly stable across years
* Protected time every day for research, refactoring, and tech debt
* Frequent rotation gives a natural cadence for fixing broken CI builds
* Many of us spend a lot less time puttering around on Reddit, HN, etc
* Interruptions are much less disruptive, typically only one or two minutes to
  get back into "flow"

## Cons 

* Huge system "owned by everyone" is a lot for new developers to handle - training takes a long time
* Juggling tasks can be complex (e.g. what gets put on hold when not at full capacity)
* Support issues get passed around from pair to pair
* Some developers feel pairing is demeaning, disrespectful, or beneath them
* General feeling you are "not important" to the team

## Partly Good, Partly Bad

* Pairing is polarizing
  * **-** Hiring is slow: many developers hate pairing
  * **-** Poor new hire retention
      * Some love the _idea_ of pairing, not the _practice_ of pairing; they discover that and leave
  * **+** Low employee churn: those that love pairing stick around far longer than industry average
* No task ownership
  * **-** Less emotional reward when completing a task
  * **+** Less in-fighting about typical 'code-ownership' bike-shed issues
  * **+** No one cares if a task is rejected by QA
* Rapid pair-switching can cause design churn on a task
  * **-** Tasks can take longer to complete
  * **+** Tough tasks get prototyped several times and seen by whole team

We've found this set of trade-offs works very well with our team. The team is
ten developers all doing active development on a 3.4 million line enterprise
application. Our team has a wide set of skills and skill ranges.

## How To Get Started

This system works best with a given a set of preconditions. 

* The whole team has to love pairing and want to adopt it

    If even a minority of developers hates pairing, it will be tortuous to force
    them to do it. In our experience, >80% of developer hate pairing. It would
    be better to split the team and codebase. Forcing even a single developer to
    pair can be disastrous for morale and productivity. No one wants to pair
    with someone who is sullen and bitter. When pairing, misery cannot be
    hidden.

* Management has to accept not having assigned tasks

    Assigning tasks reduces the beneficial effects of pair switching. Typically
    the assigned developer ends up "doing all the work with an observer". This
    is much less effective. The "observer" ends up tuning out, since the
    assignee "probably has it figured out".

* Proficiency at pairing is a discrete skill

    Many seasoned developers find themselves awkward and uncomfortable when
    pairing for the first few months. Pairing cannot be assessed in any
    meaningful way by just "trying it for a week" anymore than typing can be
    assessed over hand-writing in just a week. Feelings of discomfort and
    awkwardness in the first few months are completely normal and should not be
    the criteria used to decide to continue the practice.

* Let any pair make any decision

    Any pair should be authorized to make any decision to implement their
    current task. They must however be ready to have that decision undone or
    changed if the next pair finds it was too large, a poor design, out of
    scope, etc.
   
* Accept that others are better than you

    When trying out pairing, productivity doesn't have to drop! Many developers
    at first are uncomfortable by the rapid speed. The law of averages says half
    the developers on the team will find their pair going much faster than they
    are used to! These feelings of inadequacy often lead to developers wanting
    to discontinue the practice. Over time, everyone realizes that it is okay to
    not be the fastest, and instead take self-worth in what skills they do
    bring. Maybe they are not the fastest, but they are good at catching little
    details, etc.

As a development system, this absolutely cannot be handed down from management.
It has to be implemented "by the people and for the people".

## Conclusion

We have seen promiscuous pairing completely change our organization. As a team,
we accomplish far more than we would otherwise. We are able to tackle new
systems, languages, and tools with ease. When someone learns a new valuable
technique, it spreads organically through the team. 

Feel free to tweet at me if you have any questions or clarifications!
