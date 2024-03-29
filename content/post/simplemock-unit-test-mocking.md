+++
title = "SimpleMock: Language Agnostic Unit Test Mocking"
date = "2015-08-13"
dev = "yes"
Categories = ["unit testing", "csharp", "Technical Skills", "architecture"]
+++

SimpleMock is a pattern for reducing TDD damage. You can use the pattern to
organize your testing code without mocking or complicated dependency injection.

SimpleMock works in any language with closures that can be passed around by
reference, so off the top of my head: C#, Java, F#, Scala, PHP, C++, Ruby, and
Python. I'm sure you can think of others.

## Example: 

Here is a brief (if a bit silly) example of the final pattern:

``` csharp
public class LineCounter {
    internal Func<string, IEnumerable<string>> _readLines = File.ReadLines;

    public string CountLines(string filename) {
        return _readLines(filename).Count();
    }
}

/// Test Code
[TestCase]
public void TestLineCounter () {
    var sut = new LineCounter();
    // "SimpleMock" of File.ReadLines
    sut._readLines = (string x) => new List<string>{"test", "that"};

    var result = sut.CountLines("test");

    Assert.AreEqual(2, result);
}
```

## Benefits

+ Reduced boilerplate
+ Saves interfaces for real polymorphism
+ Simplifies test code
+ Reduces testing concerns in production code
+ Removes need for fragile IoC containers
+ Encourages better abstraction design
+ Can convert one class at a time!

The SimpleMock pattern promotes a better design of your abstractions and simpler
tests. The pattern also reduces boilerplate and the pollution of your production
code with testing concerns.

If you aren't familiar with the normal pattern of unit test mocking using
interfaces, dependency injection, and mock libraries, scroll down to "The
Non-SimpleMock Way" at the end of the post.

## SimpleMock Pattern

The SimpleMock pattern is aptly named. 

1. Replace Test-Only Interfaces With Functions
2. Define Dependencies Inline
3. Write Better Abstractions


## Step One: Replace Test-Only Interfaces With Functions

My examples are in C# because that is what I got paid to write today - it is
freshest in memory. C# has an incredible ability to create and pass around
lambdas and function references. Here is an example of using functions instead
of interfaces.

``` csharp
public class CurrentTime : ICurrentTime {
    public DateTime GetCurrentTime() {
        return DateTime.Now();
    }
}
public class Translator {
    private Func<DateTime> _getCurrentTime;

    public Translator() : this(new CurrentTime().GetCurrentTime) {}

    public Translator(Func<DateTime> getCurrentTime) {
        this._getCurrentTime = getCurrentTime;
    }

    public string Translate(string input) {
        return string.Format("{0}: {1}", _getCurrentTime().ToString(), input);
    }
}

/// Test Code
[TestCase]
public void TestCurrentTimeTranslator () {
    var now = DateTime.Now;

    var sut = new Translator(() => now);

    var result = sut.Translate("test");

    Assert.AreEqual(now.ToString() + ": test", result);
}

```

The test code is quite simple! No longer do we need the dependency on third
party mocking libraries, or the relatively complicated setup logic. Instead we
can simply inject the lambda at runtime, replacing that pointer. We didn't need
the whole interface, really we just needed the simple signature of the function.

## Step 2: Define Dependencies Inline

We can take it even a step further. Why use constructor injection at all? Since
all we really want is a single mutable dispatch table row, why not just make it
that way?

``` csharp
public class Translator {
    internal Func<DateTime> _getCurrentTime = new CurrentTime().GetCurrentTime;

    public string Translate(string input) {
        return string.Format("{0}: {1}", _getCurrentTime().ToString(), input);
    }
}

/// Test Code
[TestCase]
public void TestCurrentTimeTranslator () {
    var now = DateTime.Now;
    var sut = new Translator();
    sut._getCurrentTime = () => now;

    var result = sut.Translate("test");

    Assert.AreEqual(now.ToString() + ": test", result);
}
```

We've cleaned up our nasty multi-line indirection into a single dispatch line.
"Go to definition" now takes me to the actual line with the actual called
function. We've replaced a dependency on a class based interface with a function
signature. The function signature _is_ the interface!

You probably noticed we have lost something with this final version. We have
lost the ability to inject polymorphic behavior through the constructor. If you
need it, simply go back to injecting the interface in the constructor or by
passing it into the function itself. In practice, I have found this is needed
very rarely, making the SimpleMock pattern a better tool to reach for first.

## Step 3: Write Better Abstractions

Lastly, SimpleMock actually promotes better designs. For example, a coworker was
writing some tests today and ran into a complicated situation. Take the
following sanitized code:

``` csharp
public class WorkDoer {
    internal Action<Thing> ignoreElements = new ThingIgnorer().IgnoreElements;
    internal Action<Thing> removeIgnoredElements = new ThingRemover().RemoveElements;

    public void IgnoreAndRemoveThings(Thing t1, Thing t2) {
        ignoreElements(t1);
        ignoreElements(t2);
        removeIgnoredElements(t1);
        removeIgnoredElements(t2);
    }
}

```
 
How would you check that each section was called? Our naive solution was a
complicated lambda with a "timesCalled" counter and an if statement to assert
against each argument, but it turns nasty quickly:

