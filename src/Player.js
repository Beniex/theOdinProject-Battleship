const Gameboard = require('./Gameboard.js');
const Ship = require('./Ship.js');

class Player {
    constructor(isReal, playerName){
        this.isReal = isReal; 
        this.gameboard = new Gameboard(10); 
        this.playerName = playerName; 
    }

}

module.exports = Player; 