const Block = require('./block');


//let block = new Block(0,"loque sea",null);


//console.log(block);

const   Blockchain = require('./blockchain');


const blockchain= new Blockchain("Hola a mi nueva cadena ")
blockchain.addBlock("data del segundo bloque ");
blockchain.addBlock("data del tercer bloque ");
blockchain.addBlock("data del tercer bloque ");



console.log(blockchain);

















