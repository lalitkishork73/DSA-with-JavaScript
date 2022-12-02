/* 
Level order tree traversal
Tags:	Binary TreeData Structures
Given a binary tree, traverses a tree in a level order manner.

In level order traversal, visit the nodes level by level from left to right.

e.g. for the given tree

              5
            /   \ 
          2     3
        /   \      \
      1     0     9

 

Then level-order representation will be {5, 2, 3, 1, 0, 9}

 

The binary tree is created using structure 'struct node'.

 

Write a function: 

       void solution(struct node * R) 

 

that accept root node of binary tree R of type 'struct node'. The function should return a level-order array representation of a binary tree.

 

Input
    6
    1 0 2 9 3 5
    1 2 0 5 3 9

 

    Where, 

First line represents the size of an array N. 
Second line contains post-order array representation.
Third line contains in-order array representation.
 

Output
    5 2 3 1 0 9

 

Here the output is the level-order representation of the constructed tree.

 

Assume that, 

N is an integer within the range [0 to 10000]. 
Array elements are integers within the range [-2147483648 to 2147483647].
No duplicate key values allowed in the binary tree.
Structure “struct node” is already defined. 

*/