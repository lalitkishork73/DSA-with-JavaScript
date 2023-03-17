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
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

   
  insertStart(data) {
    const newNode = {
      data: data,
      next: this.head
    };
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    this.length++;
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



let arr = [1, 2, 5, 68, 96, 3]
const newData = new LinkedList(arr[0]);
let i = 1;
while (i < arr.length) {
    newData.add(arr[i])
    console.log(i)
    i++;
}

newData.insertStart(5)
console.log(newData.print());


