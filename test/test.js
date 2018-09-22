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

describe('recursive reverse', () => {
  it('should return empty if string is empty', () => {
    expect(StringAndArrayFunctions.recursiveReverse('')).to.be.equal('');
  });

  it('should reverse an odd number string', () => {
    expect(StringAndArrayFunctions.recursiveReverse('hello')).to.be.equal('olleh');
  });

  it('should reverse an even number string', () => {
    expect(StringAndArrayFunctions.recursiveReverse('fork')).to.be.equal('krof');
  });
});

describe('reverse', () => {
  it('should return empty if string is empty', () => {
    expect(StringAndArrayFunctions.reverse('')).to.be.equal('');
  });

  it('should reverse an odd number string', () => {
    expect(StringAndArrayFunctions.reverse('hello')).to.be.equal('olleh');
  });

  it('should reverse an even number string', () => {
    expect(StringAndArrayFunctions.reverse('fork')).to.be.equal('krof');
  });
});