+++
title = "Wrangling State In Haskell"
date = "2016-04-07"
Categories = ["technical skills","haskell"]
draft=true
+++

Part 2 of my series "Wrangling State". Part 1 [Wrangling State In Clojure](http://deliberate-software.com/clojure-state/)

Haskell is a pure language, so you can only deal with application state by
passing parameters to functions. There is some subtle nuance that will allow
parameters to be passed more conveniently, but ultimately, every parameter needs
to be passed.

First, passing by parameter.

