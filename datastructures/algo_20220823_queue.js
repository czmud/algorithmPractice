class QueueNode {
    constructor(data) {
        this.data = data;
        this.next =  null;
    }
}

class Queue {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    
    /**
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if the list is empty.
     */
    isEmpty() {
        return !this.size;
    }
    
    /**
    * Adds a given val to the back of the queue.
    * - Time: O(1) constant.
    * - Space: O(1) constant.
    * @param {any} val
    * @returns {number} The new size of the queue.
    */
    enqueue(val) { 
        let newNode = new QueueNode(val);
        if(this.isEmpty()){
            this.tail = newNode;
            this.head = this.tail
            return this.size++;
        }
        
        this.tail.next = newNode;
        this.tail = newNode;
        return this.size++;
    }

    // Which is the conventional direction for our pointers in a queue?
    // (T) -> (n2) -> (n1) -> (H)
    // (T) <- (n2) <- (n1) <- (H)

    /**
    * - Time: O(1) constant.
    * - Space: O(1) constant.
    * @returns {any} The removed item.
    */
    dequeue() {
        if(this.isEmpty()){
            return null;
        }

        let oldHead = this.head;
        this.head = this.head.next;
        
        this.size--;
        if( this.size < 1 ){
            this.tail = null;
        }
        return oldHead;
    }

    /**
    * Retrieves the first item without removing it.
    * - Time: O(1) constant.
    * - Space: O(1) constant.
    * @returns {any} The first item.
    */
    front() {
        return this.head;
    }

    /**
    * Determines if the given item is in the queue.
    * - Time: O(n) linear.
    * - Space: O(1) constant.
    * @param {any} searchVal
    * @returns {boolean}
    */
    contains(searchVal) {
        let runner = this.head;
        while(runner){
            if( searchVal === runner.data ){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    /**
    * Enqueues each of the given items.
    * - Time: O(n) linear since enqueue is O(1), n = vals.size.
    * - Space: O(1) constant.
    * @param {Array<any>} vals
    */
    seed(vals) { 
        for(let i = 0; i < vals.length; i++ ){
            this.enqueue(vals[i]);
        }
    }

    display(){
        if( this.isEmpty() ){
            console.log("This queue is empty")
            return;
        }
        let index = 0;
        let runner = this.head
        console.log("Head "+index+": "+runner.data);
        if( this.head.next ){
            runner = runner.next;
            index++;
            while( runner.next ){
                console.log("Node "+index+": "+runner.data);
                runner = runner.next;
                index++;
            }
        }
        console.log("Tail "+index+": "+runner.data);
    }
}

export default Queue;