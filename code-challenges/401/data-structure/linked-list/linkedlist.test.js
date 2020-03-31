'use strict';


'use strict';

const test = require('./linkedlist');
let newTest = new test.LinkedList();

describe('testing LinkedList ', () => {
  it('doesn\'t throw error ', () => {
    expect(() => {
      new test.LinkedList();
    }).not.toThrow();
  });


});

describe('testing LInkedList insert method', () => {


  it('null', () => {
    expect(newTest.head).toBeFalsy();
  });

});

describe('testing LinkedList includes method', () => {


  it('returns false if value does not exist in list', () => {
    expect(newTest.includes(87654)).toStrictEqual(false);
  });
});

describe('testing LinkedList toString method', () => {
  it('prints values', () => {
    expect(newTest.toString()).not.toStrictEqual('{TEST 2} => {TEST} => null');
  });
});

let newNode = new test.Node('TEST Value');

describe('testing Node creation', () => {
  it('stores value ', () => {
    expect(newNode.val).toStrictEqual('TEST Value');
  });

  it('points to null', () => {
    expect(newNode.next).toBeFalsy();
  });
});
