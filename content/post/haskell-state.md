+++
title = "Wrangling State In Haskell"
date = "2016-04-07"
Categories = ["technical skills","haskell"]
draft=true
+++

Part 2 of my series "Wrangling State". Part 1
[Wrangling State In Clojure](http://deliberate-software.com/clojure-state/)

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
to append a new timestamp.

Haskell can have implicit parameters that are not defined in the argument list.
Sometimes this can add legibility, other times it can worsen it.

Here is the same code with **Implicit Parameters**:

```haskell
loadFile :: Filename -> IO String
loadFile = (liftM BS.unpack) . Str.readFile

saveFile :: String -> Filename -> IO ()
saveFile contents fileName =
  Str.writeFile fileName (BS.pack contents)

clearFile :: Filename -> IO ()
clearFile = saveFile ""

appendToFile :: String -> Filename -> IO ()
appendToFile stuff fileName = do
    contents <- loadFile fileName
    saveFile (contents++stuff) fileName

main fileName "-c" = clearFile fileName
main fileName "-log" = do
  now <- getCurrentTime
  appendToFile ((show now)++ "\n") fileName
```

Not all usages of Filename could be made implicit, but it could in
```loadFile``` and ```clearFile```. I don't think it adds much value in either
case.

Lastly, it is possible to encode such values into the type. The type of the
function itself can imply a value that can be retrieved. For example, the Reader
type can be combined with the IO type using ReaderT.

Here is the code using ReaderT:

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
for the Filename, while still performing an ```IO``` action.

I think for this case, the ```ReaderT``` is substantially more readable. The
"business value" functions ```appendToFile``` and ```clearFile``` do not have to
define and pass the parameters needed for the lower level functions
```saveFile``` and ```loadFile```. The low level functions that need the
```Filename``` are able to call ```ask``` to retrieve it.

