'use strict';

/*Write a function called mergeLists which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keep additional space down to O(1). You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges*/


const LinkedList = require('../linked-list-challenge06/linkedlist.js');



const mergeLists = (list1, list2) => {

  let mergedList = new LinkedList();
  let l1_tracker = list1;
  let l2_tracker = list2;


  while (l1_tracker || l2_tracker) {

    if (l1_tracker) {
      mergedList.append(l1_tracker.val);
      l1_tracker = l1_tracker.next;
    }

    if (l2_tracker) {
      mergedList.append(l2_tracker.val);
      l2_tracker = l2_tracker.next;
    }
  }
  return mergedList.head;
};

const mergeListsO1 = (list1, list2) => {

  let l1_tracker = list1;
  let l2_tracker = list2;
  let l3_tracker = null;
  let l3_head = null;

  while (l1_tracker || l2_tracker) {
    if (l1_tracker) {
      if (!l3_head) {
        l3_tracker = l1_tracker;
        l3_head = l1_tracker;
      } else {
        l3_tracker.next = l1_tracker;
        l3_tracker = l3_tracker.next;
      }
      l1_tracker = l1_tracker.next;
    }

    if (l2_tracker) {
      if (!l3_head) {
        l3_tracker = l2_tracker;
        l3_head = l2_tracker;
      } else {
        l3_tracker.next = l2_tracker;
        l3_tracker = l3_tracker.next;
      }
      l2_tracker = l2_tracker.next;
    }
  }

  return l3_head;
};

module.exports = { mergeLists, mergeListsO1 };