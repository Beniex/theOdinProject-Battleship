const Gameboard = require('./Gameboard.js');
const Ship = require('./Ship.js');

class Player {
    constructor(typeReal){
        this.typeReal = typeReal; 
        this.gameboard = new Gameboard(10); 
    }

}

module.exports = Player; 