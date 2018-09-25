let expect = require('chai').expect;
let StringAndArrayFunctions = require('../questions/array-and-strings');

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

describe('isPermutation - by sort', () => {
  it('should return true if strings are empty', () => {
    expect(StringAndArrayFunctions.isPermutationBySort('', '')).to.be.equal(true);
  });
  it('should return false if strings are not equal lengths', () => {
    expect(StringAndArrayFunctions.isPermutationBySort('a', 'ab')).to.be.equal(false);
  });
  it('should return true if strings are permutations', () => {
    expect(StringAndArrayFunctions.isPermutationBySort('dog', 'god')).to.be.equal(true);
  });
  it('should return false if strings are not permutations because of differing case', () => {
    expect(StringAndArrayFunctions.isPermutationBySort('dog', 'God')).to.be.equal(false);
  });
});

describe('isPermutation - by occurance of chars in strings', () => {
  it('should return true if strings are empty', () => {
    expect(StringAndArrayFunctions.isPermutationByOccuranceOfChars('', '')).to.be.equal(true);
  });
  it('should return false if strings are not equal lengths', () => {
    expect(StringAndArrayFunctions.isPermutationByOccuranceOfChars('a', 'ab')).to.be.equal(false);
  });
  it('should return true if strings are permutations', () => {
    expect(StringAndArrayFunctions.isPermutationByOccuranceOfChars('dog', 'god')).to.be.equal(true);
  });
  it('should return false if strings are not permutations because of differing case', () => {
    expect(StringAndArrayFunctions.isPermutationByOccuranceOfChars('dog', 'God')).to.be.equal(false);
  });
});

describe('replaceSpaces', () => {
  it('should return original string if empty', () => {
    expect(StringAndArrayFunctions.replaceSpaces('')).to.be.equal('');
  });
  it('should return original string if no spaces', () => {
    expect(StringAndArrayFunctions.replaceSpaces('test')).to.be.equal('test');
  });
  it('should replace spaces with %20', () => {
    expect(StringAndArrayFunctions.replaceSpaces('Mr. Rogers')).to.be.equal('Mr.%20Rogers');
  });
});

describe('compressString', () => {
  it('should return original string if empty', () => {
    expect(StringAndArrayFunctions.compressString('')).to.be.equal('');
  });
  it('should return compressed string', () => {
    expect(StringAndArrayFunctions.compressString('aaa')).to.be.equal('3a');
  })
  it('should return compressed string', () => {
    expect(StringAndArrayFunctions.compressString('teest')).to.be.equal('t2est');
  });
});

describe('rotateMatrix', () => {
  it('should rotate a 2D MxM matrix 90 degrees', () => {
    expect(StringAndArrayFunctions.rotateMatrix([[1, 2], [3, 4]])).to.be.equal([[3, 1], [4, 2]]);
  });
})
