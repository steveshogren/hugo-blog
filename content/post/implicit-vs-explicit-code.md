+++
title = "Implicit Vs Explicit Code"
date = "2016-03-10"
draft=true
Categories = ["technical skills", "csharp"]
+++

When choosing a code style, one of the major topics is whether or not to put in
implicit keywords.

``` haskell
prefixer :: String -> String -> String
prefixer prefix x y =
    let t = prefix + x + y
    in t
```

``` haskell
prefixer prefix x y = prefix + x + y
```

``` csharp
public namespace Helpers {
  public class StringPrefixer {

    private readonly String prefix;

    public StringPrefixer(string prefix) {
        this.prefix = prefix;
    }
    
    public void Concat(string s1, string s2) {
        String t = this.prefix + s1 + s2;
        return t;
    }
  }
}
```

``` csharp
public namespace Helpers {
  public class StringPrefixer {

    String prefix;

    public StringPrefixer(string prefix) {
        prefix = prefix;
    }
    
    public void Concat(string s1, string s2) {
        return prefix + s1 + s2;
    }
  }
}
```
