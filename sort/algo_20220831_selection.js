function selectionSort(nums){

    let mindex;
    for( let i = 0; i < nums.length - 1; i++ ){
        mindex = i;
        for( let j = i+1; j<nums.length; j++ ){
            if( nums[j] < nums[mindex] ){
                mindex = j;
            }
        }
        if( mindex !== i){
            [nums[i], nums[mindex]] = [nums[mindex], nums[i]];
        }
    }
    return nums;
}

// let numList = [5, 34, 8, 22, 100, 2, 6, 12, 1]

// console.log(selectionSort(numList));


const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(selectionSort(numsOrdered));
console.log(selectionSort(numsRandomOrder));
console.log(selectionSort(numsReversed));
console.log(selectionSort(expected));

