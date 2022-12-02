/* 
Delete last node of singly linked list
Tags:	Data StructuresLinked list
Given a Singly Linked List, write a function to delete a last node of the linked list.

 

Write a function:

        struct node * solution(struct node *head)

 

that accept a pointer to the head node of linked list. The function should delete the last node of linked list and return a pointer to the head node of the linked list. If a list becomes empty, return NULL pointer.

 

Input

    7
    2 6 4 7 8 2 9

 

    where

First line represents a number of elements in the linked list.
Second line represents elements in the linked list.
 

Output

    2 6 4 7 8 2

 

The output display updated linked list after removal of the last node.

 

Assume that,

Structure “struct node” is already defined.
Singly Linked List already created.
*/

class LinkedList {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head;
        this.length = 0;

    }
    add(data) {
        const newNode = {
            value: data,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    print() {
        const arr = [];
        let currNode = this.head;
        while (currNode !== null) {
            arr.push(currNode.value);
            currNode = currNode.next;
        }
        return arr
    }
    RemoveLast() {
        let last = this.head;
        while (last.next.next !== null) {
            last = last.next;
        }
        last.next = null
    }
}

function solution(a, data) {
    //Write your solution here
    if (a == 0 || a == 1) {
        return "no element present"
    }
    let myList = new LinkedList(data[0])
    let i = 1;
    while (i < data.length) {
        myList.add(data[i++])
    }
    myList.RemoveLast();
    return myList.print().join(' ');

}


function main() {
    var a = parseInt(readLine());
    var b = readLine().split(' ').map(Number);

    var res = solution(a, b);
    console.log(res);
}
