// Given an array of integers, return the index of the array item where the sum of
// all the items to the left of that item is equal to the sum of all the items to
// the right of that item are equal. For example, given the array:

// [3, 4, 9, 2, 4, -2, 3]

// we would return 2. The items to the left of index 2 (3 and 4) and the items to
// the right of index 2 (2, 4, -2 and 3) both add up to the same number (7). If no
// item in the array exists where the items to the left and right of any given
// item would equal the same sum, return -1 instead.

// function arrayBalanceIndex(arr) {
//     let leftSum = 0;
//     let rightSum = 0;
//     for (let i = 0; i < arr.length; i++){
//         leftSum = 0;
//         rightSum = 0;
//         for (let j = 0; j<arr.length; j++){
//             if(j < i){
//                 leftSum += arr[j];
//             } else if (j > i){
//                 rightSum += arr[j];
//             }
//         }
//         if( rightSum === leftSum ){
//             return i;
//         }
//     }
//     return -1;
// }

function arrayBalanceIndex(arr){
    let rightSum = 0,
        leftSum = 0;
    // calculate sum of entire array and store as rightSum
    for ( let i = 0; i < arr.length; i++){
        rightSum += arr[i];
    }
    // test each position in array to see if it could be a pivot position
    for ( let i = 0; i < arr.length; i++){
        rightSum -= arr[i]; // subtract current position value (this value is no longer 'right' of pivot space being tested)
        if(leftSum === rightSum){
            return i;
        }
        leftSum += arr[i] // add current position value (this will be 'left' of pivot space being tested during next iteration)
    }
    return -1; // if no spaces can be pivot space, return -1
}