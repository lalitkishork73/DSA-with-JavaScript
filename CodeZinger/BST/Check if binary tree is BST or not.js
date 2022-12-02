/* 

Check if binary tree is BST or not
Tags:	Binary Search TreeData Structures
Given a Binary Tree. Check it is Binary search tree (BST) or not.

 

Reference: https://en.wikipedia.org/wiki/Binary_search_tree#Definition

 

The binary tree should be created using structure 'struct node'.

 

Write a function: 
        int solution(struct node *R)

 

that accept a root node of binary tree R of type “struct node”. The function should return 1 if a given binary tree is "Binary Search Tree" (BST) else 0.

 

Input
    7 
    1 3 2 5 7 6 4 
    1 2 3 4 5 6 7

    

    Where, 

First line of input represents the size of an array N. 
Second line contains post-order array representation. 
Third line contains in-order array representation.
 

Output

    1

 

Assume that, 

The number of nodes in a tree is within the range [1 to 10000].
No duplicate key values allowed in the binary tree.

*/