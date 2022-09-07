

function dedupeSorted(nums){
    let temp = nums[0];
    for ( let i = 1; i < nums.length; i++ ){
        if (temp === nums[i]){
            nums.splice(i,1);
            i--;
        } else {
            temp = nums[i];
        }
    }
    return nums;
}


/* 
    Efficiently combine two already sorted multiset arrays 
    into an array containing the sorted set intersection of the two.

    Output: only the shared values between the two arrays (deduped).

    Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
    let newArray = [];
    if(sortedA.length < 1 || sortedB.length < 1){
        return newArray;
    }
    
    dedupeSorted(sortedA);
    dedupeSorted(sortedB);

    let i = 0;
    let j = 0;
    while (i < sortedA.length && j < sortedB.length) {
        console.log(i);
        if (sortedA[i] === sortedB[j]) {
            newArray.push(sortedA[i]);
            i++;
            j++;
        } else if (sortedA[i] < sortedB[j]) {
            if (sortedB[j] > sortedA[sortedA.length - 1]) {
                break;
            }
            i++;
        } else {
            if (sortedA[i] > sortedB[sortedB.length - 1]) {
                break;
            }
            j++;
        }
    }
    return newArray;
}

/*****************************************************************************/