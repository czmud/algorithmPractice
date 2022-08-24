class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

export class Stack {
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