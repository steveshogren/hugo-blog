+++
title = "Simple Haskell Automation in Emacs"
Categories = ["technical skills", "emacs", "fp-course"]
Tags = []
date = "2018-06-05"
+++

I am working through the amazing
[Data 61 Functional Programming Course](https://github.com/data61/fp-course)
(seriously, put it on your list!) and I found myself doing a repeated set of
actions. Repeated sets of actions are perfect for automation!

The course has some sections with comments indicating the expected behavior:

``` haskell
-- >>> parse (satisfyAll (isUpper :. (/= 'X') :. Nil)) "ABC"
-- Result >BC< 'A'
--
-- >>> isErrorResult (parse (satisfyAll (isUpper :. (/= 'X') :. Nil)) "XBc")
-- True
satisfyAll :: List (Char -> Bool) -> Parser Char
satisfyAll = error "fill this in"
```

After about the hundredth time copying a comment to my REPL and running it, I
decided to make a keyboard shortcut to do it.

In my emacs init file, I start a new binding:

```lisp
(define-key haskell-mode-map (kbd "<f5>") 'copy-haskell-comment)

(defun copy-haskell-comment ()
  (interactive)
  (message "test")
  )
```

I use ```eval-last-sexp``` to add the binding and the function into my running
emacs instance without needing to restart. Now, going to the haskell file, I can
hit F5 and see "test" printed!

From here on out, I just need to figure out exactly what commands I ran to copy
the line over, delete the comment parts, and run it. Using ```C-h k``` I can
find out the names of the commands, and I came up with this:

```lisp
(defun copy-haskell-comment ()
  (interactive)

  (haskell-interactive-copy-to-prompt) ;; copy line to REPL
  (haskell-interactive-switch)         ;; move to REPL buffer
  (evil-goto-line)                     ;; move to last line in REPL buffer
  (replace-string "-- >>>" "" )        ;; remove the comment and chevrons
  (evil-end-of-line)                   ;; move cursor to end of line
  (haskell-interactive-mode-return)    ;; submit the line of code
  (haskell-interactive-switch-back)    ;; return to the original buffer
  )
```

Venerable emacs users will see some odd commands in there: those are just
imported from Evil and Spacemacs. All it took was using ```C-h k``` to find the
names of the commands, and then putting the commands into the function! After
each new line, I used ```eval-last-sexp``` to reevaulate the function so I could
ensure it performed as expected.

Now I have a single keystroke to do what took me many before! This is why I keep
using emacs!
