const { Node, BinaryTree, BinarySearchTree } = require('./tree.js');


describe('Binary Search Tree class', () => {
  it('Instantiates empty tree', () => {
    const tree = new BinarySearchTree;
    expect(tree.root).toBe(null);
  });

});
