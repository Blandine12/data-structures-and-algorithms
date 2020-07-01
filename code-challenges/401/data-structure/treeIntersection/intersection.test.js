
const {ifATreeFallsInTheWoods, Tree, Node} = require('./intersection.js');


describe('ifATreeFallsInTheWoods()', () => {
  it('Returns an array of values contained in both trees', () => {
    const tree1 = new Tree(new Node(150, new Node(100, new Node(75), new Node(160, new Node(125), new Node(175))), new Node(250, new Node(200), new Node(350, new Node(300), new Node(500)))));
    const tree2 = new Tree(new Node(42, new Node(100, new Node(15), new Node(160, new Node(125), new Node(175))), new Node(600, new Node(200), new Node(350, new Node(4), new Node(500)))));
    expect(ifATreeFallsInTheWoods(tree1, tree2)).toStrictEqual([100,160,125,175,200,350,500]);
  });
  it('Returns an empty array when one or both trees are null.', () => {
    expect(ifATreeFallsInTheWoods(new Tree(new Node(50)), new Tree())).toStrictEqual([]);
    expect(ifATreeFallsInTheWoods(new Tree(), new Tree())).toStrictEqual([]);
  });
});
