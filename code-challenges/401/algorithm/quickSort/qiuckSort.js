'use strict';

function quickSort (arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let position = partition(arr, left, right);
    quickSort(arr, left, position - 1);
    quickSort(arr, position + 1, right);
  }
  return arr;
}
function partition (arr, left, right) {
  let pivot = arr[right];
  let low = left;
  for (let i = left; i <= right; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, low);
      low++;
    }
  }
  swap(arr, right, low);
  return low;
}
function swap (arr, i, low) {
  let temp;
  temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}
module.exports = quickSort;

