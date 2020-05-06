# lab 15

## DSA: Trees

### Author: Blandine Dasilveira




### Challenge
- Create three classes, Node, BinaryTree and BinarySearchTree.

- Node

  - val - The value stored in the Node
  - left - A pointer the left child Node in the tree
  - right - A pointer to the right child Node in the tree

- BinaryTree

  - root - The Node that represents the root of the tree

  - preOrder - A function that traverses the tree using preOrder depth-first traversal, and returns an array containing all the values in the traversed order

  - inOrder - A function that traverses the tree using inOrder depth-first traversal, and returns an array containing all the values in the traversed order
  - postOrder - A function that traverses the tree using postOrder depth-first traversal, and returns an array containing all the values in the traversed order

- Binary Search Tree - This class may extend or inherit from the BinaryTree class.

  - root - The Node that represents the root of the tree

  - add - A function that takes in a value as a parameter, and then adds a new Node with that value in the correct locations of the binary search tree

  - contains - A function that takes in a value as a parameter, and returns true if that value is in the tree, and false if not


- [submission PR](https://github.com/Blandine12/data-structures-and-algorithms/pull/31)


### Approach & Efficiency

- preOrder() : O(n) inOrder() : O(n) postOrder() : O(n)

- add() : O(log(n)) contains() : O(n)


  - preOrder() : A function that traverses the tree using preOrder depth-first traversal, and returns an array containing all the values in the traversed order

  - inOrder() : A function that traverses the tree using inOrder depth-first traversal, and returns an array containing all the values in the traversed order

  - postOrder() : A function that traverses the tree using postOrder depth-first traversal, and returns an array containing all the values in the traversed order

  - add(val) : A function that takes in a value as a parameter, and then adds a new Node with that value in the correct locations of the binary search tree

  - contains(val) : A function that takes in a value as a parameter, and returns true if that value is in the tree, and false if not


### Test
- npm test tree

