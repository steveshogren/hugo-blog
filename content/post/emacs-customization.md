+++
title = "When Emacs Rocks"
Categories = ["technical skills", "emacs"]
Tags = []
date = "2018-06-03"
+++

Working through the amazing
[Data 61 Functional Programming Course](https://github.com/data61/fp-course),
(seriously, put it on your list!) and I found myself doing a repeated action. 

The course is a set of failing unit tests, but some sections have comments
indicating some expected behavior:

``` haskell
-- >>> parse (satisfyAll (isUpper :. (/= 'X') :. Nil)) "ABC"
-- Result >BC< 'A'
--
-- >>> parse (satisfyAll (isUpper :. (/= 'X') :. Nil)) "ABc"
-- Result >Bc< 'A'
--
-- >>> isErrorResult (parse (satisfyAll (isUpper :. (/= 'X') :. Nil)) "XBc")
-- True
satisfyAll :: List (Char -> Bool) -> Parser Char
satisfyAll = error "fill this in"
```

