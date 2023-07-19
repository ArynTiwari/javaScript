class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  //add at last
  append(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  //add in front
  add(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }
  //delete
  deleteAtEnd() {
    if (this.isEmpty()) {
      console.log("LL is Empty");
    }
    let curr = this.head;
    while (curr.next != null) {
      curr = curr.next;
    }
    
  }
  print() {
    if (this.isEmpty()) {
      console.log("The list is empty");
    } else {
      let curr = this.head;
      let listVal = "";
      while (curr) {
        listVal += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listVal);
    }
  }
}

const ll = new LinkedList();
console.log(ll.isEmpty());
// ll.add(10);
// ll.add(20);
// ll.add(30);
ll.append(10);
ll.append(20);
ll.append(30);
ll.delete(30);
ll.print();
