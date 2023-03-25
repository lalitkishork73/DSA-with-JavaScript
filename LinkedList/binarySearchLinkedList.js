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

    getNodeAtIndex(index) {
        let currentNode = this.head;
        let currentIndex = 0;
        while (currentNode && currentIndex < index) {
            currentNode = this.head;
            currentIndex++;
        }
        return currentNode;
    }

    BinarySearch(data) {
        let left = 0;
        let right = this.length - 1;
        while (left <= right) {
            let mid = left + (right - left) / 2;
            console.log(mid)
            let currentNode = this.getNodeAtIndex(mid);
            if (currentNode === data) {
                return true;
            }
            else if (currentNode > data) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }
        return false;
    }
}

let Nod = new LinkedList()

let data = [1, 3, 4, 5, 6, 8, 9,10,12,15,13], i = 0;

while (i < data.length) {
    Nod.push(data[i++]);
}

console.log(Nod.BinarySearch(4))

// Nod.getData();

