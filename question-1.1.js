/* 

Question 1.1 

Implement an function to determine if a string has all unique characters

*/

const allUnique = (string) => {
    let charactersEncounteredSoFar = [];
    let stringArray = string.split();
    stringArray.forEach((character) => {
	   if (!charactersEncounteredSoFar[character]) {
		  charactersEncounteredSoFar[character] = true;
        }
        return false;
    });
    return true;
}

module.exports = allUnique;