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

/**
 * Removes the last node of this list.
 * - Time: O(?).
 * - Space: O(?).
 * @returns {any} The data from the node that was removed.
 */

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

/**
  * Determines whether or not the given search value exists in this list.
  * - Time: O(?).
  * - Space: O(?).
  * @param {any} val The data to search for in the nodes of this list.
  * @returns {boolean}
  */
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

/**
  * Determines whether or not the given search value exists in this list.
  * - Time: O(?).
  * - Space: O(?).
  * @param {any} val The data to search for in the nodes of this list.
  * @param {?ListNode} current The current node during the traversal of this list
  *    or null when the end of the list has been reached.
  * @returns {boolean}
  */
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
}

let list1 = new SinglyLinkedList();
console.log(list1.isEmpty());
list1.insertAtBack("all");
list1.insertAtBack("my");
list1.insertAtBack("life");
console.log(list1.removeFromBack());
list1.insertAtBack("I");
list1.insertAtBack("was");
list1.insertAtBack("waiting");
console.log(list1.isEmpty());

list1.removeFromFront();
list1.removeFromFront();
list1.removeFromFront();
list1.insertAtFront("grumpy")
list1.insertAtFront("bumpy")
list1.insertAtFront("mklumpy")
list1.insertAtFront("dumpy")

console.log(list1.toArr());

console.log(list1.removeFromBack());

console.log(list1.containsRecursive('bumpy'));
console.log(list1.containsRecursive('bumpys'));
