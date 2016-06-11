+++
title = "Modern Dependency Injection"
date = "2016-06-11"
Categories = ["technical skills", "architecture", "csharp", "unit-testing"]
+++

Dependency Injection is a pattern for polymorphic dispatch or unit-test mocking.

### The Unnecessary Boilerplate

Injection of an interface through the constructor is a common way to replace a
dependency for unit-test mocking. Unfortunately, it is an extremely verbose
pattern.

Look how much boilerplate is needed just to mock out a call to
```DateTime.Now```:

{{< highlight csharp "linenos=inline,style=default,noclasses=false,hl_lines=1 2 3 4 5 6 8 9 10 12 13 14 15 16 17 18 19" >}}
public interface ICurrentTime {
    DateTime GetCurrentTime();
}

public class CurrentTime : ICurrentTime {
    public DateTime GetCurrentTime() {
        return DateTime.Now;
    }
}

public class Formatter {
    private readonly ICurrentTime currentTime;

    public Formatter() : this(new CurrentTime()) {}

    public Formatter(ICurrentTime currentTime) {
        this.currentTime = currentTime;
    }

    public string Format(string input) {
        return string.Format("{0}: {1}", currentTime.GetCurrentTime().ToString(), input);
    }
}
{{< / highlight >}}

We learned to mock this way because Java did not have lambdas at the time the
pattern was invented! Now that both Java and C# have lambdas, the existing DI
pattern can be improved.

### For Unit Test Mocking

Thanks to the power of lambdas in a modern language like Java 8 or C#, the
previously highlighted lines (1-19) can be removed!

{{< highlight csharp "linenos=inline,style=default,noclasses=false">}}
public class Formatter {
    internal Func<DateTime> currentTime = () => return DateTime.Now;

    public string Format(string input) {
        return string.Format("{0}: {1}", currentTime().ToString(), input);
    }
}
{{< / highlight >}}

Much better! The code is easier to read, understand, and [mock in a unit test]({{< relref "simplemock-unit-test-mocking.md" >}}). 

### For Polymorphism

If you still need to replace the function with another for polymorphic dispatch,
use constructor injection of just the lambda. Be forewarned, you probably need
this much less than you think!

{{< highlight csharp "linenos=inline,style=default,noclasses=false">}}
public class Formatter {
    internal Func<DateTime> currentTime;

    public Formatter() : this(() => return DateTime.Now) {}

    public Formatter(Func<DateTime> currentTime) {
        this.currentTime = currentTime;
    }

    public string Format(string input) {
        return string.Format("{0}: {1}", currentTime().ToString(), input);
    }
}
{{< / highlight >}}

If you are heavily invested in unit-testing, you might find you need very little
actual interface polymorphism. To see if you really need interface polymorphism,
count how many interfaces in your codebase only have a single concrete class in
production. Each interface with a single concrete class is boilerplate that can
be replaced with a lambda!

For more examples, [check out SimpleMock!]({{< relref "simplemock-unit-test-mocking.md" >}})
