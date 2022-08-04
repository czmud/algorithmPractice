// Implement rotateArr(arr, shiftBy), a function that accepts an array and a
// number to shift it by. Shift arr's values to the right by that amount. 'Wrap
// around' any values that shift off array's end to the other side, so that no
// data is lost, and operate in-place - do not return a new array, but modify the
// array passed in. If the shiftBy value is longer than the array length, that's
// okay - it can wrap around, then wrap again and again and again.

// Bonus: what happens if you give a negative shiftBy value? Can you rotate your
// array to the left instead?



function rotateArray(arr, shiftBy) {
    if(shiftBy < 0){
        shiftBy = (shiftBy % arr.length) + arr.length;
    } else {
        shiftBy = shiftBy % arr.length;
    }
    
    if(arr.length <= 1 || shiftBy === 0){
        return arr;
    }
    
    let newPosition = shiftBy;
    let tempPosition = 0;
    let temp = [];
    for(let i = 0; i < arr.length; i++){
        newPosition = (i + shiftBy) % arr.length;
        if(i < shiftBy){
            temp.push(arr[newPosition]);
            arr[newPosition] = arr[i];
        } else {
            tempPosition = (i - shiftBy);
            //console.log("tempP:" +tempPosition);
            //console.log(temp);
            arr[newPosition] = temp[tempPosition];
        }
    }
    return arr;
}


// Test Cases

console.log(rotateArray([1,2,3,4,5],1));
// console.log(rotateArray([3,7],1));
// console.log(rotateArray([1,2,3,4,5],3));
// console.log(rotateArray([6,17,21,3],-2));
// console.log(rotateArray([89],1));
// console.log(rotateArray([6,21,15,-8],17));
// console.log(rotateArray([6,21,15,-8],18));


let x = 5;