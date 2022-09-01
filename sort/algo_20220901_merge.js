


/* 
    Stable sort.
    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
    Time Complexity
        - Best case: O(n log(n)) linearithmic.
        - Average case: O(n log(n)) linearithmic.
        - Worst case: O(n log(n)) linearithmic.
    Space: O(n) linear
    steps:
        1. create a merge function to merge two already sorted arrays into a single
            sorted array.
        - you do NOT need to work in place, ok to use a new array

        2. create mergeSort function to sort the provided array
        - split the array in half and recursively merge the halves using the
            previously created merge function.
        - splitting of arrays stops when array can no longer be split.
        - an array of 1 item is by definition sorted, so two arrays of 1 item
            can therefore be merged into a sorted array.
*/

// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3, 6, 8, 12, 55, 109, 709, 800];
const sortedB3 = [2, 3, 4, 7, 5000];
const expectedMerge3 = [2, 3, 3, 4, 7];

/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
function merge(left, right) {
    let newArr = [];

    let i = 0;
    let j = 0;
    while( i < left.length || j < right.length ){
        if( !right[j] ){
            newArr.push(left[i]);
            i++;
        } else if ( !left[i]){
            newArr.push(right[j]);
            j++;
        } else if( left[i] < right[j]){
            newArr.push(left[i]);
            i++;
        } else {
            newArr.push(right[j]);
            j++;
        }
    }
    return newArr;

}


// console.log(merge(sortedA1, sortedB1));
// console.log(merge(sortedA2, sortedB2));
// console.log(merge(sortedA3, sortedB3));

/**
 * Creates a new sorted array based on the given nums being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} nums
 * @returns {Array<number>} A New sorted array.
 */
function mergeSort(nums){
    if( nums.length <= 1 ){
        return nums;
    }
    let pivot = nums.length/2;
    console.log(pivot);

    return merge(mergeSort(nums.slice(0, pivot)), mergeSort(nums.slice(pivot)));
}

function mergeSortUncensored(nums) {
    console.log(nums);
    if( nums.length <= 1 ){
        return nums;
    }

    let mindex = 0;

    for( let i = 1; i<nums.length; i++ ){
        if( nums[i] < nums[mindex] ){
            mindex = i;
        }
        console.log(i);
    }

    let leftResult; // must contain min value
    let rightResult;// everything else
    // create left array
    if( mindex = nums.length - 1 ){
        console.log("case 1");
        leftResult = mergeSortUncensored(nums.slice(mindex, mindex+1));
        rightResult = mergeSortUncensored(nums.slice(0, mindex));
    } else {
        console.log("case 2");
        leftResult = mergeSortUncensored(nums.slice(0,mindex + 1))  //nums[0] - nums[mindex]
        // create right array
        rightResult = mergeSortUncensored(nums.slice(mindex+1))  // nums[mindex+1] - nums[length -1]
    }

    return merge(leftResult, rightResult);
}

function mergeBrian(left, right) {
    let merged=[];
    let l = 0;
    let r = 0;
    while (l < left.length || r < right.length) {
        while ((left[l] <= right[r] || !right[r]) && left[l]) {
            merged.push(left[l]);
            l++;
        } 
        while ((right[r] <= left[l] || !left[l]) && right[r]) {
            merged.push(right[r]);
            r++;
        }
    }
    return merged;
}

leftArray = [];
rightArray = [];

console.log(mergeBrian(leftArray, rightArray));

/*****************************************************************************/

// const unsorted1 = [5, 7, 1, 800, 4, 7, 6, 4000, 12, 5, 7 ];

// console.log(mergeSort(unsorted1));


