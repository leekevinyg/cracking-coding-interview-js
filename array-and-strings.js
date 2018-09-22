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

module.exports = {
    allUnique,
    recursiveReverse,
    reverse,
}