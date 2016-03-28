+++
title = "Wrangling State In Clojure And Haskell"
date = "2016-03-28"
draft=true
Categories = ["technical skills", "clojure","haskell"]
+++

STATE: Program state, values, configuration options

In Clojure, I am used to dealing with STATE in two main ways. The first, I pass
the STATE around as parameters to my functions.

``` clojure
;; start web site
(defn -main [& [port]]
  
  (jetty/run-jetty (site (tapp)) {:port 5000}))

;; business rules here...

;; delete a record
(defn delete! [dbcon table id]
  (jdbc/delete! dbcon table ["_id=?" id]))
```

This gets old real fast, as it requires every single caller of ```delete!``` to
also have the database connection. A database connection doesn't often change in
this application, so adding it as a parameter everywhere is tedious.
