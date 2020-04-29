'use strict';



const { AnimalShelter, Animal } = require('./fifo-animal-shelter.js');


describe('Testing Shelter Enqueue', () => {
  it('successfully enqueues a dog and cat', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue(new Animal('Dog', 'Neo'));
    shelter.enqueue(new Animal('Cat', 'Bull'));
    expect([shelter.front.val.name, shelter.back.val.name]).toEqual([
      'Neo',
      'Bull',
    ]);
  });

});

describe('Testing Shelter Enqueue', () => {
  it('successfully dequeues prefered animal', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue(new Animal('Dog', 'Neo'));
    shelter.enqueue(new Animal('Dog', 'Leo'));
    shelter.enqueue(new Animal('Cat', 'Bull'));
    const cat = shelter.dequeue('Cat');
    expect(cat.name).toBe('Bull');
  });

});
