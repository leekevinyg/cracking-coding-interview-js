var expect = require('chai').expect;
var allUnique = require('../question-1.1');

describe('stringIsAllUniqueCharacters', () => {
  it('should return true if string is empty', () => {
    expect(allUnique('')).to.be.equal(true);
  });
  
  it('should return true if a string has all unique characters', () => {
    expect(allUnique('helo')).to.be.equal(true);
  });

  it('should return false if a string has repeat characters', () => {
    expect(allUnique('hello')).to.be.equal(false);
  });
});