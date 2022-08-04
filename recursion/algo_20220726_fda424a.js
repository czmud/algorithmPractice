// Greatest Common Factor

// Implement Euclid's formula for finding greatest common factor
// Solve this recursively

// There's a way to solve this mathematically using prime numbers, but back in
// 300 B.C. Euclid came up with an algorithm that lets us find the greatest
// common factor of two numbers, X and Y:

// - determine if X is greater than Y or if Y is greater than X

// - if X is greater than Y, make X equal to X - Y

// - if Y is greater than X, make Y equal to Y - X

// - continue this process until X is equal to Y - this is your greatest common factor

// export function gcf(x, y) {
//     if ( x == y){
//         return x;
//     }
//     if ( x > y ){
//         x = x - y;
//         return gcf( x , y )
//     } else {
//         y = y - x
//         return gcf( x, y )
//     }
    
//     }




function gcf(x, y) {
    if ( x == y){
        return x;
    }
    if ( x > y ){
        while ( x > y){
        x = x - y
        }
        return gcf( x , y );
    } else {
        while ( y > x ){
        y = y - x
        }
        return gcf( x , y );
    }
}


// function gcf(x, y) {
//     if ( x == y){
//         return x;
//     }
//     let divFact = 1; 
//     if ( x > y ){
//         divFact = x/y;
//         console.log("xdivF: "+divFact)
//         x = x - (y * divFact);
//         console.log("x: "+x)
//         return gcf( x , y );
//     } else {
//         divFact = int(y/x);
//         console.log("ydivF: "+divFact)
//         y = y - ( x * divFact );
//         console.log("y: "+y)
//         return gcf( x , y );
//     }

// }

console.log(gcf(2260, 800));