// Interleave Two Arrays

function interleaveArrays(arrayA, arrayB) {
    let newArray = [];
    let maxLength = Math.max(arrayA.length, arrayB.length);

    for ( let i = 0; i<maxLength; i++){
        if(arrayA[i]){
            newArray.push(arrayA[i]);
        }
        if(arrayB[i]){
            newArray.push(arrayB[i]);
        }
    }

    return newArray;
}





