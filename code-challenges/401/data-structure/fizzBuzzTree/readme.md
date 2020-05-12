# code challenge 16

## DSA: FizzbuzzTree

### Author: Blandine Dasilveira

### Links and Resources


### Challenge
Write a function called FizzBuzzTree which takes a tree as an argument.
Without utilizing any of the built-in methods available to your language, determine whether or not the value of each node is divisible by 3, 5 or both. Create a new tree with the same structure as the original, but the values modified as follows:
If the value is divisible by 3, replace the value with “Fizz”
If the value is divisible by 5, replace the value with “Buzz”
If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
If the value is not divisible by 3 or 5, simply turn the number into a String.
Return the new tree.


- [submission PR]()


### Approach & Efficiency

I decided to approach this problem by traversing depth first in the style of an inOrder method as I will need to hit every node once to read its value. I created a new node in the traversal to make the coding easier. I created a separate function to perform the comparison which is called at the beginning of the traversal.

### Test
- npm test fizzBuzzTree