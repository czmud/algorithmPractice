
function insertionSort( nums ){
    
    for ( let i = 0; i < nums.length - 1; i++ ){
        if( !nums[i+1] || nums[i] <= nums[i+1] ) {
            continue;
        } else {
            for( let j = i+1; j>=1; j-- ){
                if( !nums[j-1] || nums[j] >= nums[j-1] ){
                    break;
                }
                [nums[j], nums[j-1]] = [nums[j-1], nums[j]]
            }
        }
    }
    return nums;
}

const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(insertionSort(numsRandomOrder));
console.log(insertionSort(numsReversed));
