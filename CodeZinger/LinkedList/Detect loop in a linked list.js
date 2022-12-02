/* 
Detect loop in a linked list
Tags:	Data StructuresLinked list
Given a Singly Linked List, detect a loop in a linked list. 

 

A loop in a linked list means there is no tail node in a linked list and every node of link list is pointing to some other node of linked list. 

 

Write function: 
        int solution(struct node *H) 

 

that accept a pointer to the first node in linked list H of type “struct node”. The function should return 1 if a loop is detected else 0. 

 

Input 
    6 
    10 20 30 40 50 60 
    2 
     

    where, 

First line represents a number of elements in the linked list. 
Second line represents elements in the linked list. 
Third line represents an index of the node which is pointed by the last node. If an index is -1 then no loop in linked list. 
 

Output 

    1 
 
Here the last node (60) is pointing to 2nd index node (30) and hence there exists a loop.
 

Assume that, 

Structure “struct node” is already defined. 
The linked list is already created based on input provided. 
Size (N) of the linked list within the range [0 to 100000]. 
Index of the node which is pointed by the last node will be in a range [-1 to N-1].
*/