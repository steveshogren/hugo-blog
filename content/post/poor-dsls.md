+++
title = "DSLs Are Terrible"
date = "2018-08-02"
banner="/images/altar_of_sunlight.gif"
Categories = ["hugo", "dsl",  "Technical Skills", "silly"]
+++

**Trigger warning:** this is a silly rant I wrote a few years ago after raging at
the Hugo blog engine for a couple hours. I think its funny and still relevant,
so hyperbolic nonsense incoming!

DSL's (Domain Specific Languages) are often terrible. Each DSL is a special
snowflake, delicately floating from the heavens straight into in your eye.

The problem with a DSL is that it always starts so simple. You take a complex
problem and represent it simply with some nice pretty syntax. Everything is
great until: "can we just do this one edge case real quick?" Over time, it grows
into a whole
[inner platform](https://en.wikipedia.org/wiki/Inner-platform_effect) often
re-creating the whole outer platform it was intended to simplify. The DSL
becomes a buggy version of the outer system, but often it has less clear
semantics and documentation. Because many DSL's are designed to be "not a
programming language", eventually they become far worse: a programming language
written in psuedo-English. And we all know how regular and clear English is!

### Any Examples? You betcha

For example: the DSL for filtering posts in the Hugo blog engine. (I otherwise
love Hugo. Whooo, go Hugo!) But time to lay out some tough love. The built-in
templating DSL is the worst. Straight Go would be fine. The docs for Go are
great, and Go is so magically easy. But unfortunately a special DSL is here to
poop in your soup.

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

> ERROR: <and>: wrong number of args for and: want at least 1 got 0 in theme/partials/homepage.html
```

Perhaps parens again?

```
{{ range first 5 (where (and (.Site.Pages "Type" "post") .Draft))  }}

> ERROR: <where>: wrong number of args for where: want at least 2 got 1 in theme/partials/homepage.html
```

Ah, so `where` is a special DSL function TOO! No simple `bool` argument for
`where`, nah, it: `Filters an array to only elements containing a matching value for a given field.` which I can only assume means the arguments are `where(list field value)`. Obviously.

Maybe I could `intersect` the results of two `where` expressions? Nope, only supports ints and floats.

Perhaps a quick search for this exact issue will help? Look, someone on the
forum has a question about this! Click the link, "You must be signed in to see
this thread".

<img src="/images/upset.jpg"></img>

Google cache still has the text! Someone reported this as a bug with `where`!
Fixed Dec 2015! What build of Hugo am I using? Nov 2015!

Annnnd after upgrading Hugo, now I just an unexplained `panic: index out of range` when
building the site.

<img src="/images/angry.jpg"></img>

FML. I'll just put in the URL's by hand, like a savage.

