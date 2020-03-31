'use strict';

// class Node


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constuctor () {
    this.head = null;
  }

  insert(val) {
    let newNode = new Node(val);

    newNode.next = this.head;

    this.head = newNode;
  }

  includes(val) {
    let currentNode = this.head;

    while(currentNode) {
      if (currentNode.val === val) return true;
      currentNode = currentNode.next;
    }
    return false;

  }

  toString() {
    let currentNode = this.head;
    let str = '';

    while(currentNode) {
      str += `{${currentNode.val}} => `;
      currentNode = currentNode.next;
    }

    str += 'null';
    console.log(str);
    return str;
  }
}



module.exports = { LinkedList, Node };

