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

/**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
    minRecursive( current = this.root ){
        if( ! current.left){
            return current.data;
        }
        
        return this.minRecursive( current.left );
    }

    /**
 * Determines if this tree contains the given searchVal.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} searchVal The number to search for in the node's data.
 * @returns {boolean} Indicates if the searchVal was found.
 */
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


/**
 * Determines if this tree contains the given searchVal.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} searchVal The number to search for in the node's data.
 * @returns {boolean} Indicates if the searchVal was found.
 */
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

    convertToAscendingArray( orderedArray = [], node = this.root ){
        if( this.isEmpty() ){
            return orderedArray
        }

        if( node.left ){
            orderedArray = this.convertToAscendingArray( orderedArray, node.left );
        }

        orderedArray.push(node.data);

        if( node.right ) {
            orderedArray = this.convertToAscendingArray( orderedArray, node.right );
        }

        return orderedArray;
    }

    convertToDescendingArray( orderedArray = [], node = this.root ){
        if( this.isEmpty() ){
            return orderedArray
        }

        if( node.right ) {
            orderedArray = this.convertToDescendingArray( orderedArray, node.right );
        }
        
        for( let i=0; i<node.count; i++){
            orderedArray.push(node.data);
        }
        
        if( node.left ){
            orderedArray = this.convertToDescendingArray( orderedArray, node.left );
        }
        
        return orderedArray;
    }
    
}


let bsTree = new BinarySearchTree();


bsTree.insert(5);
bsTree.insert(20);
bsTree.insert(27);
bsTree.insert(25);
bsTree.insert(0);
bsTree.insert(2);
bsTree.insert(2);
bsTree.insert(2);
bsTree.insert(2);
bsTree.insert(-60);
bsTree.insert(-73);
bsTree.insert(12);
bsTree.insert(125);
bsTree.insert(74);
bsTree.insert(72);
bsTree.insert(72);
bsTree.insert(72);
bsTree.insert(72);
bsTree.insert(72);
bsTree.insert(72);
bsTree.insert(72);
bsTree.insert(76);
bsTree.insert(80);
bsTree.insert(-10);
bsTree.insert(17);


// console.log(bsTree.convertToAscendingArray());
// console.log(bsTree.convertToDescendingArray());


bsTree.displayPipes();










