+++
title = "DSL's Are Infuriating"
date = "2016-04-26"
banner="/images/altar_of_sunlight.gif"
Categories = ["hugo", "dsl",  "Technical Skills"]
draft=true
+++

DSL's are the worst. Every one is a special snowflake made of steel, delicately
floating from the heavens, just waiting to get caught under your eyelid.

The problem with a DSL is that it always starts so simple: "can we just do this
one edge case real quick?" Over time, it grows into a whole (inner platform)[https://en.wikipedia.org/wiki/Inner-platform_effect]

```
{{ range first 5 (where .Site.Pages (and ("Type" "post") (not .Draft)))  }}
```

```
{{ range first 5 (where and (.Site.Pages "Type" "post") (not .Draft))  }}
```

```
{{ range first 5 (where (and (.Site.Pages "Type" "post") (not .Draft)))  }}
```

Is it `Params.dar`


```
        {{ range first 5 (where .Site.Pages "Type" "post" and .Draft)  }}
```

```
           <and>: wrong number of args for and: want at least 1 got 0 in theme/partials/homepage.html
```

```
        {{ range first 5 (where (and (.Site.Pages "Type" "post") .Draft))  }}
```

```
<where>: wrong number of args for where: want at least 2 got 1 in theme/partials/homepage.html
```

Ah, so `where` is a special DSL function TOO! No simple `bool` argument for
`where`, nah, it: `Filters an array to only elements containing a matching value
for a given field.` which I can only assume means the arguments are `list field value`.

Maybe `intersect`? ONLY SUPPORTS INTS AND FLOATS

