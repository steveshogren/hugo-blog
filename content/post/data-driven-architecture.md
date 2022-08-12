+++
title = "Data-Driven Rules"
date = "2022-08-12"
Categories = ["technical skills","architecture"]
draft = true
+++

Should business rules be written out in code, or generated automatically from
data? 

For example, consider a workflow system. In the rules-based design, a programmer
might write a line of code like this:


``` js
let nextStage = {
    [Stage.AddRecords]: [Stage.EditRecords, Stage.RemoveRecords, Stage.FinishEntry],
    [Stage.EditRecords]: [Stage.RemoveRecords, Stage.FinishEntry],
    [Stage.RemoveRecords]: [Stage.EditRecords, Stage.FinishEntry],
    [Stage.FinishEntry]: [],
}
```



Pros:
- Extremely cheap to modify rules
- Modifiable by non-technical analysts

Cons:
- Often much worse performance (Jira, etc)
- Extremely difficult to program
- Extremely difficult to test
- Highly inflexible

In some ways, yo
