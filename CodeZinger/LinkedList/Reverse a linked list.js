/* 
Reverse a linked list
Tags:	Data StructuresLinked list
Given a Singly Linked List, reverse the linked list. 
 

Write a function: 
        struct node* solution(struct node * H) 

 

that accept a pointer to the first node in linked list H of type “struct node”. The function should reverse the given linked list and return a pointer to the first element in linked list. 

 

Input 
    5 
    10 20 30 40 50 

 

    where, 

First line represents a number of elements in the linked list. 
Second line represents elements in the linked list. 
 

Output 
    50 40 30 20 10 

 

Assume that, 

Structure “struct node” is already defined.
Size of the linked list is between 0 and 32,767.
*/

class LinkedList {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    add(data) {
        const newNode = {
            value: data,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
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
    reverse() {
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first
    }

}

function solution(a, data) {
    //Write your solution here
    let i = 1;
    if (a == 0) {
        return "no element present";
    }
    const myList = new LinkedList(data[0])
    while (i < a) {
        myList.add(data[i++]);
    }
    myList.reverse();
    return myList.print().join(' ');

}


function main() {
    var a = parseInt(readLine());
    var b = readLine().split(" ").map(Number);

    let res = solution(a, b);
    console.log(res)

}
