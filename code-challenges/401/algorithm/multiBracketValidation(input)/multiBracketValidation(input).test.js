'use strict';

const validator = require('./multiBracketValidation(input).js');

describe('happy path', () => {
  it('Curly bracket in the stack', () => {
    expect(validator('curly bracket')).toBeTruthy();
  });

  it('mixte of all 3 types of bracket', () => {
    expect(validator('all 3 Types of bracket')).toBeTruthy();
  });

  it('()[[Extra Characters]]', () => {
    expect(validator('()[[Extra Characters]]')).toBeTruthy();
  });

  it('(){}[[]]', () => {
    expect(validator('(){}[[]]')).toBeTruthy();
  });

  it('{}{Code}[Fellows](())', () => {
    expect(validator('{}{Code}[Fellows](())')).toBeTruthy();
  });
});

describe('expected failures', () => {
  it('[({}]', () => {
    expect(validator('[({}]')).toBeFalsy();
  });

  it('(](', () => {
    expect(validator('(](')).toBeFalsy();
  });

  it('{(})', () => {
    expect(validator('{(})')).toBeFalsy();
  });
});

describe('edge cases', () => {
  it('{ ', () => {
    expect(validator('{')).toBeFalsy();
  });

  it(') ', () => {
    expect(validator(')')).toBeFalsy();
  });

  it('[}', () => {
    expect(validator('[}')).toBeFalsy();
  });

  it('weird', () => {
    expect(validator('weird')).toBeTruthy();
  });

  it(' "" ', () => {
    expect(validator('')).toBeTruthy();
  });
});
