let expect = require('chai').expect;
let StringAndArrayFunctions = require('../array-and-strings');

describe('stringIsAllUniqueCharacters', () => {
  it('should return true if string is empty', () => {
    expect(StringAndArrayFunctions.allUnique('')).to.be.equal(true);
  });
  
  it('should return true if a string has all unique characters', () => {
    expect(StringAndArrayFunctions.allUnique('helo')).to.be.equal(true);
  });

  it('should return false if a string has repeat characters', () => {
    expect(StringAndArrayFunctions.allUnique('hello')).to.be.equal(false);
  });
});