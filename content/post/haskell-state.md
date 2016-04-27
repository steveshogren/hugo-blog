+++
title = "Wrangling State In Haskell"
date = "2016-04-27"
Categories = ["technical skills","haskell"]
banner="/images/raptors.jpg"
+++


Part 2 of my series "Wrangling State". Part 1
[Wrangling State In Clojure]({{< relref "clojure-state.md" >}})

Haskell is a pure language, so you can only deal with application state by
passing parameters to functions. It is possible to pass parameters more
conveniently, but ultimately, every parameter needs to be passed.

Here is a simple application for logging a timestamp to a file.

First, **Pass As Parameter**:

```haskell
loadFile :: Filename -> IO String
loadFile fileName =
  BS.unpack <$> Str.readFile fileName

saveFile :: Filename -> String -> IO ()
saveFile fileName contents = 
  Str.writeFile fileName (BS.pack contents)

clearFile :: Filename -> IO ()
clearFile fileName = saveFile fileName ""

appendToFile :: Filename -> String -> IO ()
appendToFile fileName stuff = do
    contents <- loadFile fileName
    saveFile fileName (contents++stuff)

main fileName "-c" = clearFile fileName
main fileName "-log" = do
  now <- getCurrentTime
  appendToFile fileName ((show now)++ "\n")
```

We take in the file name and the command to perform, either to clear the file or
to append a new timestamp. While simple, this gets cumbersome in a large
application. Imagine passing a database connection through every single function
that eventually calls the database.

Haskell can have unnamed parameters that are not defined in the argument list.
Sometimes this can improve legibility, other times it can worsen it. To use this
feature, the function signature must contain the value missing. The parameter(s)
must be the "last" parameter(s) to the function for this to work.

Here is the same code with **Unnamed Parameters**:

```haskell
loadFile :: Filename -> IO String
loadFile = (liftM BS.unpack) . Str.readFile

saveFile :: String -> Filename -> IO ()
saveFile contents fileName =
  Str.writeFile fileName (BS.pack contents)

clearFile :: Filename -> IO ()
clearFile = saveFile ""

appendToFile :: String -> Filename -> IO ()
appendToFile stuff = (>>=) <$> loadFile <*> ((. (++stuff)) . (flip saveFile))

main fileName "-c" = clearFile fileName
main fileName "-log" = do
  now <- getCurrentTime
  appendToFile ((show now)++ "\n") fileName
```

Not all usages of ```Filename``` can be easily unnamed. We did use it in
```loadFile``` and ```clearFile```. It does allow the "differences" to stand out
more. For example, ```clearFile``` is just a ```saveFile``` with an empty string
for the first parameter. We can see the differences clearly without the extra
parameter adding noise.

We added it to ```appendToFile```, using point-free style. I find that it makes
it much harder to scan and read.

Lastly, it is possible to encode such values into the type. The type of the
function itself can imply a value that can be retrieved. For example, the Reader
type can be combined with the IO type using ReaderT.

Here is the code using the **Reader Type**:

```haskell
loadFile :: ReaderT Filename IO String
loadFile = do
  fileName <- ask
  liftIO $ BS.unpack <$> Str.readFile fileName

saveFile :: String -> ReaderT Filename IO ()
saveFile contents = do
  fileName <- ask
  liftIO $ Str.writeFile fileName (BS.pack contents)

clearFile :: ReaderT Filename IO ()
clearFile = saveFile ""

appendToFile :: String -> ReaderT Filename IO ()
appendToFile stuff = do
    contents <- loadFile
    saveFile (contents++stuff)

main fileName "-c" = runReaderT clearFile fileName
main fileName "-log" = do
  now <- getCurrentTime
  runReaderT (appendToFile ((show now)++ "\n")) fileName
```

Notice now how ```appendToFile``` and ```clearFile``` have the signature:
```ReaderT Filename IO ()```, indicating that anything below them can ```ask```
for the Filename, while still performing an ```IO``` action. The "entry-point"
calls in ```main``` need to be initialized with the ```runReaderT``` and the
```Filename``` we want to pass.

For this case, the ```ReaderT``` is substantially more readable. The "business
value" functions ```appendToFile``` and ```clearFile``` do not have to define
and pass the parameters needed for the lower level functions ```saveFile``` and
```loadFile```. **Reader Type** gives us the value of the **Unnamed
Parameters** for legibility!

For something like a database connection that might be used pervasively, the
**Reader Type** is essential for legible code. The low level functions that need
the ```Filename``` are able to call ```ask``` to retrieve it.

| | Dependencies | Complexity | Adding New State | Best When |
|-------------          |-------------- |  ------------- | ------------- | ------------- |
|**Pass As Parameter**  | Explicit     | Less Complex |  Harder         | State only needed in a few functions
|**Unnamed Parameter** | Explicit     | Less Complex |   Harder       | Functions can be made more readable
|**Reader Type**        | Explicit     | More Complex |   Easier       | State needed throughout the application

Compared to [Clojure]({{< relref "clojure-state.md" >}}), Haskell has no way to
call a function "incorrectly". All in-memory state is passed explicitly.

Haskell's type system prevents the programmer from forgetting state.
Unfortunately, it is still possible to pass as any parameter a value that is
invalid. The explicit nature of Haskell parameters does not prevent passing a
database connection string that does not exist, or a pointer to an incorrectly
setup data structure.

Haskell is opinionated, and forces you to consider all the state up front before
calling a function. While this makes it harder to forget about state, it also
makes abstractions more leaky. Instead of relying on a function which may or may
not use a database, you must know and pass the database connection. 

Even though I believe the Haskell type system makes abstractions more leaky, I
prefer having to think up front about all my state. I find it makes the code
more clear, and helps me control what functions have access to state.

Edit: Thanks to [/u/kccqzy](https://www.reddit.com/r/haskell/comments/4go5dr/wrangling_state_in_haskell/d2j9aqz) on reddit for offering a way to make
```appendToFile``` use point-free style.
