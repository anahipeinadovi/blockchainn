
const Block = require('./block');

class Blockchain{
    
    //la dificultad se maneja con un conjunto de 3 0ś
    constructor(origin,difficulty = '000'){
        this.chain = [this.createFirstBlock(origin)];
        this.difficulty = difficulty;
    }


    createFirstBlock(origin){
        return new Block(0,origin);
    }

    getLastBlock(){
        return this.chain[this.chain.length-1];
    }


    addBlock(data){
        let previousBlock = this.getLastBlock();
        let newBlock= new Block (previousBlock.index+1, data, previousBlock.hash);
        newBlock.mine(this.difficulty);
        this.chain.push(newBlock);
    }


    




}

module.exports = Blockchain; 