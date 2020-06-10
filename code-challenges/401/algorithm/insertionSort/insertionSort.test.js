'use strict';

const insertionSort = require('./insertionSort.js');

describe('Testing insertionSort function', () => {

  test('sort an array given in reverse order', () => {
    const sorted = insertionSort([21, 16, 10, 7, 4, -1]);
    expect(sorted).toEqual([-1, 4, 7, 10, 16, 21]);
  });

 
  test('sort an array given few uniques', () => {
    const sorted = insertionSort([5, 10, 6, 5, 5, 6]);
    expect(sorted).toEqual([5, 5, 5, 6, 6, 10]);
  });

  
});
