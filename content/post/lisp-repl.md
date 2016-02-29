+++
title = "Lisp REPL"
Categories = ["Technical Skills", "Clojure"]
Tags = []
date = "2011-06-04"
+++
<p>
  So, working through the Land of Lisp book, getting the hang of it.
</p>
<p>
Chapter Six, the author starts off by talking a little about
  the Common Lisp REPL, or Read-Eval-Print-Loop that you use as sort
  of the "command line" for interacting with lisp. It is pretty cool,
  you type in code, and it executes. And then he opens the hood a
  little:
</p>

``` clojure
(defun repl ()
    (loop (print (eval (read)))))
```
<p>
WHAAAAAAAAAAAAAAA??!?!?!
</p>
<p>
I just about spit my drink all over the monitor laughing. The
function <strong>eval()</strong> evaluates whatever text is passed in
as code, in this case, from the command line via the obviously
named <strong>read</strong> and after executing
it, <strong>print()</strong> prints the result, and it just does that
forever till you quit.
</p>
<p>
That means, you could make one of these for any language that can
evaluate strings into code. I know python has one built-in. Php can
evaluate code with eval, and a quick search shows a highly nifty (and
robust from the looks of
it) <a href="https://github.com/facebook/phpsh">REPL for php</a>
complements of facebook. Sweet. Or, you can use php -a for the
interactive mode.
</p>
