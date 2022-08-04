//Longest palindromic substring

//code from Ryan to check for a palindrome
// function isPalindrome(input){
//     for (let i = 0 ; i < input.length/2; i++){
//         if (input[i] != input[input.length - (i + 1)]){
//             return false
//         }
//     }
//     return true
// }




// edited to add comments explaining
// solution uses the 'ripple approach'
// check for two cases (we want to start at the epicenter)
// Case 1: [ x x x x x A A x x x x] where str[i] === str[i + 1]
// Case 2: [ x x x x x A b A x x x x] where str[i] === str[i + 2]
// for both case we continue checking ripples
// So checking ripple j=1 (Case 1)
// [ x x x x x x C a a C x x x] we see that str[i-j] === str [ i + 1 + j]
// continue checking ripples until they are not equal, then break for loop
function longestPalindrome(input) {
    if (input.length === 1){
        return input;
    }
    
    let nextPal = "";
    let palindrome = input[0]
    for ( let i = 0; i<input.length; i++) {
        // case 1 - character is equal to character 1 positions ahead
        if (input[i] === input[i+1]) {
            nextPal = input[i] + input[i+1];
            if (nextPal.length > palindrome.length) {
                palindrome = nextPal;
            }
            // loop to check subsequent 'ripples' of our palidrome
            for( let j = 1; j < i && j < input.length - i;j++){
            if(input[i-j] === input[i + 1 + j]){
                nextPal = input[i-j] + nextPal + input[i + 1 + j]
            } else {
                if( nextPal.length > palindrome.length){
                    palindrome = nextPal;
                }
                break;
            }
            }
        }
        // case 2 - character is equal to character 2 positions ahead
        if (input[i] === input[i+2]){
            nextPal = input[i] + input[i+1] + input[i+2];
            if( nextPal.length > palindrome.length){
                palindrome = nextPal;
            }
            // loop to check subsequent 'ripples' of our palidrome
            for( let j = 1; j < i && j < input.length - i;j++){
            if(input[i-j] === input[i + 2 + j]){
                nextPal = input[i-j] + nextPal + input[i + 2 + j]
            } else {
                if( nextPal.length > palindrome.length){
                    palindrome = nextPal;
                }
                break;
            }
            }
        }
    }
    return palindrome;
}