+++
title = "Papers We Love: The Byzantine Generals Problem"
date = "2017-08-11"
banner=""
Categories = ["technical skills", "whitepapers"]
Description = ""
draft=true
+++

*In this series I practice reading computer science papers by following a modified set of
steps outlined in the guide:
[How to read and understand a scientific paper: a guide for non-scientists](https://violentmetaphors.com/2013/08/25/how-to-read-and-understand-a-scientific-paper-2/).
If your reaction to this post is 'eh, just read the paper', then this post isn't
for you ;)*

### The Paper:
[The Byzantine Generals Problem pdf](http://www.andrew.cmu.edu/course/15-749/READINGS/required/resilience/lamport82.pdf)

### My Breakdown:
* **Begin by reading the introduction, not the abstract.**

    The broad problem of how to create a network of components where some nodes
    in the network may be sending conflicting and false information to the other
    nodes. We desire a solution where the "loyal" nodes perform the correct
    action.

* **Identify the BIG QUESTION.**

    The BIG QUESTION is: **how to create a network of nodes that decides on a
    common plan of action when some nodes are sending false information.**
    
    The big question is posed abstractly as: how can many generals decide on a
    plan when some generals are traitors sending false information and all
    generals can only communicate via messages to each other.
    
* **Identify the SPECIFIC QUESTION(S)**

    The SPECIFIC QUESTIONS are more simple: 
    - **IC1: Ensure a single "general node" is able to send an order for all
    loyal "lieutenant nodes" to follow**
    - **IC2: All loyal lieutenant nodes follow the order if the general is loyal**
    
    These two conditions are called the _interactive consistency_ conditions.
    
    Solving this specific question will unlock the solution to the more
    complicated scenario with multiple nodes all communicating with each other.

* **Determine Outline**
    1. Abstract
    1. Introduction
    1. Problem definition with forgeable (unsigned) messages
    1. Proof with forgeable (unsigned) messages
    1. Proof with unforgeable (signed) messages
    1. Proof for an incomplete graph with forgeable (unsigned) messages
    1. Proof for an incomplete graph with unforgeable (signed) messages
    1. The application of the previous proofs to build reliable systems that
       calculate solutions across multiple processors
    1. Conclusion

* **Identify the approach**

    The approach is a set of logical, inductive proofs.

* **Explain any diagrams/charts**

    <img src="/images/generalsfig1fig2.png"></img>

    Fig 1 and Fig 2 illustrate how it is impossible for one commander and two
    lieutenants to come to consensus with unsigned messages when one of the
    three is a traitor. 
    

    <img src="/images/generalsfig3fig4.png"></img>

    Fig 3 and Fig 4 show the oral (unsigned) communication paths of one
    commander and three lieutenants, represented by OM(1). Fig 3 shows the paths
    of a traitorous lieutenant, and how the other lieutenants can simply do
    whatever the majority of inputs recommend. Fig 4 shows the traitorous
    commander, and how all three lieutenants need to fall back to their default
    behavior, as there is no clear winning majority.

    <img src="/images/generalsfig5.png"></img>

    Fig 5 illustrates passing signed messages with one commander and two
    lieutenants, represented by SM(1). Each message gets appended to the end, so
    a traitorous commander is revealed by sending different messages to each
    lieutenant.

    <img src="/images/generalsfig6fig7.png"></img>
    
    Fig 7 is not 3-regular because the central node has more than 3 connecting
    paths.

* **Explain the recommended solution/algorithm/theory/proofs**
    * The original problem, stated as two interactivity conditions:
      - **IC1: All loyal lieutenants obey the same order**
      - **IC2: All lieutenant nodes follow the order if the general is loyal**

    * They refer the reader to a previous proof that 3 nodes cannot be solved.
      They claim a proof by contradiction that therefore no solution exists for
      fewer than 3m+1 nodes.
    
    * Inductive proof with forgeable (unsigned) messages - requires 3m+1 nodes
      where *m* is the traitor node count. 
          * Assumptions:
            - A1. Every message is sent correctly
            - A2. The receiver of a message knows who sent it
            - A3. The absence of a message can be detected
      
          * [Lemma](https://en.wikipedia.org/wiki/Lemma_(mathematics)) 1:
            - OM(m) satisfies IC2 for greater than 2k+m nodes with k traitors
            - Proof: ```2k + m > n```

          * [Proof](https://en.wikipedia.org/wiki/Mathematical_proof) 1:
            - OM(m) satisfies IC1 and IC2 for greater than 3m nodes with m traitors
            - Proof: ```3m + 1```

    *  Inductive proof with unforgeable (signed) messages - requires only m+2
       generals where *m* is the traitor general count
          * Assumptions:
            - A4(a). No message can be forged by another node
            - A4(b). Any node can verify the signature chain

    *  Proof for an incomplete graph with forgeable (unsigned) messages -
       requires at least 3m+1 generals where *m* is the count of traitors and
       each node on the graph has 3m connections. (aka
       [3m-regular](https://en.wikipedia.org/wiki/Regular_graph)). Therefore a
       3m+1 network must be completely connected.
    *  Proof for an incomplete graph with unforgeable (signed) messages -
       requires at least m+d-1 generals where *m* is the count of traitors and
       *d* is the
       [graph diameter](https://en.wikipedia.org/wiki/Distance_(graph_theory))
       (longest shortest distance between two generals)

* **Read the conclusion/discussion/interpretation section.**

* **Now, go back to the beginning and read the abstract.**

* **FINAL STEP: (Don’t neglect doing this) What do other researchers say about this paper?**

* **My Notes**

Blockchain technologies appear to be based off the research in this paper. They
operate with signed messages being semi-unforgeable because of the difficulty to
recreate the history, so it is a combination of the signed and unsigned.
Messages _are_ forgeable, but it is computationally expensive to do so.

