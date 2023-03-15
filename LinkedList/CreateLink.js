class LinkedList {
    constructor(data) {
        this.head = {
            data: data,
            next: null
        }
        this.tail = this.head
        this.length = 0
    }

    add(data) {
        const newNode = {
            data: data,
            next: null
        }
        this.tail.next = newNode
        this.length++
    }

    print() {
        const array = []
        let currentNode = this.head
        while (currentNode !== null) {
            array.push(currentNode.data)
            currentNode = currentNode.next;
        }
        return array;
    }

}


const newData = new LinkedList(2);

let arr = [1, 2, 5, 68, 96, 3]

let i = 0;
while (i < arr.length - 1) {
    newData.add(arr[i])
    i++;
}

console.log(newData.print());


