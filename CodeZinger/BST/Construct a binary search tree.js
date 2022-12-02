/* 
Construct a binary search tree
Tags:	Binary Search TreeData Structures
Given an array of integers, construct a Binary search tree considering the first element in the array as a root element.

Reference: en.wikipedia.org/wiki/Binary_search_tree#Definition

 

The binary search tree should be created using structure 'struct node'.

 

Write a function: 
        struct node* solution(int A[], int N)

 

that accept an array of integers A and size of an array N. The function should create a binary search tree and return a pointer to the root node of binary search tree. 

 

Input
    7
    10 6 13 4 8 12 15

 

    Where, 

The first line represents a size of an array.
The second line represents array elements.
 

Output

    4 6 8 10 12 13 15 

 

The output displays the in-order of binary search tree.

 

Assume that, 

N is an integer within the range [1 to 10000].
No duplicate key values allowed in the binary tree.

*/