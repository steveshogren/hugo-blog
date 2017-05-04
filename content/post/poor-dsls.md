+++
title = "DSLs Are Terrible"
date = "2017-04-26"
banner="/images/altar_of_sunlight.gif"
Categories = ["hugo", "dsl",  "Technical Skills"]
draft=true
+++

DSL's (Domain Specific Languages) are often terrible. Each DSL is a special
snowflake, delicately floating from the heavens straight into in your eye. Only
then you realize the snowflake is actually a metal throwing star.

The problem with a DSL is that it always starts so simple: "can we just do this
one edge case real quick?" Over time, it grows into a whole [inner
platform](https://en.wikipedia.org/wiki/Inner-platform_effect) often re-creating
the outer platform it was intended to simplify. The DSL becomes a buggy version
of the underlying system, but often it has less clear semantics and
documentation.

### Any Examples?

For example: the DSL for filtering posts in the Hugo blog engine (don't take my
critism the wrong way, I otherwise love Hugo. Whooo, go Hugo!). But time for
some tough love. The built in templating DSL is the worst. Straight Go would be
fine. The docs for Go are great and Go is easy. But no, a special DSL is here to
poop in your soup.

So how do I filter for the top pages that are posts and not drafts? Let's see:

```
{{ range first 5 (where .Site.Pages (and ("Type" "post") (not .Draft)))  }}
```

Nope.

```
{{ range first 5 (where and (.Site.Pages "Type" "post") (not .Draft))  }}
```
Arg.

```
{{ range first 5 (where (and (.Site.Pages "Type" "post") (not .Draft)))  }}
```

Double checks the docs doesn't have it...

```
{{ range first 5 (where .Site.Pages "Type" "post" and .Draft)  }}
    <and>: wrong number of args for and: want at least 1 got 0 in theme/partials/homepage.html
```

Wat. The `and` function only takes 1 argument?!

```
{{ range first 5 (where (and (.Site.Pages "Type" "post") .Draft))  }}
    <where>: wrong number of args for where: want at least 2 got 1 in theme/partials/homepage.html
```

Ah, so `where` is a special DSL function TOO! No simple `bool` argument for
`where`, nah, it: `Filters an array to only elements containing a matching value for a given field.` which I can only assume means the arguments are `where(list field value)`. Obviously.

Maybe I could `intersect` the results of two `where` expressions? Nope, only supports ints and floats.

Whatever, I'll just see all the drafts locally. You win this round DSL. *This* round.

