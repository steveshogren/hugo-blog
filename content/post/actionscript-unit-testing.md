+++
title = "Actionscript Unit Testing"
date = "2011-05-04"
Categories = ["Technical Skills", "unit testing"]
+++
I am trying to test a project that is huge and many of the
&quot;classes&quot; are only defined as linkages from the main monster
fla. I followed <a href="http://marstonstudio.com/2007/07/28/asunit-testing-with-flash-cs3-and-actionscript-3/" target="_blank">ASUnit Tutorial</a> and got it to work with their simple examples. But when I went to test a factory and child class I had just written (hey, I would have tdd&#039;d, but then I would not have know if it was failing for the right reason), it would not compile, hanging up on some of those undefined &quot;exported linkage&quot; classes. I could not find anything about that online, I assume because developers who would want to write unit tests wouldn&#039;t rely on those exported linkage classes anyway.<p /> After waiting for a day or two and moving on, I asked the guy who maintains this project. His knee-jerk solution? Call the new AsUnitTestRunner() right in the first line of the constructor for the main fla&#039;s class. I was skeptical at best, but it worked! My guess is those exported linkages are imported into the project scope through some sort of implicit import on the constructor of the class tied to the .fla with the linkages. Sheesh.<p /> Obviously, we want to start defining those exported linkage classes as actual code, so we can run our tests without un-commenting the new AsUnitTestRunner() and then building the project, but it is a start in the right direction.