``` csharp
/// Nasty test code
[TestCase]
public void TestWorkDoer () {
    var sut = new WorkDoer();

    var ignoredCalledTimes = 0;
    sut.ignoreElements = (t) => {
        ignoredCalledTimes++;
        if (ignoredCalledTimes == 1) {
            Assert.AreEqual(t1, t);
        } else {
            Assert.AreEqual(t2, t);
        }
    };
    var removedCalledTimes = 0;
    sut.removeIgnoredElements = (t) => {
        removedCalledTimes++;
        if (removedCalledTimes == 1) {
            Assert.AreEqual(t1, t);
        } else {
            Assert.AreEqual(t2, t);
        }
    };

    var t1 = new Thing();
    var t2 = new Thing();

    var result = sut.IgnoreAndRemoveThings(t1, t2);
    Assert.AreEqual(2, removedCalledTimes);
    Assert.AreEqual(2, ignoredCalledTimes);
}
```

Yuck! The test is an absolute catastrophe. I see a mess of mixed concerns.
Conditionals?! In a test?! Unconscionable.

In situations like this, we have two easy options. Option one is to just use
a third party mocking library, replacing the functions from inside the test
code. This gives us access to all the sophisticated mocking tools available.

My preferred option is seeking to decomplect the production code by using better
abstractions.

I have found that strong reliance of mocking libraries enables worse designs.
Consider the code, what makes it so hard to test? Not knowing which element is
called when, doing the same work on two parameters, and reference mutation all
make this a poor abstraction. Why not simplify?

``` csharp
public class WorkDoer {
    internal Func<Thing, Thing> ignoreElements = new ThingIgnorer().IgnoreElements;
    internal Func<Thing, Thing> removeIgnoredElements = new ThingRemover().RemoveElements;

    public List<Thing> IgnoreAndRemoveThings(List<Thing> ts) {
        return ts.Select(t => removeIgnoredElements(ignoreElements(t)));
    }
}

/// Simpler test
[TestCase]
public void TestWorkDoer () {
    var sut = new WorkDoer();
    var expected = new Thing();
    var ts = new List<Thing>{new Thing()};

    sut.ignoreElements = (t) => new Thing();

    sut.removeIgnoredElements = (t) => {
        Assert.AreEqual(t, sut.ignoreElements(t));
        return expected;
    };

    var result = sut.IgnoreAndRemoveThings(ts);

    Assert.AreEqual(expected, result.First())
}
```

Much better! Yes, we had to change a few signatures. We get the same work done,
but now the code is actually a lot more useful. Our test code is comparable with
anything you'd find using a mocking library. I am absolutely okay with using a
mocking library when needed, but I always carefully consider my abstractions and
design first.

If mocking libraries and IoC containers are the chainsaws of the testing world,
then SimpleMock is the garden shears. Sometimes the chainsaw is the only tool
for the job, and that is fine. But for most work around the yard, you can leave
the chainsaw in the shed.

## Conclusion

I’ve shown how you can really simplify your code with SimpleMock. The dispatch
row is clear and easy to read. We have removed some third party mocking
dependencies. You can remove a lot of the boilerplate "for making it more
testable" from your code. The test code is greatly simplified, and injection a
breeze. The result: much simpler code, just as easy to test.

Thanks to Shuwei Chen for helping me put this together!

## The Non-SimpleMock Way

If you are familiar with unit test mocking with interfaces, this part is
probably boring. Feel free to skip.

The traditional way of performing C# unit test mocking involves dependency
injection and interface mocking using a mocking library. For dependency
injection, it is common to use a tool like Ninject or hand-rolled constructor
injection. For mocking, a library like Moq or Rhino Mocks is standard. Here is
an example of a class and its testing code without any business logic.

``` csharp
public interface ICurrentTime {
    DateTime GetCurrentTime();
}

public class CurrentTime : ICurrentTime {
    public DateTime GetCurrentTime() {
        return DateTime.Now();
    }
}

public class Translator {
    private readonly ICurrentTime ct;

    public Translator() : this(new CurrentTime()) {}

    public Translator(ICurrentTime currentTime) {
        this.ct = currentTime;
    }

    public string Translate(string input) {
        return string.Format("{0}: {1}", ct.GetCurrentTime().ToString(), input);
    }
}

/// Test Code with Moq
[TestCase]
public void TestCurrentTimeTranslator () {
    var rightNow = DateTime.Now;
    var mock = new Mock<ICurrentTime>();

    mock.Setup(a=>a.GetCurrentTime()).Returns(rightNow);

    var sut = new Translator(mock.Object);

    var result = sut.Translate("test");

    Assert.AreEqual(rightNow.ToString() + ": test", result);
}

```

If you've done much C# unit testing, this should look familiar. We want to
inject some code that is potentially long-running or dynamic. We put that code
into a class, add an interface, then inject that interface into the class we
want to test. To test it, we mock the interface, creating a different concrete
class at test runtime which implements that interface. We can setup that mock to
respond with anything, which we use for assertions.

## What's Wrong with the Non-SimpleMock Way?

The first problem is we have created a whole interface just for testing.
Interfaces are for polymorphism, but we don't really need polymorphism for this
class. We simply want to mock it. The constructor injection is also test code
polluting our business logic. 

What we have done is create a very small and primitive dispatch table. The
table has one row: something that has a function with the signature of ```() -> DateTime``` or, as it is known in C#: ```Func<DateTime>```.  We will need to make
this primitive dispatch table for every single mock in every single class we
wish to test. That's a lot of boilerplate!
