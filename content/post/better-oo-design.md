+++
title = "Better OO Design"
date = "2015-12-28"

Categories = ["technical skills"]
+++

The SOLID patterns are not enough to design a reusable and testable code base. A
few minor additions are required to allow for fully reusable functionality that
is easy to test.

For this post, I will refer to "verb" classes and "noun" classes. Unit testing
often drives the developer to separate classes into data structures (the nouns)
or behavior classes, (the verbs). A "noun" class has fields and properties
filled with data, perhaps from an ORM. A "verb" class has functions and methods.
"Verb" classes might have fields or properties, but usually those will only
contain other verb classes that are needed to compose its work.

The following code sample shows a class found in the wild (but sanitized). The
verb dependencies are injected as interfaces. This is known as **constructor
injection**.

<pre><code>
public interface INotifier {
    void Broadcast(string type, Type from, int id);
}
public class Notifier : INotifier {
    public void Broadcast(string type, Type from, int id) { /* Code here ...*/ }
}

// Expected API
// new User(1, "steve").ConvertToCustomer();
public class User {
    private int id;
    private boolean isCustomer;
    private DateTime conversionDate = null;
    private INotifier notifier;

    // INotifier interface only has one concrete implementor
    // and is hard-coded inside the class, which is
    // still a tight coupling, and the interface is only used for testing
    public User(int id, string name) : this(id, name, new Notifier()) {}

    public User(int id, string name, INotifier n) {
        this.name = name;
        this.id = id;
        this.isCustomer = false;
        this.notifier = n;
    }

    public void ConvertToCustomer() {
        this.isCustomer = true;
        this.conversionDate = DateTime.Now;
        this.notifier.Broadcast("CustomerConverted", typeof(User), this.Id);
    }
}

</code></pre>

The logic for "converting to a customer" is built in to User. What happens when
we want to convert some other object to a customer? How about a SalesLead? Or a
FormerCustomer? We've also allowed testing code to pollute our production code:
the INotifier interface is only used to allow a unit test to inject a mock.

Three minor additions to SOLID will guide your codebase to be easier to reuse
and easier to test.

* **Depend on Functions Over Interfaces** - Replace "verb" interfaces with
  function signatures, exampled in the
  [SimpleMock](http://deliberate-software.com/simplemock-unit-test-mocking/)
  pattern. By relying on the function signature, we remove test-only interfaces
  and allow the code to have only the functions it needs, rather than everything
  from the interface.
* **Interface Nouns, Not Verbs** - Instead of interfacing "verb" functions and
  injecting them into a "noun" class, put interfaces on "nouns" and pass that to
  "verbs". The inversion allows complete reuse of all "verb" functions. Any data
  structure that "fits" can re-use that behavior.
* **Verbs Operate On Interfaces** - Verbs are not given concrete data
  structures, they are given interfaces.

Here is the same class, broken up for unit testing following the "Better Unit
Testing Design"

<pre><code>
public class Notifier {
    public void Broadcast(string type, Type from, int id) { /* Code here ...*/ }
}
public interface ISalesLead {
    string IsCustomer {set;}
    DateTime ConversionDate {set;}
    int Id {get;}
    Type From {get;}
}
public class User : ISalesLead {
    public int Id {get; private set;}
    public boolean IsCustomer {get;set;}
    public DateTime ConversionDate {get;set;}
    public Type From {get {return typeof(User);}}

    public User(int id, string name, boolean isCustomer, DateTime conversionDate) {
        this._name = name;
        this.Id = id;
        this.IsCustomer = isCustomer;
        this.ConversionDate = conversionDate;
    }
}

// Expected API
// new SalesRepresentive().ConvertToCustomer(new User(1, "steve"));
public class SalesRepresentative {
    internal Action&lt;string, int&gt; broadcast = new Notifier().Broadcast;

    public void ConvertToCustomer(ISalesLead c) {
        c.IsCustomer = true;
        c.ConversionDate = DateTime.Now;
        broadcast("CustomerConverted", c.From, c.Id);
    }
}
</code></pre>

While this inversion of nouns and verbs seems counter to traditional OOP advice,
it is better suited to model the domain. In our example, a ```User``` should not
know how to convert itself to a ```Customer```. A ```User``` would not know they
had to broadcast their updated status, or that the date is important to record.
It even follows a more English pattern: "the Sales Representative wants to
convert to customer a User" instead of, "User Convert To Customer".

### Counter Argument 1 - But This Breaks Encapsulation

While we have opened up some few properties of a User to be set, that is the
price to have full re-use. The best thing, is we've only exposed the setters
needed to meet the interface.
