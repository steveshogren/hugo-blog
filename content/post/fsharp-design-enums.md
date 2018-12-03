+++
title = "F# Domain Design: Interdependent Enums and Booleans"
date = "2018-12-02"
Categories = ["Technical Skills", "fsharp", "csharp"]
Description = ""
+++

F# provides a clear way to simplify invalid states with discriminated unions.

Interdependent enums and booleans are a symptom of a design that could be
simplified. Many domain records and classes contain enums and booleans that
change in a "single transaction". These are interdependent and often allow many
states that are not valid for the business.

Often they are designed this way because of the database. Consider a model I
found last week that is stored in the database:

``` fsharp
type CalculationType = 
    ISDASecurity
    | ISDAUnsecured
    | RepoNet
    | RepoStandard

type LockupCalculationType = 
    LockupOnlyCalculation
    | NettedAgainstVariation
    | NotNettedAgainstVariation
    | NotValidForCalculation

type MarginTermType = 
    Agreement
    | Principal
    | Internal
    | Counterparty

type Details = {
    CalculationType:CalculationType;
    LockupCalculationType:LockupCalculationType;
    MarginTermType:MarginTermType;
}
```

While the domain is foreign, surely the pattern is not: several enums together
on a record.

At first glance, there are 4^3 (or 64) combinations of those enums. In practice,
there are far fewer valid business combinations. Designing records based on
database rows makes it hard to see how the data is actually being used.

Discriminated unions offers two ways to store such a record:

## 1. Small Number of Valid States

If the data has only a few valid states, just store it as one single flattened
type. For example, here is an example how the records are actually used in
practice:

``` fsharp
type CalculationType = 
    ISDASecurity_NotNettedAgainstVariation
    | ISDASecurity_NettedAgainstVariation
    | ISDASecurity_NotValidForCalculation

    | ISDAUnsecured
    | ISDAUnsecured_LockupOnlyCalculation

    | RepoNet_Principal
    | RepoNet_Counterparty
    | RepoNet_Agreement
    | RepoNet_Internal

    | RepoStandard_Principal
    | RepoStandard_Counterparty
    | RepoStandard_Agreement
    | RepoStandard_Internal
```

Most of the enums aren't even used, and can be grouped into a combination type.
These can be "expanded" to get out any of the needed data.

``` fsharp
let BuildCalculator = function 
    | ISDASecurity_NotNettedAgainstVariation
    | ISDASecurity_NettedAgainstVariation
    | ISDASecurity_NotValidForCalculation
    | ISDAUnsecured
    | ISDAUnsecured_LockupOnlyCalculation -> LockupCalculator()
    | RepoNet_Principal
    | RepoStandard_Principal -> RepoPrinCalculator()
    | RepoNet_Counterparty
    | RepoStandard_Counterparty -> RepoCptyCalculator()
    | RepoNet_Agreement
    | RepoStandard_Agreement -> RepoAgreementCalculator()
    | RepoNet_Internal
    | RepoStandard_Internal -> RepoInternalCalculator()

let IsLockup = function 
    | ISDASecurity_NotNettedAgainstVariation
    | ISDASecurity_NettedAgainstVariation
    | ISDASecurity_NotValidForCalculation
    | ISDAUnsecured
    | ISDAUnsecured_LockupOnlyCalculation -> true
    | RepoNet_Principal
    | RepoStandard_Principal
    | RepoNet_Counterparty
    | RepoStandard_Counterparty
    | RepoNet_Agreement
    | RepoStandard_Agreement
    | RepoNet_Internal
    | RepoStandard_Internal -> false
```

This storage type doesn't grow well, so is better for types that aren't likely
to change or grow much.

## 2. Large Number of Valid States

Perhaps the previous example had actually provided 20+ valid states. As soon as
we would go to add a 3rd type, that number could expand dramatically.

This is where discriminated unions can allow better nesting:

``` fsharp
type LockupCalculationType = 
    NettedAgainstVariation
    | NotNettedAgainstVariation
    | NotValidForCalculation

type MarginTermType = 
    Agreement
    | Principal
    | Internal
    | Counterparty

type CalculationType = 
    ISDASecurity of LockupCalculationType
    | ISDAUnsecured of boolean
    | RepoNet of MarginTermType
    | RepoStandard of MarginTermType

```

This view of the data is a little more complicated, but makes it easier to
expand when new types or combinations arise.

In both cases, F# presents ways to store your data so that invalid states are
not possible!
