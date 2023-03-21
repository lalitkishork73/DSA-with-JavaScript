class LinkedList {
    constructor(data) {
        this.head = {
            data: data,
            next: null,
        }
        this.tail = this.head
        this.length = 0;
    }

    add(data) {
        const newNode = {
            data: data,
            next: null,
        }
        this.tail.next = newNode
        this.tail = newNode;
        this.length++;
    }
    print() {
        let arr = []
        let Node = this.head
        while (Node !== null) {
            arr.push(Node.data);
            Node = Node.next;
        }
        return arr;
    }
}

let a = [1, 5, 6, 9, 6, 84, 3];
const node = new LinkedList(a[0]);

let i = 1;
while (i < a.length) {
    node.add(a[i]);
    i++;
}

console.log(node.print());




