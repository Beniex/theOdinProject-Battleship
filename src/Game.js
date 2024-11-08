const Gameboard = require('./Gameboard.js');
const Ship = require('./Ship.js');

class Game {
    constructor(Player1Name, Player2Name){
        this.phase = "shipPlacement";  
        this.GamePhases = ["shipPlacement", Player1Name, Player2Name, "endOfGame"]; 
    }

    setGamePhase(nextGamePhase){
        this.phase = nextGamePhase; 
    }

}

module.exports = Game; 