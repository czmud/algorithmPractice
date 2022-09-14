/* 
* Given by Riot games.
* Rehashes an incorrectly hashed string by combining letter count occurrences
* and alphabetizing them.
*/

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {
    let temp = {};
    let j = 0;
    let number = "";
    for( let i = 0; i < s.length-1; i++ ){
        j = i+1;
        number = "";
        while( j<s.length && !isNaN(s[j])){
            number += s[j];
            j++;
        }
        if( temp[s[i]] === undefined ){
            temp[s[i]] = 0;
        }
        temp[s[i]] += parseInt(number);
        i = j-1;
    }
    let resultHash = "";
    for( let [key, val] of Object.entries(temp).sort()){
        resultHash += key + val;
    }
    return resultHash;
}

console.log(rehash(str1));



/*****************************************************************************/





