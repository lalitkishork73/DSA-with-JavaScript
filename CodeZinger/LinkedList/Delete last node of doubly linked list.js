/* Delete last node of doubly linked list
Tags:	Linked listDoubly Linked ListData Structures
Given a Doubly Linked List, delete the last node.

 

Write a function:
        struct node * solution(struct node * H)

 

that accept a pointer to the first node in linked list H of type “struct node”. The function should delete the last node of linked list and return a pointer to the HEAD node. If a list is empty return NULL pointer.

 

Input

    7
    2 6 4 7 8 2 9

 

    where, 

The first line represents a number of elements in the linked list.
The second line represents elements in the linked list.
 

Output
    2 6 4 7 8 2 
    2 8 7 4 6 2

 

The output displays all the elements in forward and reverse order both.

 

Assume that,

Structure “struct node” is already defined. 
The linked list is already created based on input provided.
Number of elements in the linked list is within the range [ 0 to 1000 ]. */

