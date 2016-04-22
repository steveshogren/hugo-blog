+++
title = "Why Not ClojureScript"
date = "2016-04-22"
Categories = ["technical skills","clojure", "clojurescript"]
draft=true
+++

A while ago, a team in my group decided to adopt ClojureScript for a new
project. The lead on the project was a little green with Clojure, and so he
requested my help to lay the foundation for the project. He wanted to use
Angular2, and be able to inter-op with existing Angular directives.

The first day, he wanted to try getting it working while pairing with another
developer who knows no Clojure or JavaScript. The two of them grew frustrated
throughout the day, as they struggled with the basics of lein, lisp syntax, and
JavaScript inter-op.

The next day, both of them were convinced that ClojureScript "didn't work".
Since I had been recruited to this team to help them with ClojureScript, I wrote
up two guides about how to get
["Using Angular2 in Clojurescript"](http://deliberate-software/cljs-angular2/)
and
["Hot Loading Angular2 With State"](http://deliberate-software/figwheel-angular2/)
to illustrate how to setup such a project from scratch.

Over the next week, each day they would come up and point out how "ClojureScript
won't work" because of some new reason. Each day I would gently illustrate how
to accomplish their goals. After a few days of this, I suspected what was really
going on. I probed, "let's not do ClojureScript, you all clearly aren't enjoying
it." They insisted it was what they wanted to do, but it wasn't going to "meet
our needs." I continued to solve each issue, until finally none were left. They
grew more and more dour with each finished task, complaining whenever they
stumbled over the lisp syntax.

 
