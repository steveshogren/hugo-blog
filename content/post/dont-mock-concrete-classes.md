+++
title = "Dont Mock Concrete Classes"
Categories = ["Technical Skills", "Unit Testing"]
Tags = []
date = "2011-05-24"
+++
<p>(They have thin skin)</p>
<p>I have been
reading <a href="http://www.amazon.com/Growing-Object-Oriented-Software-Guided-Tests/dp/0321503627/ref=sr_1_1?ie=UTF8&amp;s=books&amp;qid=1303935530&amp;sr=8-1"
target="_blank">G.O.O.S.</a> and honestly, much of it has been just a
reiteration. Until chapter 20, that is. I get to the section Don't
Mock Concrete Classes, and it clicks.
</p>
<p>
 Mocking concrete classes used to be my bread and butter. Almost every
 unit test I wrote for the last year had several mocked concrete
 implementations, to pass in as dependencies of the system under test.
</p>
<p>
What do I mean by that? Imagine a class that takes one dependency
through the constructor like this:
</p>
``` php
class Velocity {
  public function __construct (PayoffCalc $PayoffCalc) {
    $this->_PayoffCalc = $PayoffCalc;
  }
  public function toFloat() {
    $paymentPerDay = $this->_PayoffCalc->getPaymentPerDay();
    return $this->_calculate($paymentPerDay);
  }
}
```
<p>
Would have a test driving it, looking like this:
</p>
``` php
public function test_velocity_validDailyPayment() {
  $paymentPerDay = 3;
  $expectedVelocity = 1392;
  //Mock PayoffCalc->getPaymentPerDay() to return 3
  $PayoffCalc = $this->getMock('PayoffCalc', array('getPaymentPerDay')); 
  $PayoffCalc->expects($this->once())
             ->method('getPaymentPerDay')
             ->will($this->returnValue($paymentPerDay));
  $Velocity = new Velocity($PayoffCalc);
  $this->assertEquals($expectedVelocity, $Velocity->toFloat());
}
```
</p>
<p>
For several months now, writing unit tests this way has become
increasingly irritating to me, for several reasons. First off, notice
how phpunit does a mock? With a string for the classname and the
method to mock. Obviously, in small scale this duplication is
manageable, but imagine for a second thousands of unit tests all
mocking this way, and you will realize it gets out of hand fast. More
than once in the last year I have set out to refactor a classname or
method signature, to have dozens of failing unit tests, because they
all mock the <em>string</em> of the old name.
</p>
<p>
 Secondly, and more importantly, I find this to be brittle because you
 are locking yourself into an implementation of the class you need
 mocked. What if I wanted to move that getPaymentPerDay to a different
 class? Or I changed that version of getPaymentPerDay to
 getPaymentPerMonth? I would have to traipse through every one of
 those brittle mocks and rewrite their duplicated, crystalline
 structure.
</p>
<p>
 Stupid.
</p>
<p>
My inner frustration was so great as to cause me to start thinking up
all sorts of mad ways to get around this issue. Store the code needed
to build that mock as text on the class itself, to be parsed and
executed on the fly? Check. Create massive hierarchical testing
libraries to build the mocks? Check. And all these did was mask the
real issue. <strong>I was mocking the concrete
implementation.</strong>
</p>
<p>
 So, what would mocking the interface be? Well, PayoffCalc actually
 has two public methods: getPayoffDate() and getPaymentPerDay(). The
 Velocity class only needs getPaymentPerDay(), but by mocking the
 concrete class, we are forcing it to depend on
 the <strong>whole</strong> (undefined) interface of PayoffCalc.
 Velocity does not need getPayoffDate(), but it is in the interface we
 give it (in the form of the concrete PayoffCalc).
</p>
<p>
 Whoa. Sounds
 like <a href="http://en.wikipedia.org/wiki/Interface_segregation_principle"
 target="_blank">ISP</a>. Written about by Bob Martin. Fifteen years
 ago. *Forehead smack*
</p>
<p>
I make an interface for this concept of PaymentPerDayRetriever, for
lack of a
better <a href="http://martinfowler.com/bliki/RoleInterface.html"
target="_blank">Role</a>.
</p>
``` php
interface PaymentPerDayRetriever {
  public function getPaymentPerDay();
}
```
<p>
Then use the interface in the test:
</p>
``` php
public function test_velocity_validDailyPayment() {
    $paymentPerDay = 3;
    $expectedVelocity = 1392;
    //Mock PayoffCalc->getPaymentPerDay() to return 3
    $PayoffCalc = $this->getMock('PaymentPerDayRetriever');
    $PayoffCalc->expects($this->any())
        ->method('getPaymentPerDay')
        ->will($this->returnValue($paymentPerDay));
       $Velocity = new Velocity($PayoffCalc);
    $this->assertEquals($expectedVelocity, $Velocity->toFloat());
}
```
<p>
By mocking the interface, I have freed my Velocity class from knowing
about the rest of the old PayoffCalc interface, and when I realize
later that my PayoffCalc really is doing two totally separate things,
I can just move the PaymentPerDayRetriever interface to
getPaymentPerDay's new home (probably on the PaymentRepository, not
shown here).
</p>
<p>
 While this example only used one method per interface, in reality, it
 would have all the methods necessary to complete that aspect of the
 class.
</p>
<p>
Fascinating.
</p>
