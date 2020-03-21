'use strict';

//Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.


const insertShiftArray = function(array, value) {
  const newArray = [];
  let j = 0;
  if (array.length === 0) {
    newArray[0] = value;
  }
  for (let i = 0; i < array.length; i++) {
    newArray[j] = array[i];
    j++;
    if(i === Math.floor((array.length-1)/2)) {
      newArray[j] = value;
      j++;
    }
  }
  return newArray;
};


module.exports = insertShiftArray;
