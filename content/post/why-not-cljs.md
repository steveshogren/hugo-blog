+++
title = "Why Not ClojureScript"
date = "2016-04-22"
Categories = ["technical skills","clojure", "clojurescript"]
draft=true
+++

A few weeks back, a team in my group decided to adopt ClojureScript for a new
project. The lead on the project was a little green with Clojure, and so he
requested my help to lay the foundation for the project. He wanted to use
Angular2, and be able to inter-op with existing Angular directives.

The first day, he wanted to try getting it working while pairing with another
developer who knows no Clojure or JavaScript. The two of them grew frustrated
throughout the day, as they struggled with the basics of lein, lisp syntax, and
JavaScript inter-op.

The next day, both of them were convinced that ClojureScript "didn't work".
Since I had been recruited to this team to help them with ClojureScript, I wrote
up two guides about
["Using Angular2 in Clojurescript"](/cljs-angular2/)
and
["Hot Loading Angular2 With State"](/figwheel-angular2/)
to illustrate how to setup such a project from scratch.

Over the next week, each day they would come up and point out how "ClojureScript
won't work" because of some new reason. Each day I would gently illustrate how
to accomplish their goals. After a few days of this, I suspected what was really
going on. I probed, "let's not do ClojureScript, you all clearly aren't enjoying
it." They insisted it was what they wanted to do, but it wasn't going to "meet
our needs." I continued to solve each issue, until finally none were left. They
grew more and more dour with each finished task, complaining whenever they
stumbled over the lisp syntax.

After a couple days, we had a working version of the site. They were less and
less interested in working on it, by the last few days a co-op and I were
working on it alone. I tried again and again to say "let's not use this, you
clearly don't want to use it" and was rebuffed that of course they wanted to use
it, it just wasn't going to work for us. Finally, I brought it up to the larger
development team.

The larger development team realized what was going on, and we decided that
"maybe we just weren't ready for ClojureScript", and perhaps we should
"research" it further. Immediately the developers lit up. They ran back to their
machines and deleted the ClojureScript project, replacing it with an ES6
transpiler. Within a few hours, they were chugging along having a blast.

Sometimes, "ClojureScript doesn't work" just means, "we don't like
ClojureScript, but don't want to say so."
