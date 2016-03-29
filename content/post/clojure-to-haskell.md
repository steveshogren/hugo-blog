+++
title = "Wrangling State In Clojure And Haskell"
date = "2016-03-28"
draft=true
Categories = ["technical skills", "clojure","haskell"]
+++

> "Clojure is immutable, so you can't change anything, how useless!"

Immutable languages make application state an interesting concept.

In Clojure, I am used to dealing with state in two main ways. The first, I pass
the state around as parameters to my functions.

``` clojure
(defn delete! [dbcon table id]
  (jdbc/delete! dbcon table ["id=?" id]))

;; record-exits omitted

(defn delete-user [dbcon user-id]
  (if (record-exists dbcon "user" user-id)
    (delete! dbcon "user" user-id)))

(defn -main [& [connection-string user-id]]
  (let [dbcon (make-connection connection-string)]
    (delete-user dbcon user-id)))
```

This requires every function that eventually accesses a database to also have
the database connection. The trade-off is one of simplicity: it is easier to
test and interact with code that takes all of its dependencies as parameters.

The alternative is to set a thread-safe value somewhere and give the underlying
code access to it. In Clojure, the ```atom``` primitive is the first choice for
this.

``` clojure
(def dbcon (atom nil))

(defn delete! [table id]
  (jdbc/delete! @dbcon table ["id=?" id]))

;; record-exits omitted

(defn delete-user [user-id]
  (if (record-exists "user" user-id)
    (delete! "user" user-id)))

(defn -main [& [connection-string user-id]]
  (swap! dbcon (fn [old] (make-connection connection-string)))
  (delete-user user-id))
```
