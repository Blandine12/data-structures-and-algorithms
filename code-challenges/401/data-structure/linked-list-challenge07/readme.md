# code challenge 06

## DSA: k-th value from the end of a linked list.

### Author: Blandine Dasilveira

### Links and Resources


### Challenge
- Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.


- [submission PR](https://github.com/Blandine12/data-structures-and-algorithms/pull/26)


### Approach & Efficiency
- Created two classes: Node and LinkedList
- Created methods to insert, include, and tostring.
- Big-O:

- .append(value): o(n)
- .insertBefore(value, newVal): O(n)
- .insertAfter(value, newVal): O(n)

### Test
- npm test linked-list-challenge07 