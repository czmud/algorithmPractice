// Book Index
// Implement bookIndex(pages), a function that accepts one argument: an array of
// integers (pages). pages is guaranteed to be in order - there's no need to try
// to sort it. Similarly, it's guaranteed to be all integer page numbers - no need
// to try a special case for pages like "xii" or "1158b". The output will be a
// string that represents those page numbers in the same way they would in a
// textbook index.

// setup Javascript
let pages = generateSortedArray();

function generateSortedArray(){
    arr = [];
    arrLength = Math.floor(Math.random()*1000)+500; //generate random array between with 100-1000 positions
    for(let i = 0; i < arrLength; i++){
        arr.push(Math.floor(Math.random()*5000)) // limit number values from 0-50
    }
    arr.sort(function(a, b){return a - b}); //sort nubmers in ascending order
    arr = new Set(arr);
    arr = Array.from(arr);
    return arr;
}


// caleb's algo solution
function bookIndex(pages) {
    let dashTracker = false; // variable for managing use of dashes
    let indexResult = pages[0].toString();
    let temp = pages[0]
    for( let j = 1; j < pages.length; j++){
        if(pages[j] === temp+1){  // check if values are consecutive
            temp = pages[j];
            dashTracker = true; // turn dash tracker ON to manage adding dash to consecutive pages
            if (j === pages.length-1){ // check if we have reached end of pages array
                indexResult += "-"+temp;
            }
        } else { // once no longer consecutive add next value to string
            if (dashTracker){ // add dash if dashTrack is ON
                indexResult += "-"+temp+", "+pages[j];
                dashTracker = false;
            } else { // don't add current value, only add next
                indexResult +=", "+pages[j];
            }
            temp = pages[j];
        }
    }
    return indexResult;
}

bookIndex(pages);

/*
// Avery's code

function bookIndex(pages) {
    let indexArray = [];
    // iter through array
    for(var i = 0; i < pages.length; i++){
        // iterates until next number !sequential
        let counter = 1;
        while(pages[i+counter] == pages[i]+counter){
            counter++;
        }
        // checks if counter iterated, appends formatted string
        if(counter == 1){
            indexArray.push(String(pages[i]));
        }
        else{
            indexArray.push(String(pages[i])+"-"+String(pages[i+(counter-1)])) // correct the output
        }
        // iterates i to catch up with counter
        i += counter-1;
    }
    return indexArray.join(", ");
}

bookIndex(pages);
*/