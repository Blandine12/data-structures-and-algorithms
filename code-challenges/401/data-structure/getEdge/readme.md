
# Lab 32

## DSA: .

### Author: Blandine Dasilveira

### getEdge

- Write a function that returns true if the nodes in the input array are lineary linked




### Challenge

- Write a function based on the specifications above, which takes in a graph, and an array of city names. Without utilizing any of the built-in methods available to your language, return whether the full trip is possible with direct flights, and how much it would cost.




## Approach & Efficiency

- For this method i instantiated an array to be be [true, 0] by default as as soon as a subsequent node is not adjacent to the current node I want to break out of any logic and return something else. I the start a for loop to iterate through the input array. Inside the loop I grab all of the current nodes neighbors. I add the next edges weight to the output's second element.I then check to see if the next node is a neighbor of the current node. If it isnt I set the output equal to [false, 0] otherwise I continue through the loop. If the loop goes all the way through without meeting the condition of the inner condition we return the aggregated output.





- [submission PR](https://github.com/Blandine12/data-structures-and-algorithms/pull/45)




### Test
- npm test getEdge