+++
title = "Self-Correcting Teams"
date = "2017-02-20"
Categories = ["management", "meta game"]
draft = true
+++

My team has a decade of experience applying
[self-organizing teams](/self-organizing-teams/) and
[pair programming](/pairprogramming/) to reduce wasted productivity in an
enterprise banking application.

We currently apply several democratically-elected practices to help remove
obstacles:

+ Full-time pair programming on all production code
+ No work is assigned to an individual or pair
+ Any pair can make any technical decision
+ Pairs switch randomly twice a day
+ Five minute status update ("stand-up") twice a day
+ Weekly "retrospective" to reflect and make changes
+ Weekly half-day research time to sharpen your skills

### No Technical Lead

These foundational practices eliminate the need for a technical lead who assigns
and follows up on work. No work is assigned to any individual. If a pair has
nothing to do, there is a priority queue of features and technical debt close at
hand. 

If a pair makes a technical decision that isn't ideal, the next pair will have
the opportunity to choose to continue down that path or adjust the code to a
better solution. To prevent significant rework, we meet once a week for under an
hour to chat about the upcoming week's features and get a rough idea of the
direction we want to go.

### No Pull Requests

Pairing and pair rotation eliminates the need for an asynchronous code review
and a pull request process. Any pair can make any decision, so code review
happens 100% of the time. A single feature is usually seen by three to five
developers as they rotate through the pairs.

### How does this work?

As amazing as it all sounds, what prevents this process from falling into
anarchy? How has this been working for us for over ten years with very little
oversight? The team has completely changed three times (roughly a 3.6 year
average turnaround) so it can't only be about "the right people".

### Self-Correction While Maintaining Trust

The author of
[Reinventing Organizations](http://www.reinventingorganizations.com/) talks
about the "self-correction" that allows self-organizing teams to adapt without
putting a thick rule-book of policies into place and revoking trust. Instead of
adding new policies when trust is abused, these "teal" organizations build a
simple system that self-corrects.

The author suggests that three things are needed for self-correcting teams:

1. A shared understanding of what’s healthy
2. Information
3. A forum for conversation to trigger self-corrective action

Our process has several examples of self-correction, and several places we are
still sorting out how to best self-correct.

### Good Example: Any pair can make any technical decision

Consider the practice, "any pair can make any technical decision." The
**information** comes when the pairs switch every half-day. Jim and Sally might
think architecting the module one way is a good idea in the morning, but Sally
and Jane might not see it the same way in the afternoon. The information is
spread organically every four hours as a fresh set of eyes gets to see the work.
The **forum for self-corrective action** happens when the new person sits to see
the work and they discuss the previous session's decisions. 

In practice, rework happens only occasionally as everyone strives to produce the
best designs they can. Since no one wants to see their morning's work undone
because of a missed requirement, it prompts a healthy care and respect for the
work.

Any pair can make any technical decision, but if they make one that doesn't
align well with the needs of the business, the next pair might not choose to
continue with that path. The practices of pairing and pair switching allow the
trust that "any pair can make any technical decision".

### Good Example: Work Isn't Assigned

Another example is work isn't assigned to pairs or individuals. The **shared
understanding** is that the most valuable thing for the business is for the pair
to work on the priority queue of enhancements or technical debt. We promote
**information** with a twice daily status update of what each pair accomplished.
We have a retrospective **forum** once a week to discuss what is healthy and
prompt self-corrective action. Pairs are often quite productive. 

### Case Study: Research Time

Our team offers a weekly afternoon designed for research. The shared
understanding is that it is intended for team members to learn more about their
craft. Projects, prototypes, reading technical books, watching conference
lectures, and code katas are fair game. When a few new people joined the team
several people felt like there was more foosball, leaving early, and general
messing around. 

We had the first and third components: a shared understanding of what's healthy
and a "retrospective" for discussion, but not the information to prompt a
discussion. One way to achieve this might be to have a meeting where everyone
gives a two minute summary of what they learned or post a write up to a shared
chatroom. 
