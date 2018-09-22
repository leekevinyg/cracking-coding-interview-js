/* 

Question 1.1 

Implement an function to determine if a string has all unique characters

*/

const allUnique = (string) => {
    let charactersEncounteredSoFar = [];
    let stringArray = string.split('');

    for (var character of stringArray) {
        if (!charactersEncounteredSoFar[character]) {
              charactersEncounteredSoFar[character] = true;
        } else {
            return false;
        }
    };
    return true;
}


module.exports = {
    allUnique,
}