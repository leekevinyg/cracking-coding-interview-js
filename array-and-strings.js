/* 

Question 1.1 

Implement an function to determine if a string has all unique characters

*/

const allUnique = (string) => {
    const stringArray = string.split('');
    const charactersEncounteredSoFar = [];

    for (var character of stringArray) {
        if (!charactersEncounteredSoFar[character]) {
              charactersEncounteredSoFar[character] = true;
        } else {
            return false;
        }
    };
    return true;
}

/* 

Question 1.2

Reverse a string

*/

const recursiveReverse = (string) => {
    if (string === '') {
        return '';
    }
    return reverse(string.substr(1)) + string.charAt(0);
}

const reverse = (string) => {
    let reversedStringSoFar = [];
    let stringLength = string.length;

    while (stringLength >= 0) {
        reversedStringSoFar.push(string.charAt(stringLength));
        stringLength--;
    }

    return reversedStringSoFar.join('');
}

/* 

Question 1.3

Given 2 strings, write a method to decide if one is permutation of the other

*/

const isPermutationBySort = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    if (str1 === '' && str2 === '') return true;

    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

const isPermutationByOccuranceOfChars = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    if (str1 === '' && str2 === '') return true;

    const occuranceOfChars1 = countOccuranceOfChars(str1);
    const occuranceOfChars2 = countOccuranceOfChars(str2);

    for (let char of str1) {
        if (occuranceOfChars2[char] !== occuranceOfChars1[char]) {
            return false;
        }
    }

    return true;
}

const countOccuranceOfChars = (chars) => {
    const characterArray = [];
    for (let char of chars) {
        if (characterArray[char]) {
            characterArray[char]++;
        } else {
            characterArray[char] = 1;
        }
    }
    return characterArray;
}

module.exports = {
    allUnique,
    recursiveReverse,
    reverse,
    isPermutationBySort,
    isPermutationByOccuranceOfChars,
}