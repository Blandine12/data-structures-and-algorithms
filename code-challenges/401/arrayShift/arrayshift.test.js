'use strict';



const insertShiftArray = require('../arrayshift/arrayshift.js');


describe('Testing insertShiftArray function', () => {
  it('it should return new array  with the input value in the middle', () => {
    expect(insertShiftArray([2,4,6,8],5)).toEqual([2,4,5,6,8]);
    expect(insertShiftArray([4,8,15,23,42], 16)).toEqual([4,8,15,16,23,42]);
    expect(insertShiftArray([], 16)).toEqual([16]);
  });
});
