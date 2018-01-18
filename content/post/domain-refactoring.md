+++
title = "Domain Refactoring"
date = "2018-01-12"
Categories = ["technical skills"]
draft=true
+++

Found these four enums totaling 720 possible combinations.

How many are business valid? 12.

How do we start to introduce this?

Make the new enum, and make the to->from converters with an exception for
invalid business states.

Start to remove the 4 enums from the domain model.

The database can still have the 4 columns, because the domain model cannot HAVE
invalid states.
