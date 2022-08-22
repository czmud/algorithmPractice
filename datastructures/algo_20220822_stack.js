class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
/**
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top and removed items are removed from the top.
 */
class Stack {
    /**
     * The constructor is executed when instantiating a new Stack() to construct
     * a new instance.
     * @returns {Stack} This new Stack instance is returned without having to
     *    explicitly write 'return' (implicit return).
     */
    constructor() {
        this.top = null;
        this.length = 0;
    }

    /**
     * Adds a new given item to the top of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top.
     * @returns {number} The new length of this stack.
     */
    push(item) {
        let newNode = new StackNode( item );
        newNode.next = this.top;
        this.top = newNode;
        return this.length++
    }

    /**
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item or undefined if this stack was empty.
     */
    pop() {
        if( this.isEmpty() ){
            return null;
        }
        let popTop = this.top;
        this.top = this.top.next;
        return popTop;
    }

    /**
     * Retrieves the top / last item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top / last item of this stack.
     */
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

    /**
     * Returns whether or not this stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        if( this.top ){
            return false;
        }
        return true;
    }

    /**
     * Returns the size of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
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

let stack1 = new Stack();
stack1.push(2);
stack1.push(52);
stack1.push(3);
stack1.push(53);
console.log(stack1.pop());
stack1.display();









