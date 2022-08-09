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
        return;
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

}



let list1 = new SinglyLinkedList();
list1.insertAtFront(89);
list1.insertAtFront(1);
list1.insertAtFront(7);
list1.insertAtFront(24);
list1.insertAtFront(5);
list1.insertAtFront(2);


list1.display();
console.log("---")

list1.moveMinToFront();
console.log("---")
list1.display();
list1.moveMinToFront();
console.log("---")
list1.display();

list1.prepend(17,89);
list1.prepend(12,89);
console.log("---")
list1.display();