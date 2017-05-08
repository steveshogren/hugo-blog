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

For example: the DSL for filtering posts in the Hugo blog engine. (I otherwise
love Hugo. Whooo, go Hugo!) But time to lay out some tough love. The built-in
templating DSL is the worst. Straight Go would be fine. The docs for Go are
great and Go is easy. But unfortunately a special DSL is here to poop in your
soup.

How do I filter for the top pages that are posts and not drafts? Let's see what
_doesn't_ work:

```
{{ range first 5 (where .Site.Pages (and ("Type" "post") (not .Draft)))  }}
{{ range first 5 (where and (.Site.Pages "Type" "post") (not .Draft))  }}
{{ range first 5 (where (and (.Site.Pages "Type" "post") (not .Draft)))  }}
```

Maybe the parens mess it up?

```
{{ range first 5 (where .Site.Pages "Type" "post" and .Draft)  }}
    <and>: wrong number of args for and: want at least 1 got 0 in theme/partials/homepage.html
```

Perhaps parens again?

```
{{ range first 5 (where (and (.Site.Pages "Type" "post") .Draft))  }}
    <where>: wrong number of args for where: want at least 2 got 1 in theme/partials/homepage.html
```

Ah, so `where` is a special DSL function TOO! No simple `bool` argument for
`where`, nah, it: `Filters an array to only elements containing a matching value for a given field.` which I can only assume means the arguments are `where(list field value)`. Obviously.

Maybe I could `intersect` the results of two `where` expressions? Nope, only supports ints and floats.

Perhaps a quick search for this exact issue will help? Look, someone on the
forum has a question about this! Click the link, "You must be signed in to see
this thread". Rage face.

Google cache still has the text! Someone reported this as a bug with `where`!
Fixed Dec 2015! What build of Hugo am I using? Nov 2015!

Annnnd after upgrading Hugo, now I just an unexplained "panic: index out of range" when
building the site.

FML.
