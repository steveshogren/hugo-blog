+++
title = "Wrangling State In Clojure"
date = "2016-03-29"
Categories = ["technical skills", "clojure","haskell"]
+++

> "Clojure is immutable, so you can't change anything, how useless!"

Immutable languages make application state an interesting concept.

In Clojure, you can deal with application state in two main ways. The first way
is to pass the state around as parameters to your functions. An example of
**Pass As Parameter**:

``` clojure
(defn delete! [db-con table id]
  (jdbc/delete! db-con table ["id=?" id]))

;; valid-for-delete omitted

(defn delete-user [db-con user-id]
  (if (valid-for-delete db-con "user" user-id)
    (delete! db-con "user" user-id)))

(defn -main [& [connection-string user-id]]
  (let [db-con (make-connection connection-string)]
    (delete-user db-con user-id)))
```

This requires every function that eventually accesses a database to also have
the database connection. The trade-off is one of simplicity: it is easier to
test and interact with code that takes all of its dependencies as parameters.

The alternative is to set a thread-safe value somewhere and give the underlying
code access to it. In Clojure, the ```atom``` primitive is the first choice for
this. A common misconception is that Clojure prevents all mutation. The
```atom``` primitive can be mutated, it just has to be done with a special
```swap!``` function. Let's call this: **Mutate Shared Location**.

``` clojure
(def db-con (atom nil))

(defn delete! [table id]
  (jdbc/delete! @db-con table ["id=?" id]))

;; valid-for-delete omitted

(defn delete-user [user-id]
  (if (valid-for-delete "user" user-id)
    (delete! "user" user-id)))

(defn -main [& [connection-string user-id]]
  (swap! db-con (fn [old] (make-connection connection-string)))
  (delete-user user-id))
```

The ```atom``` allows us to not have to pass around the state. We mutate
```db-con``` with the connection parameters before calling any database accessing
functions. Unfortunately, this sets up an implicit dependency: ```delete!```
will only work if the ```db-con``` atom was setup beforehand.

| | Dependencies | Correctly Call Function | Adding New State | Best When |
|------------- |-------------- | ------------ | ------------- | ------------- |
|**Pass As Parameter** | Explicit |  Easier  | Harder | State Values Change Frequently
|**Mutate Shared Location** | Implicit |  Harder  |  Easier | State Values Change Rarely

**Mutate Shared Location** might look familiar, in a lot of other languages it
is implemented with the Singleton Design Pattern. Often a Singleton class will
act as the mutable shared location for storing state.

When adding new application state, I typically default to **Pass As Parameter**
as my first choice. When **Pass As Parameter** grows costly, I fall back to
**Mutate Shared Location**. **Pass As Parameter** works best when the value
changes regularly.

An exception would be something as ubiquitous as a database connection in a CRUD
application. A CRUD application will typically need a database connection at
every leaf node, and it rarely changes, so I will use **Mutate Shared Location**
from the start.

With these two ways of passing application state, we are offered the flexibility
to choose the best tool for the job.
