class Ship {
    length = 0; 
 

    constructor(length){
        this.length = length; 
        this.hitCount = 0; 
    }

    hit(){
        this.hitCount++; 
    }

    isSunk(){
        return this.hitCount>= this.length
    }
}

module.exports = Ship; 