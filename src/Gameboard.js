const Ship = require('./Ship.js');

class Gameboard{
    constructor(dimension){
        this.dimension = dimension;
        this.board = this.createBoard(); 
        this.shipsList = []; 
    }

    createBoard(){
        let plateau = []; 
        for(let  i =0; i<this.dimension; i++){
            let row = []; 
            for(let j =0 ; j< this.dimension; j++){
                row.push({x: i, y: j, state : "empty", boat : null}); 
            }
            plateau.push(row); 
        }
        return plateau;  
    }

    place(ship, x, y, horizontal){
        if(horizontal == true){
            for( let i = x; i<x+ship.length; i++){
             this.board[i][y].boat=ship; 
             this.board[i][y].state = "ship";
            }  
        } else {
            for (let j = y; j<y+ship.length; j++){
                this.board[x][j].boat = ship; 
                this.board[x][j].state = "ship";
            }
        } 
        this.shipsList.push(ship); 
    }

    receiveAttack(x, y){
        if (this.board[x][y].boat instanceof Ship) { 
            this.board[x][y].boat.hit();
            this.board[x][y].state = "shipHit";
        } else {
            this.board[x][y].state = "missHit";
        }
    }

    areAllShipsSunk(){
        for (let i = 0; i<this.shipsList.length; i++){
            if(this.shipsList[i].isSunk()==false){
                return false; 
            }
        } 
        return true; 
    }
};

module.exports = Gameboard; 