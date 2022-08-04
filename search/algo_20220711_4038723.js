// Given an array of integers, return the integer that occurs an odd number of
// times. The array will have at least three items in it. Each array in the test
// cases provided should only have a single item that occurs an odd number of
// times - no need to worry about any edge cases where the array is empty, or that
// there are no instances where something occurs an odd number of times, etc.

function arrayOddOccurances(arr) {
    let numTracker = {};
    for ( let i = 0; i < arr.length; i++){
        if(numTracker[arr[i]]){
            delete numTracker[arr[i]];
        } else {
            numTracker[arr[i]] = 1;
        }
    }
    for(let key of Object.keys(numTracker)){
        return key;
    }
}

// function arrayOddOccurances(arr) {
//     let numTracker = {};
//     for ( let i = 0; i < arr.length; i++){
//         if(numTracker[arr[i]]){
//             numTracker[arr[i]]++;
//         }else{
//             numTracker[arr[i]] = 1;
//         }
//     }
//     for (let [key, value] of Object.entries(numTracker)){
//         if(value % 2 !== 0){
//             return key
//         }
//     }
// }