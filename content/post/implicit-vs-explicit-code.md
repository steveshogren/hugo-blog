+++
title = "Implicit Vs Explicit Code"
date = "2016-03-10"
draft=true
Categories = ["technical skills", "csharp"]
+++

When choosing a code style, one of the major topics is whether or not to put in
implicit keywords.

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
