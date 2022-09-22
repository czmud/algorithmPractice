const test1V1 = "0.1";
const test1V2 = "1.1";

const expected1 = -1;

const test2V1 = "1.0.1";
const test2V2 = "1";
const expected2 = 1;

const test3V1 = "7.5.2.4";
const test3V2 = "7.5.3";
const expected3 = -1;

const test4V1 = "7.5.2.4";
const test4V2 = "7.5.2";
const expected4 = 1;

const test5V1 = "1.01";
const test5V2 = "1.001";
const expected5 = 0;
// Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”

const test6V1 = "1.0.1";
const test6V2 = "1";
const expected6 = 1;

/**
 * Determines which version number is greater or if they are equal.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} v1
 * @param {string} v2
 * @returns {number} 1 if v1 greater, -1 if v1 smaller, 0 if equal.
 */

function compareVersionNumbers(v1, v2) {
    let v1Arr = v1.split(".").map(n => parseInt(n));
    let v2Arr = v2.split(".").map(n => parseInt(n));

    return v2Arr > v1Arr ? -1 : Number(v1Arr > v2Arr);
}

function compareVersionNumbersOneLiner(v1, v2) {
    return v2.split(".").map(n => parseInt(n)) > v1.split(".").map(n => parseInt(n)) ? -1 : Number((v1.split(".").map(n => parseInt(n)) > (v2.split(".").map(n => parseInt(n)))));
}

function compareVersionNumbersNoSplit(v1, v2) {
    let str1 = "";
    let str2 = "";
    let i = 0;
    let j = 0;
    while( i < v1.length || j < v2.length ){
        while( v1[i] !== "." && i < v1.length){
            str1 += v1[i];
            i++;
        }
        while( v2[j] !== "." && j < v2.length ){
            str2 += v2[j];
            j++;
        }

        if( parseInt(str1) === parseInt(str2) ){
            if( i >= v1.length ){
                if( j >= v2.length ){
                    return 0;
                } else {
                    return -1;
                }
            } else if ( j >= v2.length ){
                return 1
            }
        } else {
            return parseInt(str1) > parseInt(str2) ? 1 : -1;
        }

        str1 = "";
        str2 = "";
        i++;
        j++;
    }
    return 0;
}

function compareVersionNumbersRecursive(v1, v2, start1 = 0, start2 = 0) {
    let end1 = start1;
    let end2 = start2;
    let endingFlag1 = false;
    let endingFlag2 = false;
    while( v1[end1] !== "." ){
        if( end1 >= v1.length ){
            endingFlag1 = true;
            break;
        }
        end1++;
    }
    while( v2[end2] !== "." ){
        if( end2 >= v2.length ){
            endingFlag2 = true;
            break;
        }
        end2++;
    }

    let int1 = parseInt(v1.substring(start1, end1));
    let int2 = parseInt(v2.substring(start2, end2));
    if( int1 === int2 ){
        if( endingFlag1 && endingFlag2 ){
            return 0;
        }
        if( endingFlag1 ){
            return -1;
        }
        if( endingFlag2 ){
            return 1;
        }
        return compareVersionNumbersRecursive(v1, v2, end1+1, end2+1)
    }

    return int1 > int2 ? 1 : -1;
}

console.log(compareVersionNumbersRecursive(test1V1, test1V2));
console.log(compareVersionNumbersRecursive(test2V1, test2V2));
console.log(compareVersionNumbersRecursive(test3V1, test3V2));
console.log(compareVersionNumbersRecursive(test4V1, test4V2));
console.log(compareVersionNumbersRecursive(test5V1, test5V2));
console.log(compareVersionNumbersRecursive(test6V1, test6V2));