class Stack {
    constructor() {
        this.items = []
    }

    push(item) {
        this.items.push(item)
    }
    pop() {
        if (this.items.length == 0) {
            return null
        }
        return this.items.pop()
    }

    peek() {
        if (this.items.length == 0) return null
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length == 0
    }

    size() {
        return this.items.length
    }

}

let stack = new Stack()
let arr = [5, 6, 9, 3, 2, 5, 1, 2, 3]
console.log(stack.isEmpty())
for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i])
}

console.log(stack.size())