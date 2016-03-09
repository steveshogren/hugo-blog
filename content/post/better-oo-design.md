+++
title = "SOLID-ER For Better OOP"
date = "2016-03-07"
draft=true
Categories = ["technical skills", "csharp"]
+++

The SOLID patterns are not enough to design a reusable and testable code base.
Two addition can improve your codebase for fully reusable functionality.

## Terms

For this post, I will refer to _verb classes_ and _noun classes_. Unit testing
often drives the developer to separate classes into data structures (the nouns)
or behavior classes, (the verbs).

* _Noun class_ - has fields and properties filled with data, perhaps from an ORM.
  * Example: A ```SingleCustomer``` class with billing and shipping addresses, a
    name, a birthday, and a credit card.
* _Verb class_ - has functions and methods. _Verb classes_ might have fields or
  properties, but usually those will only contain other _verb classes_ that are
  needed to compose work.
  * Example: A ```ChargeCustomer``` class that creates an invoice and sends it
    to an address. Only needs a billing and shipping address.
* _Noun interface_ - an interface put on a _noun class_. Used to allow multiple
  nouns to be passed to a single verb. Most common use-case in business
  applications.
  * Example: An ```ICustomer``` interface with a billing and shipping address
    only. Can be used by ```SingleCustomer```, ```Company```, ```Government```,
    or any other entity that might like to buy something.
* _Verb interface_ - an interface put on a _verb class_. Allows polymorphic
  behavior. Relatively uncommon.
  * Example: An ```IChargeCustomer``` interface that allows different kinds of
    charging: one that generates invoices, one that charges credit cards, etc.

## SOLID-ER

Two additions to SOLID will guide your codebase to be easier to reuse and test.

* **E - Extract Noun Interfaces** - Don't pass around concrete nouns. Instead of
  interfacing _verb classes_ and injecting them into a _noun class_, put
  interfaces on _noun classes_ and pass the interface to a _verb class_. This
  inversion allows for easier reuse. Any data structure that "fits" can re-use
  that behavior.
- **R - Rely on Verb Functions Not Verb Interfaces** - (Cut me a break, there
  are not many words that start with 'Y') - Replace verb interfaces with
  function signatures, explained in the
  [SimpleMock](http://deliberate-software.com/simplemock-unit-test-mocking/)
  post. By relying on the function signature as the default unit of abstraction,
  we remove test-only interfaces. This allows the dependent code to have only
  the functions it needs, rather than everything from the interface. If you
  really need polymorphic behavior, use a _verb interface_, but only for
  polymorphic behavior, not for unit testing.

Here is an example of the "SOLID-IFY" pattern:

``` csharp
public class Notifier {
    public void Broadcast(string type, Type from, int id) { /* Broadcast code here ...*/ }
}
// E - Extract Noun Interfaces
public interface ISalesLead {
    boolean IsCustomer {get; set;}
    DateTime ConversionDate {set;}
    int Id {get;}
    Type From {get;}
}
public class User : ISalesLead {
    public int Id {get; private set;}
    public boolean IsCustomer {get;set;}
    public DateTime ConversionDate {get;set;}
    public Type From {get {return typeof(User);}}

    public User(int id, string name) { /* set fields..*/ }
}

public class SalesRepresentative {
    // R - Rely on Verb Functions Not Verb Interfaces
    internal Action<string, Type, int> broadcast = new Notifier().Broadcast;

    // E - Extract Noun Interfaces
    public void ConvertToCustomer(ISalesLead lead) {
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
it is better suited to model a domain. In our example, a ```User``` should not
know how to convert itself to a ```Customer```. A ```User``` would not know they
had to broadcast their updated status, or that the date is important to record.
It even follows a more English pattern: "the Sales Representative wants to
convert to customer a User" instead of, "User Convert To Customer".

Later, when we want to convert SalesContact, a Company, or a Government, we know
what sort of interface is required to make them into a SalesLead that can be
converted. By relying on the interface, we are able to restrict
SalesRepresentative to only have access to the data necessary to convert.

# Case Study

I recently researched a 1.3 million line codebase used to collect and track
interest rates and payments. I found only four uses of _verb interfaces_ for
polymorphic behavior. There were thousands of interfaces used for unit testing,
but few for actual polymorphism. On the other hand, there were hundreds of _noun
interfaces_ used to allow multiple shapes of data to be acted on by the same
function.

There were many examples of _noun interfaces_ being used to abstract over common
patterns. An obvious example is ```IHaveIdentity```.

``` csharp
public interface IHaveIdentity {
    Guid Id {set;}
    string Name {set;}
}
```

This tiny, simple _noun interface_ enables incredible re-use. I found the
```IHaveIdentity``` _noun interface_ on many of our _noun classes_. It is used
by dozens of _verb classes_ throughout the codebase. Verbs like
```MakeDropDownList```, ```QueryDatabase<T : IHaveIdentity>```, and
```CreateAuditTrail```. The _verb classes_ can be easily reused, because any new
_noun class_ that fits the _noun interface_ will work automatically!

# Conclusion 

The SOLID-ER patterns enable significant reuse of functionality. By defaulting
to _noun interfaces_, you will find most of your _verb classes_ can be re-used
without any change. When you need actual polymorphic behavior, use a _verb
interface_. For unit test behavior replacement, the
[SimpleMock](http://deliberate-software.com/simplemock-unit-test-mocking/)
pattern makes for an easy way to keep your codebase clean and best model the
domain.

When combining
[SimpleMock](http://deliberate-software.com/simplemock-unit-test-mocking/) with
_noun interfaces_ you will be able to get the most re-use from your codebase. The code will be easier to read, and better model the domain.
