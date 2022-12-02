/* Breadth first search for binary tree
Tags:	Data StructuresBinary TreeSearching
Given a binary tree and a value, search the value in the given binary tree using Breadth First Search.

 

Reference: https://en.wikipedia.org/wiki/Breadth-first_search 

 

e.g. for the given tree

            1
           /  \ 
        2      3
       / \      / \
     4   5  6    7

 

Breadth-first traversal of given tree will be 1 2 3 4 5 6 7.

All nodes are visited level by level starting from the root node.

 

The binary tree is created using structure 'struct node'. 

 

Write a function: 
        int solution(struct node *R, int V)

 

that accept root node of binary tree R of type 'struct node' and a value to search V. The function should search the given value in the binary tree using breadth first search. If value found then return a number of nodes visited to reach that node, return -1 if value not found.

 

Input
    7
    4 5 2 6 7 3 1
    4 2 5 1 6 3 7
    6

 

    Where, 

First line of input represents the size of an array N. 
Second line contains post-order array representation. 
Third line contains in-order array representation.
Forth line represents value to search V.
 

Output
    5

 

Assume that, 

N is an integer within the range [1 to 10000]. 
Array elements are integers within the range [-2147483648 to 2147483647]. 
No duplicate key values allowed in the binary tree. 
Structure “struct node” is already defined.  */


