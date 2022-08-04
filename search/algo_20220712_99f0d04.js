// Given two arrays, return a new array containing only the elements present in
// both arrays. If there are duplicate elements, make sure that the new array
// contains the smallest number of duplicates.


let array1 = generateSortedArray();
let array2 = generateSortedArray();
console.log(array1)
console.log(array2)


function generateSortedArray(){
	arr = [];
	arrLength = Math.floor(Math.random()*1000)+100; //generate random array between with 100-1000 positions
	for(let i = 0; i < arrLength; i++){
		arr.push(Math.floor(Math.random()*50)) // limit number values from 0-50
	}
	arr.sort(function(a, b){return a - b}); //sort nubmers in ascending order
    arr = new Set(arr);
	arr = Array.from(arr);
	return arr;
}



// function intersectionOfSortedArrays(array1, array2) {
//     let arr1Dict = countNumberFrequency(array1);
//     let arr2Dict = countNumberFrequency(array2);
//     let newArr = []
//     for ( let key of Object.keys(arr1Dict)){
//         if(arr2Dict[key]){
//             let x = Math.min(arr1Dict[key], arr2Dict[key]);
//             newArr = newArr.concat(Array(x).fill(key));
//         }
//     }
//     return newArr;
// }
// function countNumberFrequency(arr) {
//     let frequencyCount = {};
//     for ( let i = 0; i < arr.length; i++){
//         if(frequencyCount[arr[i]]){
//             frequencyCount[arr[i]]++;
//         }else{
//             frequencyCount[arr[i]] = 1;
//         }
//     }
//     return frequencyCount;
// }

// console.log(intersectionOfSortedArrays(array1, array2));




x = 5;
// // let points = [50,60,73,100,21,140,9,202,98];
// // points.sort(function(a, b){return a - b});
// // console.log(points);