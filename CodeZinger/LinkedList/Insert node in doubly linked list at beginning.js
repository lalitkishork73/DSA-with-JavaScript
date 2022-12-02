/* 
nsert node in doubly linked list at beginning
Tags:	Linked listDoubly Linked ListData Structures
Given a Doubly Linked List, insert a new node at the beginning.

 

Write a function:
        struct node * solution(struct node * H, int E)

 

that accept a pointer to the first node in linked list H of type “struct node” and the value of the node to be inserted E of type integer. The function should create a new node with value E and insert it at the beginning of the list.

 

Input
   7
   2 6 4 7 8 2 9
   10

 

    where, 

The first line represents a number of elements in the linked list.
The second line represents elements in the linked list.
The third line represents value to be inserted.
 

Output
   10 2 6 4 7 8 2 9 
    9 2 8 7 4 6 2 10 

 

The output displays all the elements in forward and reverses order both.

 

Assume that,

Structure “struct node” is already defined. 
The linked list is already created based on input provided.
Number of elements in the linked list is within the range 0 to 1000.
*/