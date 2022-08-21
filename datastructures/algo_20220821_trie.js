class TrieNode {
    constructor() {
        this.children = {};
        this.isCompleteWord = false;
    }
}

class Trie {
    constructor(){
        this.root = new TrieNode();
    }

    insertWord( word ){
        let currentNode = this.root;
        let currentLetter;
        
        for( let i = 0; i < word.length; i++ ) {
            currentLetter = word[i];
            if( ! currentNode.children[ currentLetter ] ) {
                currentNode.children[ currentLetter ] = new TrieNode();
            }
            currentNode = currentNode.children[ currentLetter ];
        }
        currentNode.isCompleteWord = true;
    }

    isPrefixValid( prefix ) {
        let runner = this.root;
        for( let i = 0; i < prefix.length; i++ ){
            if( ! runner.children[ prefix[i] ] ){
                return false;
            } 
            runner = runner.children[ prefix[i] ];
        }
        return true;
    }

    isWordValid( word ) {
        let runner = this.root;
        for( var i = 0; i < word.length; i++ ){
            if( runner.children[ word[i] ] ){

            }
        }
        if( currentNode.isCompleteWord ){
            return true;
        }
    }

    printAllKeys( node = this.root, wordString = "" ) {
        if( node.isCompleteWord ){
            console.log(wordString);
        }
        for ( let [ nextLetter, nextNode ] of Object.entries(node.children) ){
            this.printAllKeys( nextNode, wordString + nextLetter );
        }
    }

}

let trie1 = new Trie();

trie1.insertWord("car");
trie1.insertWord("card");
trie1.insertWord("cards");
trie1.insertWord("chip");
trie1.insertWord("trie");
trie1.insertWord("try");
trie1.insertWord("alabama");
trie1.insertWord("salmon");

console.log(trie1);

trie1.printAllKeys();
