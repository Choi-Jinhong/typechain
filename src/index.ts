import * as CyptoJS from 'crypto-js';

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    // static을 사용하지 않으면 Block을 선언한 후에 다음 메소드를 사욯할 수 있지만, 
    // static을 사용하게 되면 선언하지 않고도 사용이 가능하다.
    static calculateBlockHash = (index: number, preiousHash: string, timestamp: number, data: string)
    : string => CyptoJS.SHA256(index + preiousHash + timestamp + data).toString();

    constructor(index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number,
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock:Block = new Block(0, "221009f0shfoiadf", "", "Hello", 123456);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = () : Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
    const previousBlock : Block = getLatestBlock();
    const newIndex: number = previousBlock.index + 1;
    const newTimestamp: number = getNewTimeStamp();
    const newHash: string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
    const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);

    return newBlock;
}

console.log(createNewBlock("hello"), createNewBlock("bye bye"));

export { };