const { Graph } = require('../getEdge/getEdge');

describe('hasLink()', () => {
  it('Returns true if input nodes are linearly linked.', () => {
    const graph = new Graph();
    const nodeA = graph.addNode('a');
    const nodeB = graph.addNode('b');
    const nodeC = graph.addNode('c');
    const nodeD = graph.addNode('d');
    const nodeE = graph.addNode('e');
    const nodeF = graph.addNode('f');
    graph.addEdge(nodeA, nodeB, 1);
    graph.addEdge(nodeB, nodeC, 2);
    graph.addEdge(nodeB, nodeD, 3);
    graph.addEdge(nodeC, nodeE, 4);
    graph.addEdge(nodeC, nodeF, 5);
    graph.addEdge(nodeD, nodeF, 6);
    expect(graph.hasLink([nodeA, nodeB, nodeC])).toStrictEqual([true, 3]);
  });
  it('Returns false if input nodes are not linked.', () => {
    const graph = new Graph();
    const nodeA = graph.addNode('a');
    const nodeB = graph.addNode('b');
    const nodeC = graph.addNode('c');
    const nodeD = graph.addNode('d');
    const nodeE = graph.addNode('e');
    const nodeF = graph.addNode('f');
    graph.addEdge(nodeA, nodeB, 1);
    graph.addEdge(nodeB, nodeC, 2);
    graph.addEdge(nodeB, nodeD, 3);
    graph.addEdge(nodeC, nodeE, 4);
    graph.addEdge(nodeC, nodeF, 5);
    graph.addEdge(nodeD, nodeF, 6);
    expect(graph.hasLink([nodeA, nodeD])).toStrictEqual([false, 0]);
  });
});
