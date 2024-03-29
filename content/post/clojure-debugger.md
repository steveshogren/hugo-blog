+++
title = "Clojure Debugger"
Categories = ["Clojure", "Technical Skills"]
Tags = []
date = "2013-08-07"
+++

I was at the Clojadelphia meetup on Thursday, and got an excellent run through of the tools.trace library from Tim Visher. He has submitted a pull request to the original authors, with his expanded and very clear documentation found <a title="here" href="https://github.com/timvisher/what-does-tools-trace-do/blob/master/src/what_does_tools_trace_do/core.clj">here</a>.
<br />
<br />
One call from the library in particular really stood out, a call for finding out what form threw an exception out of many.
<br />
<br />
``` clojure
;; trace-forms "Trace all the forms in the given body. Returns any
;; underlying uncaught exceptions that may make the forms fail."
(trace-forms
 (let [a (+ 1 1)
       b (* 2 2)
       c (* a b (/ 4 0))]
   c))
;; => ArithmeticException Divide by zero
;;      Form failed: (/ 4 0)
;;      Form failed: (* a b (/ 4 0))
;;      Form failed: (let* [a (+ 1 1) b (* 2 2) c (* a b (/ 4 0))] c)
;;      Form failed: (let [a (+ 1 1) b (* 2 2) c (* a b (/ 4 0))] c)
;;      clojure.lang.Numbers.divide (Numbers.java:156)
```
<br />
<br />
Which is incredibly cool. At the time, I could see using that all the time for helpful benefits. In the last few days though, I realized a more obvious function has been far more helpful to my daily development: deftrace. Deftrace just replaces a defn, and does the same, but it also prints out the ins and outs of the function.
<br />
<br />
``` clojure
;; example up from clouredocs.org:
  ;; http://clojuredocs.org/clojure_contrib/clojure.contrib.trace/deftrace
  (deftrace fib [n]
    (if (or (= n 0) (= n 1))
      1
      (+ (fib (- n 1)) (fib (- n 2)))))
 
  (fib 4)
  ;; => 5
  ;; 1> TRACE t2742: (fib 4)
  ;;    TRACE t2743: | (fib 3)
  ;;    TRACE t2744: | | (fib 2)
  ;;    TRACE t2745: | | | (fib 1)
  ;;    TRACE t2745: | | | => 1
  ;;    TRACE t2746: | | | (fib 0)
  ;;    TRACE t2746: | | | => 1
  ;;    TRACE t2744: | | => 2
  ;;    TRACE t2747: | | (fib 1)
  ;;    TRACE t2747: | | => 1
  ;;    TRACE t2743: | => 3
  ;;    TRACE t2748: | (fib 2)
  ;;    TRACE t2749: | | (fib 1)
  ;;    TRACE t2749: | | => 1
  ;;    TRACE t2750: | | (fib 0)
  ;;    TRACE t2750: | | => 1
  ;;    TRACE t2748: | => 2
  ;;    TRACE t2742: => 5
```
<br />
<br />
At this point in the demo, the room was leaping out of their chairs laughing in sheer delight at how awesome this is. It is ultimately such a simple idea, and yet it's execution is brilliant and inconceivably handy.
<br />
<br />
At first, I thought, "well that is an incredibly cool party trick, but a party trick nonetheless". A few days of regular clojure development later, I realized the profundity of this library.
<br />
<br />
I have had on my list of "pain points" an item to learn how to debug clojure code. Once in a while, I have felt the need to find out exactly what was going on at a certain point, and had to awkwardly put in (do (pprint x) x) statements everywhere. Clearly though, that is lame.
<br />
<br />
Here is the grand reveal. <strong>Concepts and tools that other languages have sometimes look very different in clojure.</strong> "Well, duh", you say. I am not talking about syntax! I am talking about the <em>tools.</em>
<br />
<br />
I wanted a debugger (and, yes, I know at least traditional one exists for clojure), and so that is what I would have looked for: the traditional "put in a breakpoint, run the code, pause at that place, inspect values, etc". When I first saw tools.trace, the image of a "debugger replacement" did not immediately enter my head. But, tools.trace basically gives me almost all the benefit of a traditional debugger at effectively no hassle or cost. Just now I was developing some code, and got stuck on a spot where something unexpected happened, and with only a second's hassle, replaced a few defns with deftrace. I re-ran my code in the repl, and now got a printout of exactly what the in's and out's were, and all of a sudden it clicked. "I just found my new debugger", and, "wow, this debugger is way less hassle".
<br />
<br />
No, of course this doesn't do everything a full debugger does, but at least for the foreseeable future, it probably will do enough most of the time. The first time I need a real full debugger, I will go looking for it, but for now, I suspect this gets me my 80% benefit for way less than 20% hassle.
<br />
<br />
The discovery of such tools is what is making learning clojure such a profoundly rewarding journey for me. I am being taught to think about the "default ide" tools in such a different light. Watching as community members distill out these sort of High-Value concentrate tools using Clojure's meta-programming is simply the most mind altering thing I have experienced in programming.
