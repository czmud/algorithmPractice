class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {

    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(item) {
        let newNode = new StackNode( item );
        newNode.next = this.top;
        this.top = newNode;
        return this.length++
    }

    pop() {
        if( this.isEmpty() ){
            return null;
        }
        let popTop = this.top;
        this.top = this.top.next;
        return popTop;
    }

    peek() {
        return this.top;
    }

    peekAtIndex(index){
        if(this.length < index){
            return null;
        }

        let nextNode = this.top;
        for(let i = 0; i < index; i++){
            nextNode = nextNode.next;
        }
        return nextNode;
    }

    isEmpty() {
        if( this.top ){
            return false;
        }
        return true;
    }

    size() {
        return this.length
    }
    display(){
        if( this.isEmpty() ){
            console.log( "This stack is empty");
        }
        console.log("Top: " + this.top.data)
        let nextNode = this.top.next;
        let itemIndex = 1
        while(nextNode){
            console.log("Item " + itemIndex + ": "+nextNode.data)
            nextNode = nextNode.next;
            itemIndex++;
        }
    }
}

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

    isEmpty() {
        return !this.head;
    }
    
    enqueue(val) { 
        let newNode = new QueueNode(val);
        if(this.isEmpty()){
            this.tail = newNode;
            this.head = this.tail
            return this.size++;
        }

        if( this.tail.next ){this.refreshQueue()}
        
        this.tail.next = newNode;
        this.tail = newNode;
        return this.size++;
    }

    dequeue() {
        if(this.isEmpty){
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

    front() {
        return this.head;
    }

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



    convertToStackOfNodes(){
        if( this.isEmpty() ){
            return null;
        }
        let runner = this.head;
        let returnStack = new Stack();
        while( runner ){
            returnStack.push(runner);
            runner = runner.next;
        }
        return returnStack;
    }

    findIntersections(q2){
        if(this.isEmpty() || q2.isEmpty() ){
            return null;
        }
        let stack1 = this.convertToStackOfNodes();
        let stack2 = q2.convertToStackOfNodes();

        let returnNode = null;
        let runner1 = stack1.top;
        let runner2 = stack2.top;
        while(runner1 && runner2){
            if(runner1.data === runner2.data ){
                returnNode = runner1.data;
            } else {
                return returnNode;
            }
            runner1 = runner1.next;
            runner2 = runner2.next;
        }
        return returnNode;
    }

    enqueueNode( addNode ){
        if(this.isEmpty()){
            this.tail = addNode;
            this.head = this.tail
        } else {
            if( this.tail.next ){this.refreshQueue()}
            this.tail.next = addNode;
        }
        
        this.size++;
        let addRunner = addNode;
        while(addRunner.next){
            this.size++;
            addRunner = addRunner.next;
        }

        this.tail = addRunner;
        return this.size;
    }

    refreshQueue(){
        // check if tail.next points to something
        // if it does, then it is not a true tail and we need to traverse to true tail of the queue
        if( !this.tail.next ){
            return
        }

        let runner = this.tail;
        while( runner.next ){
            runner = runner.next;
            this.size++;
        }
        this.tail = runner;
    }

    findIntersectionsForAlfredo(q2){
        if( this.isEmpty() || q2.isEmpty() ){
            return null;
        }
        if( this.tail.next ){this.refreshQueue()}
        if( q2.tail.next ){q2.refreshQueue()}

        let runner1 = this.head;
        let runner2 = q2.head;

        if( this.size > q2.size ){
            for( let i = 0; i<this.size-q2.size; i++ ){
                runner1 = runner1.next;
            }
        } else {
            for( let i = 0; i<q2.size-this.size; i++){
                runner2 = runner2.next;
            }
        }

        while( runner1 ){
            if( runner1 === runner2 ){
                return runner1;
            }
            runner1 = runner1.next;
            runner2 = runner2.next;
        }
        return null;
    }

}

// Test Cases
let queue1 = new Queue();
let queue2 = new Queue();

queue1.seed([0,1,2,3,4]);
queue2.seed([20,21,22,23]);


let runner1 = queue1.head;
for(let i = 0; i<3; i++){
    runner1 = runner1.next;
}
queue2.enqueueNode( runner1 );

queue1.seed([5, 6, 7]);
queue2.seed([55, 56, 57]);

// queue2.refreshQueue();

console.log(queue1.size)
console.log(queue2.size)

console.log(queue1.findIntersectionsForAlfredo(queue2));
