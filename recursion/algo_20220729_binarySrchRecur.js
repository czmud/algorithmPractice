// function binarySearch( input, target ){
//     if ( input.length <= 1 ){
//         if ( input[0] === target){
//             return true
//         } else {
//             return false
//         }
//     }

//     let middleIndex = Math.floor( input.length / 2 );


//     if ( input[middleIndex] === target){
//         return true
//     } else if ( input[middleIndex] > target ) {
//         return binarySearch( input.slice(0, middleIndex), target )
//     } else {
//         return binarySearch( input.slice( middleIndex + 1 ), target )
//     }
// }




function binarySearch( input, target, start = 0, end = input.length){
    
    if ( start + 1 === end ){
        if ( input[0] === target){
            return true
        } else {
            return false
        }
    }

    let middleIndex = Math.floor( (start + end) / 2 );

    if ( input[middleIndex] === target){
        return true
    } else if ( input[middleIndex] > target ) {
        end = middleIndex
        return binarySearch( input, target, start, end )
    } else {
        start = middleIndex
        return binarySearch( input, target, start, end )
    }
}


// binarySearch(input, target ... ?)
// two parameters - an array of sorted integers to search through (input)
// and an integer to search for (target)
// return true if the target integer is found in the array and false otherwise
// we may define more parameters if necessary
// we gotta do this recursively!
// this will have a big O time complexity of log n
// https://www.bigocheatsheet.com/

// all these statements should return true
// if you don't like how these are set up, feel free to write your own
// just remember that the input is sorted

var arr = [1, 2, 3, 4, 6, 7, 9, 11, 12, 56, 57, 578, 5658 , 5684]
console.log(binarySearch(arr, 1) == true)
// console.log(binarySearch(arr, 2) == true)
// console.log(binarySearch(arr, 3) == true)
// console.log(binarySearch(arr, 4) == true)
// console.log(binarySearch(arr, 6) == true)
// console.log(binarySearch(arr, 7) == true)
// console.log(binarySearch(arr, 9) == true)
// console.log(binarySearch(arr, 11) == true)
// console.log(binarySearch(arr, 12) == true)

// console.log(binarySearch(arr, 5) == false)
// console.log(binarySearch(arr, 8) == false)
// console.log(binarySearch(arr, 10) == false)

// console.log(binarySearch(arr, -3) == false)
// console.log(binarySearch(arr, 21) == false)