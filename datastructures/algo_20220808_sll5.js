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

/**
 * Retrieves the data of the second to last node in this list.
 * - Time: O(?).
 * - Space: O(?).
 * @returns {any} The data of the second to last node or null if there is no
 *    second to last node.
 */
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

/**
  * Removes the node that has the matching given val as it's data.
  * - Time: O(?).
  * - Space: O(?).
  * @param {any} val The value to compare to the node's data to find the
  *    node to be removed.
  * @returns {boolean} Indicates if a node was removed or not.
*/
// only removes first value found
    removeVal(val) {
        if ( this.isEmpty() ) {
            return false;
        }
        if( this.head.data == val ){
            this.head = this.head.next;
            return true;
        }
        let runner = this.head;
        while ( runner.next && runner.next.data != val ){
            runner = runner.next;
        }
        if ( runner.next && runner.next.data == val ){
            runner.next = runner.next.next;
            return true;
        }
        return false;
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

list1.display();
console.log("---");
console.log("---");
console.log(list1.removeVal("dumpyd"));
console.log("---");
console.log("---");

list1.display();
