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

    min( current = this.root ){
        if( this.isEmpty() ){
            return null;
        }
        while( current.left ){
            current = current.left
        }
        return current.data;
    }


    generateDisplayByRow( node = this.root, memo = {}, layer = 1, height = this.determineHeight()+2, currentIndent = this.determineStartIndent()*height*2, previousIndent = 0 ){
        if( !(layer in memo )) {
            memo[layer] = "";
            memo[layer] += " ".repeat(currentIndent);
            memo[layer] += node.data;
        }
        else {
            console.log("node data: "+node.data);
            console.log(0 < currentIndent - memo[layer].length ? currentIndent - memo[layer].length : 1);
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

    determineHeight( node = this.root, maxHeight = 1){
        let leftMaxHeight = maxHeight;
        let rightMaxHeight = maxHeight;

        if(node.left){
            leftMaxHeight = this.determineHeight( node.left, maxHeight + 1);
        }
        if(node.right){
            rightMaxHeight = this.determineHeight( node.right, maxHeight + 1);
        }

        if( leftMaxHeight > rightMaxHeight ){
            return leftMaxHeight;
        }
        return rightMaxHeight;
    }

    display(){
        let rowsToDisplay = this.generateDisplayByRow();

        for (let row of Object.values(rowsToDisplay)) {
            console.log(row);
        }
        
    }
}


let bsTree = new BinarySearchTree();
bsTree.insert(5);
bsTree.insert(20);
bsTree.insert(27);
bsTree.insert(55);
bsTree.insert(0);
bsTree.insert(3);
bsTree.insert(4);
bsTree.insert(12);
bsTree.insert(69);
bsTree.insert(20);
bsTree.insert(109);
bsTree.insert(6);
bsTree.insert(58);
bsTree.insert(-45);
bsTree.insert(-37);
bsTree.insert(-10);
bsTree.insert(-40);
bsTree.insert(43);
bsTree.insert(23);



displayMemo = bsTree.display();


console.log("indent: "+bsTree.determineStartIndent());
console.log("height: "+bsTree.determineHeight());








