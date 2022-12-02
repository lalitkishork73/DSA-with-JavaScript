/* 
Find node of graph from which all nodes are reachable
Tags:	Data StructuresGraph
Given the adjacency matrix of a Directed Acyclic Graph of N vertices, create a directed acyclic graph and find a node of the graph from which all other nodes are reachable.

Display '1' if there exists at least one such node, otherwise '0'.

 

      

 

e.g. For the above graph,

Input

    5
    0 1 1 1 0
    0 0 0 0 1
    0 1 0 1 1
    0 0 0 0 1
    0 0 0 0 0

 

    where,

The first line of input is the number of vertices in a graph ( here N ).
The second to sixth line represents the adjacency matrix for the above graph.
 

Output
    1

 

Explanation

    In the above graph, there exists a node from which all other nodes are reachable. That node is '0'
    0->1, 0->2, 0->3, 0->2->4. So, the output is 1

    

    Assume that,

Indexing of vertices in the graph is from 0 to N-1.
*/