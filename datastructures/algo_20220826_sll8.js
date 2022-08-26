class ListNode {
    constructor( data ) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        if ( this.head ) {
            return false;
        }
        return true;
    }
    
    insertAtFront( data ) {
        let newNode = new ListNode( data );
        newNode.next = this.head;
        this.head = newNode;
        return;
    }
    removeFromBack() {
        if ( this.isEmpty() ){
            return [];
        }
        let removedNode;
        let runner = this.head;
        if( ! runner.next ){
            removedNode = runner;
            runner = null;
            return removedNode;
        }
        if( ! runner.next.next ){
            removedNode = runner.next;
            runner.next = null;
            return removedNode;
        }
        while( runner.next.next ){
            runner = runner.next;
        }
        removedNode = runner.next;
        runner.next = null;
        return removedNode;
    }

    contains(val) {
        let runner = this.head;
        while( runner.next ){
            if( runner.data === val ){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    containsRecursive(val, current = this.head) {
        if( this.isEmpty() ){
            return false;
        }
        if( current.data == val ){
            return true;
        }
        if( ! current.next ){
            return false;
        }
        return this.containsRecursive( val, current.next );
    }


    removeFromFront() {
        if( !this.isEmpty){
            this.head = this.head.next;
        }
        return;
    }

    insertAtBack( data ) {
        let newNode = new ListNode( data );
        if ( this.isEmpty() ){
            this.head = newNode;
        } else {
            let runner = this.head;
            while( runner.next ){
                runner = runner.next;
            }
            runner.next = newNode;
        }
        return this;
    }

    seedFromArr( vals ) {
        
        for ( let i = 1; i<vals.length; i++ ) {

        }
    }

    toArr() {
        let newArr = [];
        let runner = this.head;
        while( runner ) {
            newArr.push( runner.data );
            runner = runner.next;
        }
        return newArr;
    }

    display(){
        if( this.isEmpty() ){
            console.log("This list is empty!")
        } else {
            let n = 0;
            let runner = this.head;
            console.log('node ' + n + ': '+runner.data);
            while( runner.next ){
                runner = runner.next;
                n++;
                console.log('node ' + n + ': '+runner.data);
            }
        }
        return;
    }

    secondToLast() {
        if ( this.isEmpty()
            || this.head.next == null ) {
                return null;
            }
        let runner = this.head;
        while ( runner.next.next ){
            runner = runner.next;
        }
        return runner.data;
    }

    removeVal(val, removeAllToggle = false) {
        let wasValueRemoved = false;
        if ( this.isEmpty() ) {
            return wasValueRemoved;
        }
        while( this.head.data == val && (removeAllToggle || ! wasValueRemoved)){
            this.head = this.head.next;
            wasValueRemoved = true;
        }
        let runner = this.head;
        while ( runner.next && (removeAllToggle || ! wasValueRemoved) ){
            if ( runner.next.data === val ){
                runner.next = runner.next.next;
                wasValueRemoved = true;
            } else {
                runner = runner.next;
            }
        }
        return wasValueRemoved;
    }
    
    prepend(newVal, targetVal) {
        if( this.isEmpty() ){
            return false;
        }
        let newNode = new ListNode( newVal );
        if( this.head.data == targetVal) {
            newNode.next = this.head;
            this.head = newNode;
            return true
        }
        let runner = this.head;
        while( runner.next ) {
            if( runner.next.data == targetVal ) {
                newNode.next = runner.next;
                runner.next = newNode;
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    moveMinToFront() {
        if( this.isEmpty() || this.head.next == null){
            return this;
        }
        
        let minNode = this.head;
        let nodeBeforeMinNode = null;
        
        let runner = this.head;
        while( runner.next ){
            if( runner.next.data < minNode.data ) {
                minNode = runner.next;
                nodeBeforeMinNode = runner;
            }
            runner = runner.next;
        }

        if( ! nodeBeforeMinNode ){
            return this;
        }
        
        let nodeAfterMinNode = minNode.next;
        minNode.next = this.head;
        this.head = minNode;
        nodeBeforeMinNode.next = nodeAfterMinNode;
        
        return this;
    }

/**
 * Concatenates the nodes of a given list onto the back of this list.
 * - Time: O(?).
 * - Space: O(?).
 * @param {SinglyLinkedList} addList An instance of a different list whose
 *    whose nodes will be added to the back of this list.
 * @returns {SinglyLinkedList} This list with the added nodes.
 */
    concat( addList ) {
        if( addList.isEmpty() ){
            return this;
        }
        if( this.isEmpty() ){
            this.head = addList.head;
            return this;
        }
        let runner = this.head;
        while( runner.next ){
            runner = runner.next;
        }
        runner.next = addList.head;
        return this;
    }

/**
 * Splits this list into two lists where the 2nd list starts with the node
 * that has the given value.
 * splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3)
 * and the return value will be a new list containing (5=>2=>4)
 * - Time: O(?).
 * - Space: O(?).
 * @param {any} val The value in the node that the list should be split on.
 * @returns {SinglyLinkedList} The split list containing the nodes that are
 *    no longer in this list.
 */
    splitOnVal( val ){
        if( this.isEmpty() ){
            return null;
        }
        if( this.head.data === val){
            let returnList = new SinglyLinkedList();
            returnList.head = this.head;
            this.head = null;
            return returnList;
        }
        let runner = this.head;
        while( runner.next ){
            if( runner.next.data === val){
                let returnList = new SinglyLinkedList();
                returnList.head = runner.next;
                runner.next = null;
                return returnList;
            }
            runner = runner.next;
        }
        return null;
    }

/**
 * Recursively finds the maximum integer data of the nodes in this list.
 * - Time: O(?).
 * - Space: O(?).
 * @param {ListNode} runner The start or current node during traversal, or null
 *    when the end of the list is reached.
 * @param {ListNode} maxNode Keeps track of the node that contains the current
 *    max integer as it's data.
 * @returns {?number} The max int or null if none.
 */
    recursiveMax(runner = this.head, maxNode = this.head){
        if( this.isEmpty() ){
            return null;
        }
        if( ! runner ){
            return maxNode.data;
        }
        if( runner.data > maxNode.data ){
            return this.recursiveMax( runner.next, runner );
        }
        return this.recursiveMax( runner.next, maxNode );
    }

        /**
     * Reverses this list in-place without using any extra lists.
     * - Time: (?).
     * - Space: (?).
     * @returns {SinglyLinkedList} This list.
     */
    reverse() {
        if( this.isEmpty() || ! this.head.next ){
            return this;
        }
        let runner = this.head;
        while( runner.next ){
            runner.next.next = runner
        }

    }

    /**
     * Determines whether the list has a loop in it which would result in
     * infinitely traversing unless otherwise avoided. A loop is when a node's
     * next points to a node that is behind it.
     * - Time: (?).
     * - Space: (?).
     * @returns {boolean} Whether the list has a loop or not.
     */
    hasLoop() {
        if( this.isEmpty()){
            return false;
        }

        try{
            return this.hasLoopRecursive(this.head);
        }

        catch(err){
            console.log("infinite recursion")
            return true;
        }

    }

    hasLoopRecursive( node = this.head ){
        if( ! node ){
            return false;
        }
        return this.hasLoopRecursive( node.next );
    }




}



let list1 = new SinglyLinkedList();
list1.insertAtFront(89);
list1.insertAtFront(1);
list1.insertAtFront(7);
list1.insertAtFront(24);
list1.insertAtFront(5);
list1.insertAtFront(2);

let runner = list1.head;
for( let i = 0; i<4; i++){
    runner = runner.next
}
runner.next = list1.head.next;



console.log(list1.hasLoop());