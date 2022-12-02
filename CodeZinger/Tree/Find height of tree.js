/* 
Find height of tree
Tags:	Data StructuresBinary Tree
Given a binary tree, find the height of given tree.

 

The height of a binary tree is the length of the path from the root to the deepest node in the tree. The binary tree with only one node has a depth value zero.

 

e.g. for this binary tree
                 2
                /  \ 
              4    5 
             /  \ 
           1    3
                /
              9

 

Here height of the tree is 3.

 

The binary tree is created using structure 'struct node'. 

 

Write a function: 
       int solution(struct node * R) 

 

that accept root node of binary tree R of type 'struct node'. The function should return the height of a tree.

 

Input
    6
    1 9 3 4 5 2
    1 4 9 3 2 5

 

    Where, 

First line of input represents the size of an array N. 
Second line contains post-order array representation. 
Third line contains in-order array representation.
 

Output
    3

 

Assume that, 

N is an integer within the range [0 to 10000]. 
Array elements are integers within the range [-2147483648 to 2147483647]. 
No duplicate key values allowed in the binary tree. 
Structure “struct node” is already defined. 

*/