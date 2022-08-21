// Problem 20. Valid Parenthesis. Easy
function validParenthesis(s) {
    if( s.length % 2 === 1 ){
        return false;
    }
    let needsClosing = [];
    let parenthesisCheck = "";

    for( let i = 0; i<s.length; i++ ){
        if( s[i] === '(' ){
            needsClosing.push(')');
        } else if( s[i] === '{' ){
            needsClosing.push('}');
        } else if( s[i] === '[' ){
            needsClosing.push(']');
        } else if( s[i] === ')' ){
            if( s[i] !== needsClosing.pop() ){
                return false;
            }
        } else if( s[i] === '}' ){
            if( s[i] !== needsClosing.pop() ){
                return false;
            }
        } else if( s[i] === ']' ){
            if( s[i] !== needsClosing.pop() ){
                return false;
            }
        }
    }
    if( needsClosing.length > 0 ){
        return false;
    }
    return true;
}

// console.log(validParenthesis("()()())"));

// Problem 22. Generate Parenthesis. Medium
function generateParenthesis( n ){
    return generateParenthesisWithClose( n );
}

function generateParenthesisWithClose( n, m = n, parenthesisString = "" ){
    if( n === 0 && m === 0 ){
        return [parenthesisString];
    }

    let parenthesisResults = []
    if(n > 0){
        openingParenthesis = generateParenthesisWithClose( n-1, m, parenthesisString + "(" );
        for( let i = 0; i<openingParenthesis.length; i++ ){
            parenthesisResults = parenthesisResults.concat(openingParenthesis[i]);
        }
    }
    if(m > n){
        closingParenthesis = generateParenthesisWithClose( n, m-1, parenthesisString + ")" );
        for( let i = 0; i<closingParenthesis.length; i++ ){
            parenthesisResults = parenthesisResults.concat(closingParenthesis[i]);
        }
    }

    return parenthesisResults;
}


console.log(generateParenthesis(4));





