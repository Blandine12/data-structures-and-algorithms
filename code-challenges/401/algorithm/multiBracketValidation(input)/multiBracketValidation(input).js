'use strict';
/* Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:

Round Brackets : ()
Square Brackets : []
Curly Brackets : {} */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(val) {
    let newNode = new Node(val);
    newNode.next = this.top;

    this.top = newNode;
  }

  pop() {
    if (!this.top) return null;

    let tempNode = this.top;

    this.top = tempNode.next;

    tempNode.next = null;

    return tempNode.val;
  }


}

const validator = (str) => {
  let chars = str.split('');
  let bracketStack = new Stack();

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === '{' || chars[i] === '[' || chars[i] === '(') {
      bracketStack.push(chars[i]);
    } else if (chars[i] === '}' || chars[i] === ']' || chars[i] === ')') {
      let poppedVal = bracketStack.pop();

      if (chars[i] === '}' && poppedVal != '{'){
        return false;
      }
      if (chars[i] === ']' && poppedVal != '['){
        return false;
      }
      if (chars[i] === ')' && poppedVal != '(') {
        return false;
      }
    }
  }

  if (bracketStack.top) return false;

  return true;
};

module.exports = validator;
