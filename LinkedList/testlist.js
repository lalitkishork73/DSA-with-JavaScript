class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }

    print() {

        let node = this.head
        while (node !== null) {
            console.log(node.data)
            node = node.next
        }
    }
}


let arr = [1, 5, 6, 9, 3, 4, 5, 6, 2, 6, 9, 6];


const list = new LinkedList();
let i = 0;
while (i < arr.length) {
    list.push(arr[i++]);
}


list.print();

