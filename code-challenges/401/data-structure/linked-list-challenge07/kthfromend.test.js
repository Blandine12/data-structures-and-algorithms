'use strict';

const LinkedList = require('./kthfromend.js');



describe('testing kthFromEnd method', () => {
  it('returns false when k is greater than the length of the list', () => {
    let myList = new LinkedList();
    myList.append(1);
    myList.append(2);
    myList.append(3);
    myList.append(4);
    expect(myList.kthFromEnd(5)).toBe(false);
  });

});


