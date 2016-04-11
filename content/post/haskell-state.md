+++
title = "Wrangling State In Haskell"
date = "2016-04-07"
Categories = ["technical skills","haskell"]
draft=true
+++

Part 2 of my series "Wrangling State". Part 1 [Wrangling State In Clojure](http://deliberate-software.com/clojure-state/)

Haskell is a pure language, so you can only deal with application state by
passing parameters to functions. It is possible to pass parameters more
conveniently, but ultimately, every parameter needs to be passed.

First, passing by parameter.

```haskell
loadFile :: String -> IO String
loadFile fileName =
  BS.unpack <$> Str.readFile fileName

saveFile :: String -> String -> IO ()
saveFile fileName contents = 
  Str.writeFile fileName (BS.pack contents)

clearFile :: String -> IO ()
clearFile fileName = saveFile fileName ""

appendToFile :: String -> String -> IO ()
appendToFile fileName stuff = do
    contents <- loadFile fileName
    saveFile fileName (contents++stuff)

main fileName "-c" = clearFile fileName
main fileName "-log" = do
  now <- getCurrentTime
  appendToFile fileName ((show now)++ "\n")
```

Implicit Parameters

```haskell
loadFile :: String -> IO String
loadFile f =
  BS.unpack <$> Str.readFile f

saveFile :: String -> String -> IO ()
saveFile contents fileName =
  Str.writeFile fileName (BS.pack contents)

clearFile :: String -> IO ()
clearFile = saveFile ""

appendToFile :: String -> String -> IO ()
appendToFile stuff fileName = do
    contents <- loadFile fileName
    saveFile (contents++stuff) fileName

main fileName "-c" = clearFile fileName
main fileName "-log" = do
  now <- getCurrentTime
  appendToFile ((show now)++ "\n") fileName
```

Reader Type

```haskell
loadFile :: ReaderT String IO String
loadFile = do
  fileName <- ask
  liftIO $ BS.unpack <$> Str.readFile fileName

saveFile :: String -> ReaderT String IO ()
saveFile contents = do
  fileName <- ask
  liftIO $ Str.writeFile fileName (BS.pack contents)

clearFile :: ReaderT String IO ()
clearFile = saveFile ""

appendToFile :: String -> ReaderT String IO ()
appendToFile stuff = do
    contents <- loadFile
    saveFile (contents++stuff)

main fileName "-c" = runReaderT clearFile fileName
main fileName "-log" = do
  now <- getCurrentTime
  runReaderT (appendToFile ((show now)++ "\n")) fileName
```


