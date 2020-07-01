# Lab 27

## DSA: .

### Author: Blandine Dasilveira

### repeated word


### Challenge
-  Find common values in 2 binary trees.

### Approch

- What i started with is a depth 1st traversal for both trees as we will need to read every single value in both trees to compare. I employed a hashmap to add the values to and compare as keys to ensure that each value was unique. Traversing the second tree adds keys to a new hashmap if the value doesnt exist in the first hashmap. I then returned the array spread of the maps keys.

- The time complexity is O(n) as we traverse through both tress but comparing and adding values to hashmaps is O(1) which can be dsregarded. The space complexity is at worst O(n/2) because the first hashmap could contain all of the 1st tree and not match with any values in the 2nd tree.


- [submission PR](https://github.com/Blandine12/data-structures-and-algorithms/pull/40)




### Test
- npm test treeIntersection