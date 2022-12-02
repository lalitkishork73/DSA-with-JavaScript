/* 
Shortest Path in Directed Acyclic Graph
Tags:	Data StructuresGraph
Given the adjacency matrix of a weighted Directed Acyclic Graph of N vertices, a source vertex S and destination vertex D, create a Directed Acyclic Graph and find the shortest distance from S to D in the given graph.


 

e.g. For the above graph,

Input

    5

    0 3 1 4 0
    0 0 0 0 5
    0 3 0 1 3
    0 0 0 0 1
    0 0 0 0 0 
    4

 

    where,    

The first line of input is the number of vertices in a graph ( here N ).
The second to sixth line represents the adjacency matrix for the above graph.
The eighth line represents the destination vertex D.
 

Output
    3

 

Explanation

    In the above graph shortest distance from vertex 0 to 4 is 3.
    Path:  0 -> 2 -> 3 -> 4  

    

    Assume that,

Indexing of vertices in the graph is from 0 to N-1.
Source and destination vertices are in the range [ 0 to N-1 ].
Source value is always 0.
 
*/