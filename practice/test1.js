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
        this.tail.next = newNode;;
        this.tail = newNode;
        this.length++;
    }

    print() {
        let arr = [];
        let pointer = this.head;
        while (pointer != null) {
            arr.push(pointer.value);
            pointer = pointer.next;
        }
        return arr;
    }
}


const list = new LinkedList(100);

list.add(52)
list.add(12)
list.add(62)

console.log(list.print());
