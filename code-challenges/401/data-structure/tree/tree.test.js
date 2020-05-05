const { Node, BinaryTree, BinarySearchTree } = require('./tree.js');
// const tree = new BinaryTree(new Node('A', new Node('B', new Node('D'), new Node('E')), new Node('C', new Node('F'), new Node('G'))) )

describe('Binary Search Tree class', () => {
  it('Instantiates empty tree', () => {
    const tree = new BinarySearchTree;
    expect(tree.root).toBe(null);
  });

});
