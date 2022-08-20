class BSTNode {
    constructor( data ){
        this.data = data;
        this.count = 1;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty () {
        if( this.root ){
            return false;
        }
        return true;
    }

    insert( newVal ){
        let newNode = new BSTNode( newVal )
        if( this.isEmpty() ){
            this.root = newNode;
            return this;
        }
        let runner = this.root;
        while( runner ) {
            if( newVal === runner.data ){
                runner.count++;
                return this;
            }
            if ( newVal > runner.data ){
                if( runner.right ){
                    runner = runner.right;
                } else {
                    runner.right = newNode;
                    return this;
                }
            } else {
                if( runner.left ){
                    runner = runner.left;
                } else {
                    runner.left = newNode;
                    return this;
                }
            }
        }
    }

    
    
    generateDisplayByRow( node = this.root, memo = {}, layer = 1, height = this.determineLongestBranchLength()+2, currentIndent = this.determineStartIndent()*height*2, previousIndent = 0 ){
        if( !(layer in memo )) {
            memo[layer] = "";
            memo[layer] += " ".repeat(currentIndent);
            memo[layer] += node.data;
        }
        else {
            memo[layer] += " ".repeat( 0 < currentIndent - memo[layer].length ? currentIndent - memo[layer].length : 1 );
            memo[layer] += node.data;
        }
        let leftNextIndent = currentIndent;
        let rightNextIndent = currentIndent;
        if( node.left ) {
            leftNextIndent -= (height - layer)*2 - (height/2);
            this.generateDisplayByRow( node.left, memo, layer + 1, height, leftNextIndent, currentIndent );
        }
        if( node.right ) {
            rightNextIndent += (height - layer)*2 - (height/2);
            this.generateDisplayByRow( node.right, memo, layer + 1, height, rightNextIndent, currentIndent );
        }
        return memo;
    }
    
    determineStartIndent(node = this.root, maxIndent = 0){
        let leftIndent = maxIndent;
        let rightIndent = maxIndent;
        
        if( node.left ){
            leftIndent = this.determineStartIndent( node.left, maxIndent + 1 );
        }
        if( node.right ){
            rightIndent = this.determineStartIndent( node.right, maxIndent -1 );
        }
        
        if( leftIndent > rightIndent ){
            return leftIndent;
        }
        return rightIndent;
    }
    
    determineLongestBranchLength( node = this.root, maxHeight = 1){
        let leftMaxHeight = maxHeight;
        let rightMaxHeight = maxHeight;
        
        if(node.left){
            leftMaxHeight = this.determineLongestBranchLength( node.left, maxHeight + 1);
        }
        if(node.right){
            rightMaxHeight = this.determineLongestBranchLength( node.right, maxHeight + 1);
        }
        
        if( leftMaxHeight > rightMaxHeight ){
            return leftMaxHeight;
        }
        return rightMaxHeight;
    }
    
    display(){
        if( this.isEmpty() ){
            console.log("Your Binary Search Tree is empty!");
            return null; 
        }
        
        let rowsToDisplay = this.generateDisplayByRow();
        
        for (let row of Object.values(rowsToDisplay)) {
            console.log(row);
        }
        
    }

    // displays the tree
    // displayPipes method written by @darkmatterdog
    displayPipes(current = this.root, depth = 0, polarity = []){

        if(this.isEmpty()){
            console.log("Tree is empty!")
            return;
        }

        // checks for left/right nodes
        let hasLeft = (current.left != null);
        let hasRight = (current.right != null);

        // render pipes for previous layers
        let pipes = ""
        for(var i = 0; i+1 < depth; i++){

            if(polarity[i] == "both"){
                pipes += "┃ ";
            } else {
                pipes += "  "
            }
        }

        // render pipes for this layer
        if(depth != 0){

            if(polarity[depth-1] == "both"){
                pipes += "┠─"
            }
            else{
                pipes += "┖─";
            }
        }


        // render current layer
        if(current.count > 1){
            console.log(pipes+current.data+ "("+current.count+")")
        }
        else{
            console.log(pipes+current.data);
        }

        // calling next leaves
        if(hasLeft && hasRight){
            polarity[depth] = "both";
            this.displayPipes(current.left, depth+1, polarity);
        } else if (hasLeft){
            polarity[depth] = "left";
            this.displayPipes(current.left, depth+1, polarity);
        }

        if(hasRight){
            polarity[depth] = "right";
            this.displayPipes(current.right, depth+1, polarity);
        }
    }
    
    min( current = this.root ){
        if( this.isEmpty() ){
            return null;
        }
        while( current.left ){
            current = current.left
        }
        return current.data;
    }

    max( current = this.root ){
        if( this.isEmpty() ){
            return null;
        }
        while( current.right ){
            current = current.right
        }
        return current.data;
    }

    minRecursive( current = this.root ){
        if( ! current.left){
            return current.data;
        }
        
        return this.minRecursive( current.left );
    }

    contains( searchVal ){
        if( this.isEmpty() ){
            return false;
        }

        let runner = this.root;
        while( runner ){
            if( runner.data === searchVal ){
                return true;
            }

            if( searchVal > runner.data ){
                runner = runner.right;
            } else {
                runner = runner.left;
            }
        }

        return false;

    }


    containsRecursive(searchVal, current = this.root) {

        if( ! current ){
            return false;
        }

        if( searchVal === current.data ){
            return true;
        }

        if( searchVal > current.data ){
            return this.containsRecursive( searchVal, current.right );
        } else {
            return this.containsRecursive( searchVal, current.left );
        }

    }

    range() {
        return (this.isEmpty() ? null : this.max() - this.min());
    }
    
    insertRecursive( newVal, current = this.root ) {
        if( this.isEmpty() ){
            this.root = new BSTNode( newVal );
            return this;
        }

        if( newVal === current.data ){
            current.count++;
            return this;
        }
        if ( newVal > current.data ){
            if( current.right ){
                return this.insertRecursive( newVal, current.right );
            } else {
                current.right = new BSTNode( newVal );
                return this;
            }
        } else {
            if( current.left ){
                return this.insertRecursive( newVal, current.left );
            } else {
                current.left = new BSTNode( newVal );
                return this;
            }
        }
    }

    toArrInOrderDescending( vals = [], node = this.root ){
        if( ! node ){
            return vals;
        }

        this.toArrInOrderDescending( vals, node.right );
        vals.push(node.data);
        this.toArrInOrderDescending( vals, node.left );
        
        return vals;
    }

    toArrInOrder( vals = [], node = this.root ){
        if( ! node ){
            return vals;
        }

        this.toArrInOrder( vals, node.left );
        vals.push(node.data);
        this.toArrInOrder( vals, node.right );

        return vals;
    }

    toArrPreOrder( vals = [], node = this.root ){
        if( ! node ){
            return vals;
        }

        vals.push(node.data);
        this.toArrPreOrder( vals, node.left );
        this.toArrPreOrder( vals, node.right );

        return vals;
    }

    toArrPostOrder( vals = [], node = this.root ){
        if( ! node ){
            return vals;
        }

        this.toArrPostOrder( vals, node.left );
        this.toArrPostOrder( vals, node.right );
        vals.push(node.data);

        return vals;
    }

    // takes an array as an input [ 1, 5, 7, -10, 4, -3 ]
    arrToBinaryTree( newArray ){

        for( let i = 0; i<newArray.length; i++ ){
            this.insertRecursive( newArray[i] );
        }

        return this;
    }

    toArrLevelOrder( node = this.root, level = 0, arr = [] ){
        if( ! node ){
            return [];
        }

        if( ! arr[level] ){
            arr[level] = [node.data];
        } else {
            arr[level].push(node.data);
        }
        this.toArrLevelOrder( node.left, level + 1, arr );
        this.toArrLevelOrder( node.right, level + 1, arr );

        if( level === 0 ){
            let resultArr = [];
            for( let i = 0; i < arr.length; i++ ){
                resultArr = resultArr.concat(arr[i]);
            }
            return resultArr;
        }
    }

    size( node = this.root ) {
        if( ! node ){
            return 0;
        }
        return 1 + this.size(node.left) + this.size(node.right);
    }

    height(node = this.root) {
        if( ! node ){
            return 0;
        }

        let leftHeight = this.height( node.left );
        let rightHeight = this.height( node.right );

        if( leftHeight > rightHeight ){
            return leftHeight + 1;
        }
        return rightHeight + 1;
    }

    isFull(node = this.root) {
        if( ! node ){
            return true;
        }
        if( !node.left && node.right || node.left && !node.right ){
            return false;
        }

        let leftBool = this.isFull( node.left );
        let rightBool = this.isFull( node.right );

        if( leftBool && rightBool ){
            return true;
        }
        return false;
    }

    insertNode( newNode ){
        let runner = this.root;
        while( runner ){
            if ( newNode.data > runner.data ){
                if( runner.right ){
                    runner = runner.right;
                } else {
                    runner.right = newNode;
                    return this;
                }
            } else {
                if( runner.left ){
                    runner = runner.left;
                } else {
                    runner.left = newNode;
                    return this;
                }
            }
        }
    }

    removeVal( val ){
        if( this.isEmpty(0) ){
            return false;
        }

        let tempNode = null;
        valueSearch: {
            if( val === this.root.data ){
                if( this.root.right ){
                    tempNode = this.root.right.left;
                    this.root.right.left = this.root.left;
                    this.root = this.root.right;
                } else {
                    this.root = this.root.left
                }
                break valueSearch;
            }
            let runner = this.root;
            while( runner ){
                if( val > runner.data ){
                    if( !runner.right ){
                        return false;
                    }
                    if( val === runner.right.data ){
                        if( runner.right.right ){
                            tempNode = runner.right.right.left;
                            runner.right.right.left = runner.right.left;
                            runner.right = runner.right.right;
                        } else {
                            runner.right = runner.right.left;
                            return true;
                        }
                        break valueSearch;
                    } else {
                        runner = runner.right;
                    }
                } else {
                    if( !runner.left ){
                        return false
                    }
                    if ( val === runner.left.data ){
                        if( runner.left.right ){
                            tempNode = runner.left.right.left;
                            runner.left.right.left = runner.left.left;
                            runner.left = runner.left.right;
                        } else {
                            runner.left = runner.left.left;
                            return true;
                        }
                        break valueSearch;
                    } else {
                        runner = runner.left;
                    }
                }
            }
        } 
        if( tempNode ){
            this.insertNode( tempNode );
        }
        return true;
    }
}



let bsTree = new BinarySearchTree();


// bsTree.insertRecursive(5);
// bsTree.insertRecursive(20);
// console.log(bsTree.range());
// bsTree.insertRecursive(27);
// bsTree.insertRecursive(25);
// bsTree.insertRecursive(0);
// bsTree.insertRecursive(2);
// bsTree.insertRecursive(-2);

// bsTree.display();

// console.log(bsTree.inOrder());
// console.log(bsTree.preOrder());
// console.log(bsTree.postOrder());

// console.log(bsTree.convertToAscendingArray());
// console.log(bsTree.convertToDescendingArray());


let bsTree2 = new BinarySearchTree();


//bsTree2.arrToBinaryTree([ "ann", "bill", "jill", "phil", "barry", "alfredo" ]);
bsTree2.arrToBinaryTree([1, -2, 10, 8 , 55, 67, 45, 89, 105, -20, -27]);
bsTree2.display();
console.log(bsTree2.removeVal(-899));
bsTree2.display();
// console.log(bsTree2.toArrLevelOrder());

// console.log(bsTree2.toArrInOrder());
// console.log(bsTree2.toArrInOrderDescending());
// console.log(bsTree2.toArrPreOrder());
// console.log(bsTree2.toArrPostOrder());








