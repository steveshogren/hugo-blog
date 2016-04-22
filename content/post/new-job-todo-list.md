+++
title = "How to Suck Less at Your New Job"
Categories = ["Meta Game"]
Tags = []
newdev = "yes"
date = "2013-01-19"
+++
<p>One thing I strongly recommend to developers when starting at a new job is to keep a list of everything that bothers you.</p>

<p>For every new company you work at, there will always be a set of things that you see as pain points, because you came from a place that did those things differently.</p>

<p>Notice I said differently, not better.</p>

<p>All of us have certain irrational attachments to the various things we are used to doing: things we do not because it’s the best way to do them, but because it’s become comfortable to do them that way. I have seen new developers come onto a team and complain endlessly about something that is clearly a net benefit for them and the team. However, the team is so used to doing it their way that they cannot imagine changing.</p>

<p>Allow me to share a personally painful example.</p>

<p>Much to my regret, when I moved into .NET development coming from the scripting world, I complained non-stop about how annoying it was to have to assign a type to everything.</p>
<blockquote>
<p dir="ltr"><p>“I mean, in perl and php we got along great without it, so why on earth should anyone have to go through all this extra hassle?”</p></p>
</blockquote>
<p>I didn’t realize how strong typing enabled very powerful tooling, and to be perfectly honest, I probably didn’t care. However, I did realize that my complaints were falling on deaf ears. My co-workers, who had never even looked at a dynamically typed language before, didn’t care. Much worse, I was alienating myself from them, becoming<em> that guy</em>, the one who just complains all the time. I sucked.</p>

<p>So, I decided on a new policy. Whenever something offended my sensibilities, seeming worse, wrong or just different, I would document it in a to-do list (I use <a href="http://orgmode.org/">org-mode</a> in emacs, because it’s mind-alteringly cool). I would stop complaining about it, stop making sidelong hints at it. I would just add it to the list. Apparently, I was pretty opinionated about how to make that team better, because that list grew monstrously large in just a few months.</p>

<p>Next, I would review that list every week. Whenever I had downtime I would pick something small and try to implement whatever I needed to make that work, things like:  like installing a CI server, or figuring out how to unit test this crazy actionscript fla.</p>

<p>If an issue was too large or I lacked the understanding to resolve all at once, I would do root cause analysis and brainstorm different ways to achieve the goal. Sometimes, I would take something off the list, either because it was too costly to justify its value, or because sometimes I realized I was grossly incorrect in my understanding of the issue.</p>

<p>So, back to my example about static typing. After about a year, I realized there was no way I could reasonably argue it was worth a change. No one but me cared, no one was interested in<a href="/how-to-escape-from-programming_language/" target="_blank"> learning new languages to try to use for development</a>, and the cost to convert anyway would have been staggering (and conversion was likely impossible).</p>
