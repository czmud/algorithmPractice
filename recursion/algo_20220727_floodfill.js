
// floodFill(canvas, x, y, target)
// canvas is an array of array of numbers representing
// colored pixels (think MSPaint)
// x, y is your start point, target is your new "color"
// change the value at x, y on the canvas to
// the target value, then all points on the canvas 
// that were the original color and contiguous with the 
// point at x, y (no diagonals!) to the target color.
//
// example, if canvas is:
// [[3, 2, 4, 4, 4],
//  [4, 4, 4, 3, 3],
//  [4, 1, 1, 4, 4]]
// x, y is 2, 1  and target is 0
// canvas becomes:
// [[3, 2, 0, 0, 0],
//  [0, 0, 0, 3, 3],
//  [0, 1, 1, 4, 4]]
//
// another example, if canvas is:
// [[1, 0, 2, 0, 1],
//  [1, 0, 1, 1, 0],
//  [1, 0, 1, 0, 0],
//  [2, 0, 0, 2, 1]]
// x, y is 1, 2 and target is 9
// canvas becomes:
// [[1, 9, 2, 0, 1],
//  [1, 9, 1, 1, 0],
//  [1, 9, 1, 0, 0],
//  [2, 9, 9, 2, 1]]
// if x, y was intead 2, 1 and target was 9
// canvas would become:
// [[1, 0, 2, 0, 1],
//  [1, 0, 9, 9, 0],
//  [1, 0, 9, 0, 0],
//  [2, 0, 0, 2, 1]]
// you don't need to return anything,
// but if you feel the need to, use null or undefined
// make sure you don't modify anything outside your canvas area


function floodFill(canvas, x, y, target) {
    // save current square to temp so we know what value to search for
    let temp = canvas[y][x];
    // set new coordinates to target
    canvas[y][x] = target;
    // left check
    // check not left bound
    if ( canvas[y][x-1] ){
        // fill left space if same as temp
        if ( canvas[y][x-1] === temp ){
            floodFill( canvas, x-1, y, target )
        }
    }
    // top check
    // check not top bound
    if ( canvas[y-1] ){
        // fill top space if same as temp
        if ( canvas[y-1][x] === temp ){
            floodFill( canvas, x, y-1, target )
        }
    }
    // right check
    // check not right bound
    if ( canvas[y][x+1] ){
        // fill right space if same as temp
        if ( canvas[y][x+1] === temp ){
            floodFill( canvas, x+1, y, target )
        }
    }
    // bottom check
    //check not bottom bound
    if ( canvas[y+1] ){
        // fill top space if same as temp
        if ( canvas[y+1][x] === temp ){
            floodFill( canvas, x, y+1, target )
        }
    }
}

var sample_input = [[1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
                    [0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
                    [1, 0, 1, 0, 0, 2, 2, 2, 2, 1],
                    [3, 3, 1, 3, 3, 3, 1, 1, 3, 1],
                    [1, 1, 1, 1, 1, 3, 3, 1, 1, 1]]
floodFill(sample_input, 1, 1, 9)

console.log(sample_input)


x = 5
// should return:
// [[1, 0, 9, 9, 9],
//  [0, 9, 9, 9, 0],
//  [1, 0, 9, 0, 0]]

// create your own test cases!