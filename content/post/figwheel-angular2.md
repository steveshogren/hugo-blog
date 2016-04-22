+++
title = "Hot Loading Angular2 With State"
date = "2016-04-13"
Categories = ["technical skills","clojure", "clojurescript", "angular"]
+++


In ["Using Angular2 in Clojurescript"](/cljs-angular2/)
I showed how to get ClojureScript to run an Angular2 template. Basic hotswapping
worked, but state was lost on each load. Tweaking the original demo allows for
figwheel to swap in the template without losing client state.

Here is a demo of hotswapping with state preservation:

<img src="/images/hotswap.gif"></img>

In this demo, we add three things to a list, then change the template that draws
the list. The client state stays in the browser, while the template changes
around it! Amazing!

To get this working, follow the steps in the
["Using Angular2 in Clojurescript"](/cljs-angular2/) first post. 

Replace the env/dev/cljs/dev.cljs contents with this simpler reloader:

```clojure
(defn mount-component []
  ((.. js/ng -platform -browser -bootstrap)
   (.-AppComponent (.-app js/window))))

(figwheel/watch-and-reload :websocket-url "ws://localhost:3449/figwheel-ws"
                           :on-jsload mount-component)

(defonce only-attach-listener-once
  (.addEventListener js/document "DOMContentLoaded" mount-component))
```

We now only re-mount the component on figwheel notification. The state is moved
to an atom in the core namespace like so:

```clojure
(defn get-app []
   (or (.-app js/window)
       (set! (.-app js/window) #js {})))

;; keep state of the component in a defonce atom
(defonce heroes (atom []))

(let [app (get-app)
      c (.Component (.-core js/ng)
                    #js {:selector "my-app"
                         :template (html [:div
                                          [:h1 " Demo"]
                                          [:div [:h2 "Hero List:"]]
                                          "
<input #newHero (keyup.enter)=\"addHero(newHero.value); newHero.value='' \" >
<button (click)=\"addHero(newHero.value); newHero.value='' \">Add</button>
<ul><li *ngFor=\"#hero of heroes()\">{{hero}}</li></ul>
"
                                          ])})
      c (.Class c #js {:constructor (fn [])
                       :addHero (fn [hero]
                                  (swap! heroes #(conj % hero)))
                       :heroes (fn [] @heroes)
                       })]
  (set! (.-AppComponent app) c))
```

The site now will recompile and reload while preserving the state of the
component. This pattern can be extended to allow certain state to be preserved
while other state is reloaded. In this demo, the state in the ```#newHero```
field is not preserved, while the ```heroes``` list is.

I don't have a great story for using hiccups to generate the special angular
tags like ```*ngFor```, ```(click)```, or ```(keyup.enter)```. For this demo, I
left that html as just a raw string.

Check out the full working example on GitHub [here](https://github.com/steveshogren/angular2-cljs/tree/5025e2983ab054c88717c89528b85c7f9aaea851)
