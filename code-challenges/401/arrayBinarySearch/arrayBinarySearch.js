'use strict';

//Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

const binarySearch = (array, value) => {
  let i = Math.floor((array.length - 1) / 2)
  let j = 1
  while(true) {
    if (array[i] > value) {
      i = Math.floor(i / (2 ** j));
      j++;
    } else if (array[i] < value) {
      i = Math.ceil(i + 1 / (2 ** j));
      j++;
    } else if (array[i] === value) {
      return i;
    } else {
      return -1;
    }
  } 
}