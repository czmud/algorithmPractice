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


    generateDisplayByRow( node = this.root, memo = {}, layer = 1, maxIndent = this.determineStartIndent(), height = this.determineHeight() ){
        if( !(layer in memo )) {
            memo[layer] = {
                "println": "",
                "rowNodeCount": maxIndent - layer + 1};
            for( let i = 0; i<maxIndent; i++){
                memo[layer]["println"] += " ".repeat(height);
            }
            memo[layer]["println"] += node.data;
            console.log("layer "+layer+": value: "+node.data);
        }
        else {
            if( node.data < this.root.data ){
                for( let i = 0; i<maxIndent-memo[layer]["rowNodeCount"]; i++ ){
                    memo[layer]["println"] += " ".repeat(height - layer);
                }
            } else {
                for( let i = 0; i<maxIndent-memo[layer]["rowNodeCount"]; i++ ){
                    memo[layer]["println"] += " ".repeat(height - layer + 1);
                }
            }
            memo[layer]["println"] += node.data;
            console.log("layer "+layer+": value: "+node.data);
            memo[layer]["rowNodeCount"] = maxIndent - height + layer;
        }
        let leftNextIndent = maxIndent;
        let rightNextIndent = maxIndent;
        if( node.left ) {
            // leftNextIndent -= height + layer 
            leftNextIndent--;
            this.generateDisplayByRow( node.left, memo, layer + 1, leftNextIndent );
        }
        if( node.right ) {
            rightNextIndent++;
            this.generateDisplayByRow( node.right, memo, layer + 1, rightNextIndent );
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
            console.log(row["println"]);
        }
        
    }
}


let bsTree = new BinarySearchTree();
bsTree.insert(5);
bsTree.insert(20);
bsTree.insert(27);
bsTree.insert(55);
bsTree.insert(4);
bsTree.insert(3);
bsTree.insert(0);
bsTree.insert(12);
bsTree.insert(69);
bsTree.insert(20);
bsTree.insert(109);
bsTree.insert(6);
bsTree.insert(58);



displayMemo = bsTree.display();


console.log("indent: "+bsTree.determineStartIndent());
console.log("height: "+bsTree.determineHeight());








