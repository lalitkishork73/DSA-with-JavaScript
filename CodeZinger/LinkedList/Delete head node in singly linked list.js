/* 
Delete head node in singly linked list
Tags:	Linked listData Structures
Given a Singly Linked List, delete the head node of linked list.

 

Write a function:
        struct node * solution(struct node *head)

 

that accept a pointer to the head node of linked list. The function should delete the head node of linked list and return a pointer to the new head node of the linked list. If a list becomes empty, return NULL pointer.

 

Input
    7
    2 6 4 7 8 2 9

 

    where,

The first line represents a number of elements in the linked list.
The second line represents elements in the linked list.
 

Output
    6 4 7 8 2 9

 

The output display updated linked list after removal of the first node. 

 

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
        return arr;
    }
    dFirst() {
        let first = this.head;
        this.head = first.next;
    }
}

function solution(a, data) {
    //Write your solution here
    let i = 1;
    if (a == 0 || a == 1) {
        return "no element present"
    }
    let myList = new LinkedList(data[0])
    while (i < data.length) {
        myList.add(data[i++]);
    }
    myList.dFirst();
    return myList.print().join(' ');

}


function main() {
    var a = parseInt(readLine());
    var b = readLine().split(' ').map(Number);


    var res = solution(a, b);
    console.log(res);
}