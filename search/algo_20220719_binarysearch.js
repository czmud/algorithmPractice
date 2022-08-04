

// function binarySearch(sortedArray, num){
//     let start = 0;
//     let end = sortedArray.length
//     let newMiddle = Math.floor((end + start) / 2)

//     while (start < end){
//         if ( sortedArray[newMiddle] === num ){
//             return true;
//         } else if ( sortedArray[newMiddle] < num ) {
//             end = newMiddle
//             newMiddle = Math.floor((end + start) / 2)
//         } else {
//             start = newMiddle
//             newMiddle = Math.floor((end + start) / 2)
//         }
//     }

//     return false
// }



/* 
    Array: Binary Search (non recursive)
    Given a sorted array and a value, return whether the array contains that value.
    Do not sequentially iterate the array. Instead, ‘divide and conquer’,
    taking advantage of the fact that the array is sorted .
    Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete
    return how many times the given number occurs
*/

let nums = [1, 3, 5, 6];
let searchNum = 4;
let expected1 = false;


// const nums2 = [4, 5, 6, 8, 12];
// const searchNum2 = 5;
// const expected2 = true;

// const nums3 = [3, 4, 6, 8, 12];
// const searchNum3 = 3;
// const expected3 = true;

// // bonus, how many times does the search num appear?
// const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
// const searchNum4 = 2;
// const expected4 = 4;


function binarySearch(sortedNums, searchNum) {
    let start = 0;
    let end = sortedNums.length;
    let newMiddle = Math.floor((end + start) / 2);
    let result = false;

    while (start <= end){
        if ( sortedNums[newMiddle] === searchNum ){
            result = true
            return result;
        } else if ( sortedNums[newMiddle] < searchNum ) {
            end = newMiddle;
            newMiddle = Math.floor((end + start) / 2);
        } else {
            start = newMiddle;
            newMiddle = Math.floor((end + start) / 2);
        }
    }
    let y = 6;
    return result;
}

let result1 = binarySearch(nums, searchNum);

console.log(5)



let x = 5;