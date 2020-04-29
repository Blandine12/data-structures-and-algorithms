'use strict';

/*Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.*/


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(newVal) {

    let currentNode = this.head;

    // what if list is empty
    if (!currentNode) {
      this.head = new Node(newVal);
      return;
    }

    // while (null.next)
    while (currentNode.next) {
      // not null
      currentNode = currentNode.next;
    }

    let newNode = new Node(newVal);
    // currentNode is the end of the list
    currentNode.next = newNode;
  }

  kthFromEnd(k) {
    if(k < 0) return false;

    let currentNode = this.head;
    let arr = [];

    while(currentNode) {
      arr.push(currentNode.val);
      currentNode = currentNode.next;
    }

    if(k >= arr.length) return false;

    return arr[arr.length - 1 - k];
  }
}





module.exports = LinkedList;
