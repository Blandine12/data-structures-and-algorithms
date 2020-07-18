

# Lab 31

## DSA: .

### Author: Blandine Dasilveira

### breadth-first-graph

- Write a function that performs a breadth-first traversal of a graph given an input node and returns the nodes in the order that they are traversed




### Challenge

-  Extend your graph object with a breadth-first traversal method that accepts a starting node. Without utilizing any of the built-in methods available to your language, return a collection of nodes in the order they were visited. Display the collection.




## Approach & Efficiency

- For this method i created an array for the queue of nodes and a set to contain the nodes that have been visited as it is O(1) time to look up a node. I immediately set current to be the input node and push it to the queue. I used a while loop to run while the queue is populated. inside the loop we dequeue the next node and add it to the visited set and check to see if the current node has any adjacent nodes. If there are we need to use a for...of loop to iterate through the keys of the adjacency map to check to see if they have been visited and add them to the queue if not. I then return the visited list which will be in order that the nodes were traversed. The big O for time complexity is O(n(n-1)) as you have to visit every node once and also check all its adjacent nodes to know if it has been visited save for the input node. The space comlexity is O(n) because the queued and visited nodes will both equate to the whole graph as you only push to the queue if a node has not been visited and every node must be visited.



- [submission PR](https://github.com/Blandine12/data-structures-and-algorithms/pull/43)




### Test
- npm test breadth-first-graph