+++
title = "OO-Design Part 1: Increased Reuse in Object-Oriented Programs"
date = "2016-10-31"
Categories = ["technical skills", "csharp", "java",  "oop"]
+++

Next in the series: [OO-Design Part 2: Anemic Domain Models Are Healthy](/anemic-domain-model/)

The SOLID patterns are not enough to design a reusable and testable code base.
Two concrete additions can significantly improve your codebase, while
maintaining the SOLID principals.

The suggestions here do not run counter to traditional SOLID designs, they
enhance them. SOLID is a fine place to start, but it lacks a critical half of
good design: polymorphic data. We've found polymorphic data is far more common
than polymorphic behavior, so programs designed without that concept often are
far larger than they need to be.

> Appropriate application of these concepts will reduce code and allow for easier unit testing

## Terms

For this post, let's distinguish between _verb classes_ and _noun classes_. Unit
testing often drives us to separate classes into data structures (the nouns) or
behavior classes, (the verbs).

* **Noun class** - has fields and properties filled with data, perhaps from an ORM.
  * Example: A ```Contact``` class with a name, billing and shipping addresses,
    a birthday, and a credit card.
* **Verb class** - has functions and methods. Verb classes might have fields or
  properties, but usually those only contain other verb classes that are
  needed to compose work.
  * Example: A ```CustomerBiller``` class that creates an invoice and sends it
    to an address. Only needs a billing and shipping address and an amount.
* **Noun interface** - an interface put on a noun class. Used to allow multiple
  nouns to be passed to a single verb. A very common use-case in business
  applications.
  * Example: ```ICustomer``` interface with a billing and shipping address
    only. Can be used by ```Contact```, ```Company```, ```Government```,
    or any other entity that might like to buy something.
  * Allows a verb to operate on many types of data
* **Verb interface** - an interface put on a verb class. Allows polymorphic
  behavior. Less common than noun interfaces.
  * Example: ```IChargeCustomer``` interface that allows different kinds of
    charging: one that generates invoices, one that charges credit cards, etc.
  * Allows several types of verbs to be grouped together

## Two Suggestions

Two suggestions will guide your codebase to be easier to reuse and test.

* **Extract Noun Interfaces** - Work to determine any missing noun interfaces.
  This inversion allows for easier reuse. Any data structure that "fits" can
  re-use that behavior. 
- **Rely on Verb Functions Not Verb Interfaces** - Replace Dependency
  Injected verb interfaces with function signatures, explained in the
  [SimpleMock](/simplemock-unit-test-mocking/)
  guide. By relying on the function signature as the default unit of
  abstraction, we remove test-only interfaces. This allows the dependent code to
  have only the functions it needs, rather than everything from the interface.
  When you really need polymorphic behavior, use a verb interface. Only use
  verb interfaces for polymorphic behavior, not for unit test mocking.

Here is an example of the patterns in C#, but it also works in Java:

``` csharp
// Verb Class
public class Notifier {
    public void Broadcast(string type, Type from, int id) { /* Broadcast code here ...*/ }
}

// Noun Interface
public interface SalesLead {
    boolean IsCustomer {get; set;}
    DateTime ConversionDate {set;}
    int Id {get;}
    Type From {get;}
}

public class User : SalesLead { /* User code here ... */ }
public class Company : SalesLead { /* Contact code here ... */ }
public class Government : SalesLead { /* Government code here ... */ }

// Verb Class
public class SalesRepresentative {
    // Rely on Verb Functions Not Verb Interfaces
    internal Action<string, Type, int> broadcast = new Notifier().Broadcast;

    // Extract Noun Interfaces
    public void ConvertToCustomer(SalesLead lead) {
      if(lead.IsCustomer) {
          return;
      }
      lead.IsCustomer = true;
      lead.ConversionDate = DateTime.Now;
      broadcast("CustomerConverted", lead.From, lead.Id);
    }
}
```

While this inversion of nouns and verbs seems counter to traditional OOP advice,
it is actually a very object-oriented design. Noun Interfaces allow for
polymorphic nouns. Polymorphic nouns allow are better suited to model a domain.

In our example, a ```User``` should not know how to convert itself to a
```Customer```. A ```User``` would not know they had to broadcast their updated
status, or that the date is important to record. To prove it models the domain
more effectively, notice how it even follows a more English pattern: "tell the
Sales Representative to convert this User". This is much closer than the
typical: "User convert yourself To Customer".

Later, when we want to convert an Employee, a Company, or a Government, we know
what sort of interface is required to make them into a SalesLead that can be
converted. By relying on the interface, we are able to restrict
SalesRepresentative to only have access to the data necessary to convert.

# Case Study

We recently examined a 1.3 million line codebase used to collect and track
interest rates and payments from a user. We found only four uses of verb
interfaces for polymorphic behavior. On the other hand, there were hundreds of
noun interfaces used to allow multiple shapes of data to be acted on by the
same function.

An obvious example is ```IHaveIdentity```

``` csharp
public interface IHaveIdentity {
    Guid Id {get;}
    string Name {get;}
}
```

This tiny, simple noun interface enables incredible re-use. We found the
```IHaveIdentity``` noun interface on many of our noun classes. It is used by
hundreds of verb classes throughout the codebase. Verbs like
```MakeDropDownList```, ```QueryById```, ```QueryNamesMatching```, and
```CreateAuditTrail```. Those verb classes were easily reused, because any new
noun class that fits the noun interface works automatically! If we had tried to
put interfaces on those verbs, we'd have a lot of classes with no behavior other
than just delegating to another class.

# Conclusion 

These patterns enable significant reuse of functionality. By defaulting to noun
interfaces, you will find most of your verb classes can be re-used without any
change. When you need actual polymorphic behavior, use a verb interface. For the
more common case of unit test behavior replacement, the
[SimpleMock](/simplemock-unit-test-mocking/) pattern makes for an easy way to
keep your codebase clean and best model the domain.

Next in the series: [OO-Design Part 2: Anemic Domain Models Are Healthy](/anemic-domain-model/)
