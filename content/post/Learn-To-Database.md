+++
title = "Learn To Database"
Categories = ["Meta Game"]
Tags = []
date = "2014-04-16"
+++

<p>
  "... and it has to return 45,000 records a minute, or we are all
  screwed."
</p> <p> Monday morning, we inherited a legacy codebase. Tuesday, the
  word came down on stone tablets. Forty-five thousand records a
  minute, and no amount of political maneuvering or incremental gains
  were going to do. Too many broken promises. The last team mass quit
  over three months, leaving us the two most junior
  developers. Someone high up promised big, and the buck stopped with
  us.
</p> <p> "Does anyone even know the throughput now?"
</p> <p> We still don't even have the dumb thing running on our
  machines. Two weeks later we have it running and enough data to test
  it. 2500 records a minute. When scaled to 45000 records it is still
  going 30 minutes later, so it doesn't even scale linearly. We are
  screwed.
</p> <p> Most of us are front-end developers who stepped forward when
  everyone else stepped back. Databases are a distant memory,
  something we maybe did a few jobs back. You "join" tables, right?
  What we know of this process is it selects from 2-3 dozen databases
  using an ORM while running through an engine that does some
  supposedly massive calculations on the data, returning a message with
  several hundred fields. It can't be that hard to speed up.
</p> <p> "We need a new architecture, with read-optimized databases
  and queue-based messaging."
</p> <p> None of us have ever built such a system, but we have read
  about it, and like the faithful we nod solemnly in agreement. Why
  not? If the database is read-optimized, surely it will perform like
  we need. But a few desist.
</p> <p> Like paratroopers dropped into unknown territory without a
  map, we start to canvas the code, looking for landmarks. We split
  into two teams, one to try to speed up the current system, the other
  to start on the new architecture. Two teams trying two different
  approaches doubles our chances, right? Whiteboards around our desks
  fill with maps, glossaries, and diagrams. My team starts to dissect
  this mostly home-made ORM.
</p> <p> "Why is this selecting from the same table twice?"
</p> <p> The ORM generated query selects a list of id's from table A,
  then puts those id's into a list as a filter for the same table:
</p> <p>
  SELECT * FROM A WHERE ID IN (SELECT ID FROM A WHERE ...)
</p> <p> We scratch our heads a bit, but hey, that can't hurt
  anything, surely the database figures that sort of stuff out? Isn't
  that what... indexes do? Our most database-savvy developer can't
  stop coming back to that query. He says it doesn't smell
  right. Finally, he takes out the "WHERE IN" filter, shims in the
  query, and runs the process.
</p> <p>
  "Guys, the whole thing, all 45k came back in 40 seconds."
</p> <p> We scoff at him, good joke! Our profiling showed time chewed
  up fairly evenly at every level throughout the entire
  process, not just the initial query. So the process came back,
  just empty, right? And who knows what Ancient Ones you disturbed by
  messing around with what the ORM generates, it will probably never
  work again. We run it again, 40 seconds, correct count of
  records. Odd, freak coincidence. We run it with the old filter still
  in place, it comes back 30+ minutes later, same exact data. Whoa,
  wait, what?
</p> <p> Turns out, this ORM uses SELECT-WHERE-IN for every entity
  join. That first SELECT FROM A WHERE ID IN (SELECT ID FROM A WHERE
  ...) was used as the base criteria for every single lazy look-up of
  every entity on A, which were legion. What looked like slowness
  across the entire process was really ORM lazy loading at every
  level, with that first SELECT-WHERE-IN as the final filter in a line
  of nested SELECTS, some four levels deep. That initial bad query
  gets run countless times, and when it is slow, the whole system is
  slow.
</p> <p> This is the story of how I learned an important lesson: if
  you are going to database, LEARN TO DATABASE.
</p>
