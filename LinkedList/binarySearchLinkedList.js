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
        const node = new Node(data)
        if (!this.head) {
            this.head = node
            this.tail = node
        }
        else {
            this.tail.next = node
            this.tail = node
        }
        this.length++;
    }

    getData() {
        let newNode = this.head;
        while (newNode !== null) {
            console.log(newNode.data)
            newNode = newNode.next;
        }
    }
}

let Nod = new LinkedList()

let data = [1, 5, 8, 9, 6, 3, 4, 8, 5, 6], i = 0;

while (i < data.length) {
    Nod.push(data[i++]);
}


Nod.getData();

