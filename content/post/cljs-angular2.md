+++
title = "Using Angular2 in ClojureScript"
date = "2016-04-11"
Categories = ["technical skills","clojure", "clojurescript"]
+++

Getting ClojureScript to run Angular2 is not very difficult. Here is a sample
project demonstrating a working Angular2 site using Figwheel for hot-reloading
[on GitHub](https://github.com/steveshogren/angular2-cljs/commit/ae1a1abfe91a84cb5146931ff731885a2b1d5486)

### 1. Install Luminus +cljs

First, setup a basic ClojureScript site using Luminus starter template from
[here](http://www.luminusweb.net/docs)

```bash
lein new luminus cljs-angular2 +cljs
```

This builds a great basic starter project with ClojureScript and figwheel
already running. The template uses Reagent and React, which are excellent, but
we want Angular2!

### 2. Replace Figwheel Site Loader

Open the env/dev/cljs/dev.cljs file, which starts the site when running from
development.

Replace the call to start a figwheel watcher with this:

```clojurescript
(defn reload []
  (core/init!)
  ((.. js/ng -platform -browser -bootstrap)
   (.-AppComponent (.-app js/window))))

(figwheel/watch-and-reload :websocket-url "ws://localhost:3449/figwheel-ws"
                           :on-jsload reload)

(core/init!)
(defonce only-attach-listener-once
  (.addEventListener js/document "DOMContentLoaded"
                     (fn []
                       ((.. js/ng -platform -browser -bootstrap)
                        (.-AppComponent (core/get-app))))))
```

The defonce will make sure I accidentally don't attach the same event listener
twice when re-evaluating files at the repl.

### 3. Make Angular2 Component

Replace the src-cljs/cljs-angular2/core.cljs file with this:

```clojurescript
(ns cljs-angular2.core
  (:require-macros [hiccups.core :as hiccups :refer [html]]))

(defn get-app []
   (or (.-app js/window)
       (set! (.-app js/window) #js {})))

(defn init! []
  (let [app (get-app)
        c (.Component (.-core js/ng)
                      #js {:selector "my-app"
                           :template (html [:div
                                            [:h1 "My first Angular 2 app"]
                                            [:div [:h2 "test"]]
                                            [:div [:h3 "test2"]]])})
        c (.Class c #js {:constructor (fn [])})]
    (set! (.-AppComponent app) c)))

```

### 4. Add Angular2 Dependencies

Add a package.json file into resources/public/ and fill it with this:

```json
{
  "name": "angular2-quickstart",
  "version": "1.0.0",
  "scripts": {
    "start": "npm run lite",
    "lite": "lite-server"
  },
  "license": "ISC",
  "dependencies": {
    "angular2": "2.0.0-beta.14",
    "es6-shim": "^0.35.0",
    "reflect-metadata": "0.1.2",
    "rxjs": "5.0.0-beta.2",
    "zone.js": "0.6.6"
  },
  "devDependencies": {
    "concurrently": "^2.0.0",
    "lite-server": "^2.2.0"
  }
}
```

Now run ```npm install``` from inside the resources/public directory.

### 5. Add Hiccups

Modify the project.clj in the root directory to include the ```hiccups```
dependency so we don't have to write nasty html strings:

``` clojure
:dependencies [[hiccups "0.3.0"]
               ...
```

### 6. Add Dependencies To Home HTML

Add the following to resources/templates/home.html before the line including
```{% script "/js/app.js" %}```

```
<my-app>Loading...</my-app>
<script src="node_modules/es6-shim/es6-shim.min.js"></script>
<script src="node_modules/angular2/es6/dev/src/testing/shims_for_IE.js"></script>

<script src="node_modules/angular2/bundles/angular2-polyfills.js"></script>
<script src="node_modules/rxjs/bundles/Rx.umd.js"></script>
<script src="node_modules/angular2/bundles/angular2-all.umd.js"></script>
```

### 7. Start Site!

Start the site with three tabs open running:

```bash
lein run
lein cljsbuild auto
lein figwheel
```

The ```lein run``` command should emit a line showing the port number like:

```
[2016-04-10 16:16:51,326][INFO][cljs-angular2.core] server started on port: 3000
```

Just open your browser to ```localhost:3000``` where 3000 is the port number
from the ```lein run``` command. Try to modify the core.cljs file to have a new
template, and the site should automatically refresh with the new changes! If
that doesn't work, make sure you are running both the cljsbuild on auto and
figwheel processes.

Easy as that!

If you get stuck, I checked in a working version [on GitHub](https://github.com/steveshogren/angular2-cljs/commit/ae1a1abfe91a84cb5146931ff731885a2b1d5486)
