const { Graph } = require('./depthFirst.js');
const { Node } = require('../graph/graph');

describe('depthFirst()', () => {
  it('Returns a collection of nodes in the order of a depth-first traversal.', () => {
    const graph = new Graph();
    const nodeA = graph.addNode('A');
    const nodeB = graph.addNode('B');
    const nodeC = graph.addNode('C');
    const nodeD = graph.addNode('D');
    const nodeE = graph.addNode('E');
    const nodeF = graph.addNode('F');
    const nodeG = graph.addNode('G');
    const nodeH = graph.addNode('H');
    graph.addEdge(nodeA, nodeB, 1);
    graph.addEdge(nodeA, nodeD, 2);
    graph.addEdge(nodeB, nodeC, 2);
    graph.addEdge(nodeC, nodeG, 3);
    graph.addEdge(nodeD, nodeE, 6);
    graph.addEdge(nodeD, nodeF, 5);
    graph.addEdge(nodeD, nodeH, 5);
    graph.addEdge(nodeF, nodeH, 5);
    expect(graph.depthFirst(nodeA)).toStrictEqual(new Set([nodeA, nodeB, nodeC, nodeG, nodeD, nodeE, nodeF, nodeH]));
  });
  it('Returns the input node when there are no neighbors', () => {
    const graph = new Graph();
    const nodeA = graph.addNode('A');
    expect(graph.depthFirst(nodeA)).toStrictEqual(new Set([nodeA]));
  });
  it('Returns null if input node doesnt exist in the graph', () => {
    const graph = new Graph();
    graph.addNode('A');
    expect(graph.depthFirst(new Node('B'))).toBe(null);
  });
});
