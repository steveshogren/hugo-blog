+++
title = "Papers We Love: The Byzantine Generals Problem"
date = "2017-08-11"
banner=""
Categories = ["technical skills", "whitepapers"]
Description = ""
draft=true
+++

*In this series I practice reading whitepapers by following a modified set of
steps outlined in the guide: [How to read and understand a scientific paper: a guide for non-scientists](https://violentmetaphors.com/2013/08/25/how-to-read-and-understand-a-scientific-paper-2/)*

[The Byzantine Generals Problem pdf](http://www.andrew.cmu.edu/course/15-749/READINGS/required/resilience/lamport82.pdf)

* **Begin by reading the introduction, not the abstract.**

    The introduction explains the broad problem of how to create a network of
    components where any number of nodes in the network may be sending
    conflicting and false information to the other nodes.

* **Identify the BIG QUESTION.**

    The BIG QUESTION is: how to create a network of nodes that decides on a
    common plan of action when some nodes are sending false information.
    
    The BIG QUESTION is posed abstractly as many generals deciding on a plan
    when some generals are traitors sending false information and all generals
    can only communicate via messages to each other.
    
* **Identify the SPECIFIC QUESTION(S)**

    The SPECIFIC QUESTION is more simple: ensure a single "general node" is able
    to send an order for all loyal "lieutenant nodes" to follow, and all lieutenant
    nodes follow the order if the general is loyal.
    
    These two conditions are called the _interactive consistency_ conditions.
    
    Solving this SPECIFIC QUESTION will unlock the solution to the more
    complicated scenario with multiple nodes all communicating.

* **Determine Outline**
    1. Abstract
    1. Introduction
    1. Problem definition with forgeable (unsigned) messages
    1. Inductive proof with forgeable (unsigned) messages requiring 3m+1 loyal
       nodes where *m* is the traitor node count
    1. Inductive proof with unforgeable (signed) messages requiring only m+2
       loyal nodes where *m* is the traitor node count
    1. Incomplete graph proof proof with forgeable (unsigned) messages requiring
       at least 3m+1 loyal generals where *m* is the count of traitors and each
       node on the graph has 3m connections.
       (aka [3m-regular](https://en.wikipedia.org/wiki/Regular_graph)).
       Therefore a 3m+1 network must be completely connected.
    1. Incomplete graph proof with unforgeable (signed) messages requiring at
       least m+d-1 loyal generals where *m* is the count of traitors and *d* is
       the graph
       [diameter](https://en.wikipedia.org/wiki/Distance_(graph_theory))
       (longest shortest distance between two nodes)

* **Explain any diagrams/charts**

    Fig 1 and Fig 2 illustrate how it is impossible for three nodes to come
    to consensus with unsigned messages when one node is a traitor.


* **Explain the recommended solution/algorithm/theory/proofs**
    

* **Read the conclusion/discussion/interpretation section.**

* **Now, go back to the beginning and read the abstract.**

* **FINAL STEP: (Don’t neglect doing this) What do other researchers say about this paper?**


