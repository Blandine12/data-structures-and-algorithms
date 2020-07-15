

# Lab 30

## DSA: .

### Author: Blandine Dasilveira

### graph

A graph is collection of nodes that may or may not be linked together by edges that may go one or both ways.


### Challenge

-  Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

AddNode() Adds a new node to the graph Takes in the value of that node Returns the added node AddEdge() Adds a new edge between two nodes in the graph Include the ability to have a “weight” Takes in the two nodes to be connected by the edge Both nodes should already be in the Graph GetNodes() Returns all of the nodes in the graph as a collection (set, list, or similar) GetNeighbors() Returns a collection of edges connected to the given node Takes in a given node Include the weight of the connection in the returned collection Size() Returns the total number of nodes in the graph


## Approach & Efficiency

- For this challenge i decided to use a serries of maps to hold the nodes which are basically just values and have their value point to another map that contains the nodes connected to that particular node and the weight of that edge. Using hashmaps allow for very quick lookups (O(n)) which alow us to add edges to nodes without iterating through through any kind of list.


## API

- addNode() takes in a value as an input, checks to see if the node already exists


- [submission PR](https://github.com/Blandine12/data-structures-and-algorithms/pull/42)




### Test
- npm test graph





