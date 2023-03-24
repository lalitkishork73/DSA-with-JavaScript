class LinkedList {
    constructor(data) {
        this.head = {
            data: data,
            next: null
        }
        this.tail = this.head;
        this.length = 0;
    }

    add(data) {
        let newNode = {
            data: data,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    print() {
        let arr = []
        let Node = this.head;
        while (Node !== null) {
            arr.push(Node.data);
            Node = Node.next;
        }
        return arr;
    }
}


let arr = [1, 5, 9, 7, 5, 63, 4, 2];

let Nodes = new LinkedList(arr[0]);

let i = 1;
while (i < arr.length) {
    Nodes.add(arr[i++]);
}

console.log(Nodes.print());
