/* 
Check binary tree is subtree of another tree
Tags:	Binary TreeData Structures
Given two binary trees, check if the second tree is subtree of the other one.

 

e.g for the given trees,

 

             2               
          /     \                 
        4        5                4     
       /  \      /  \             /    \   
     1    3   6   8         1      3 

            (A)                  (B)

 

Here, B is a subtree of A. 

 

The binary tree is created using structure 'struct node'. 

 

Write a function: 
    int solution(struct node * R1, struct node * R2) 

 

that accept root node of binary trees R1 and R2 of type 'struct node'. The function should return 1 if R1 is a subtree of R2 or vice-versa else 0.

 

Input
    7
    1 3 4 6 8 5 2
    1 4 3 2 6 5 8
    3
    1 3 4
    1 4 3    

 

    Where, 

1st & 4th lines represent the size of arrays. 
2nd & 5th lines contain post-order array representations. 
3rd & 6th lines contain in-order array representations.
 

Output
    1

 

Here R2 is a subtree of R1. 

 

Assume that,

The number nodes in both the binary are in the range [0 to 10000].
Both binary trees are already created.
*/

