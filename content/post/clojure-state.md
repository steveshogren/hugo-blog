+++
title = "Wrangling State In Clojure"
date = "2016-03-28"
draft=true
Categories = ["technical skills", "clojure","haskell"]
+++

> "Clojure is immutable, so you can't change anything, how useless!"

Immutable languages make application state an interesting concept.

In Clojure, you often deal with application state in two main ways. The first
way is to pass the state around as parameters to your functions.

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

The ```atom``` allows us to not have to pass around the state. We mutate
```dbcon``` with the connection parameters before calling any database accessing
functions. Unfortunately, this sets up an implicit dependency: ```delete!```
will only work if the ```dbcon``` atom was setup beforehand.

| | Dependencies | Calling Function | Adding New State | Best When |
|------------- |-------------- | ------------ | ------------- | ------------- |
|**Pass As Parameter** | Explicit |  Easier  | Harder | State Values Change Frequently
|**Mutate Shared Location** | Implicit |  Harder  |  Easier | State Values Change Rarely

I default to passing state as a parameter as my first choice. When passing as a
parameter grows costly, I fall back to an atom. Passing as a parameter works
best when the value changes every time.

An exception would be something as ubiquitous as a database connection in a CRUD
application. A CRUD application will typically need a database connection at
every leaf node, so I will use an atom from the start.

