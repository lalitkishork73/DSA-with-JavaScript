/* class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Add a value at beginning of list
    addStart(value) {
      const node = new Node(value);
      node.next = this.head;
      this.head = node;
    }
  
    // Add a value at end of list
    addEnd(value) {
      const node = new Node(value);
      let curr = this.head;
      if (curr == null) {
        this.head = node;
        return;
      }
  
      while (curr !== null && curr.next !== null) {
        curr = curr.next;
      }
  
      curr.next = node;
    }
  }

  let arr=[1,5,9,5,3,6,9,4,7]
  let i=0;
  const list = new LinkedList();
  while(i<arr.length){
      list.addStart(arr[i++]);
  }
  
  console.log(list.head); // 2 (head of list) */

   class LinkedList {
    constructor(data) {
       this.head={
        value:data,
        next:null
       }
       this.tail=this.head;
       this.length=0;
    }
    add(data){
        const newNode ={
            value:data,
            next:null
        };
        this.tail.next=newNode;
        this.tail=newNode;
        this.length++;
    }
    printLinkedList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    Reversed(){
        let first=this.head
        this.tali=this.head
        let second=first.next

        while(second){
            let temp=second.next
            second.next=first
            first=second;
            second=temp;
           }
           this.head.next=null;
           this.head=first
    }
}

   
   let arr=[1,5,9,5,3,6,9,4,7]
   const myList= new LinkedList(arr[0]) 
   let i=1;
   while(i<arr.length){
       myList.add(arr[i++]);
   }

   console.log(myList.printLinkedList());
   myList.Reversed()
   console.log(myList.printLinkedList());

   

