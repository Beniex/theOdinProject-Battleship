import './style.css';
//import Ship from './src/Ship.js';
console.log('Hello World'); 

const Player = require('./Player.js');
const Gameboard = require('./Gameboard.js');
const Ship = require('./Ship.js'); 
const Game = require('./Game.js'); 
/*
let Player1 = new Player(true, prompt("Who's the first player?")); 
let Ordinateur = new Player(false, prompt("Who's the second player?"));
*/ 
let Player1 = new Player(true, "Benoit"); 
let Ordinateur = new Player(false, "Hal");
let game = new Game(Player1.playerName, Ordinateur.playerName);  
const ShipLengths = [1] ; /*[4, 3, 3, 2, 2, 2, 1, 1, 1, 1]; */



const HeaderElement = document.getElementById("header");
const ContainerGBElement = document.getElementById("containerGB"); 
const PlayerGBElement = document.getElementById("PlayerGB");
const OpponentGBElement = document.getElementById("OpponentGB"); 
const BottomElement = document.getElementById("Bottom");
const ButtonLeftElement = document.getElementById("buttonLeft"); 
const ButtonRightElement = document.getElementById("buttonRight");

const makeRandomAttack = (player) => {
    player.gameboard.receiveAttack(getRandomInt(9), getRandomInt(9)); 
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

const getRandomBoolean = () => {
    return Math.random()>0.5; 
}


const randomizeShipsPositions = (player) => {
    emptyGameboard(player); 
    for (let i = 0; i <ShipLengths.length; i++){
        let ship = new Ship(ShipLengths[i]);
        while (!player.gameboard.place(ship, getRandomInt(10), getRandomInt(10), getRandomBoolean())){
        }
    }
}

const emptyGameboard = (player) => {
    for (let i = 0; i<player.gameboard.board.length; i++){
        for (let j = 0; j<player.gameboard.board[i].length; j++){
            player.gameboard.board[i][j].state = "empty"; 
        }
    }
}

const updateBoxColor =(gameboardBox) => {
    switch (gameboardBox.state) {
        case "empty":
            return "skyblue"; 
        case "ship": 
            return "grey"; 
        case "shipHit": 
            return "red"; 
        case "missHit": 
            return "white"; 
    }
    
}



const updateGameboard = (gameboard, GBElement, isOpponentBoard) => {
    cleanGrid(GBElement); 
    for (let i = 0; i<gameboard.length; i++){
        let row = document.createElement("div"); 
        row.className = "row";
        for (let j = 0; j<gameboard[i].length; j++){
            let box = document.createElement("div");
            box.className = "box"; 
            box.style.backgroundColor = updateBoxColor(gameboard[i][j]);
            if(isOpponentBoard == true){
                if(box.style.backgroundColor == "grey"){
                    box.style.backgroundColor = "skyblue" ;
                }
            } 

            row.appendChild(box); 
        }
        GBElement.appendChild(row); 
    }
}

const attackMode  = (player, GBElement) => {
        cleanGrid(GBElement); 
    for (let i = 0; i<player.gameboard.board.length; i++){
        let row = document.createElement("div"); 
        row.className = "row";
        for (let j = 0; j<player.gameboard.board[i].length; j++){
            let box = document.createElement("div");
            box.className = "box"; 
            box.style.backgroundColor = updateBoxColor(player.gameboard.board[i][j]);
            if(box.style.backgroundColor == "grey"){
                    box.style.backgroundColor = "skyblue" ;
            }
            box.addEventListener('mouseover', () => {
               box.style.border = 'solid red 2px';});
            box.addEventListener('mouseout', () => {
               box.style.border = "solid black 2px";});
            box.addEventListener('click',function(){ 
                player.gameboard.receiveAttack(i,j);
                if (isGameOver(game)){
                    game.setGamePhase('endOfGame'); 
                } else {
                game.setGamePhase(Ordinateur.playerName); 
                updateDisplay(game);
                } 
            })
            row.appendChild(box); 
        }
        GBElement.appendChild(row); 
    }
}

const activateRandomizeButtons = () =>{
    ButtonRightElement.textContent = "randomize"; 
    ButtonRightElement.addEventListener('click', () =>{
        randomizeShipsPositions(Player1); 
        updateGameboard(Player1.gameboard.board, PlayerGBElement, false); 
    })
    ButtonLeftElement.textContent = "Ships Positions OK"; 
    ButtonLeftElement.addEventListener('click', () =>{
        game.setGamePhase(Player1.playerName); 
        updateDisplay(game); 
    })
}

const desactivateRandomizeButtons = () =>{
    ButtonRightElement.textContent = ""; 
    ButtonRightElement.addEventListener('click', () =>{
        console.log('buttonDead'); 
    })
    ButtonLeftElement.textContent = ""; 
    ButtonLeftElement.addEventListener('click', () =>{
        console.log('buttonDead'); 
    })
}

const updateDisplay = (game) =>{
    switch(game.phase){
        case "shipPlacement":
            activateRandomizeButtons(); 
            break; 
        case Player1.playerName :
            desactivateRandomizeButtons(); 
            HeaderElement.textContent = Player1.playerName + " joue !";  
            attackMode(Ordinateur, OpponentGBElement); 
            break; 
        case Ordinateur.playerName :
            HeaderElement.textContent = Ordinateur.playerName + " joue !";
            updateGameboard(Ordinateur.gameboard.board, OpponentGBElement, true); 
            setTimeout(() => {
                makeRandomAttack(Player1);
                updateGameboard(Player1.gameboard.board, PlayerGBElement, false);
            }, 100); 

            if (isGameOver(game)){
                game.setGamePhase('endOfGame'); 
            } else {
            game.setGamePhase(Player1.playerName); 
            updateDisplay(game);
            }   
            break; 
        case "endOfGame":
            console.log("game is over")
            if(Player1.gameboard.areAllShipsSunk()){
                HeaderElement.textContent = Ordinateur.playerName + " won!"; 
            } else if(Ordinateur.gameboard.areAllShipsSunk()){
                HeaderElement.textContent = Player1.playerName + " won! "
            }
    }

}

const isGameOver = () =>{
return (Player1.gameboard.areAllShipsSunk() || Ordinateur.gameboard.areAllShipsSunk())
}




const cleanGrid = (GBElement) => {
    while (GBElement.firstChild) {
        GBElement.removeChild(GBElement.firstChild);
    }
}



randomizeShipsPositions(Player1); 
randomizeShipsPositions(Ordinateur);
updateGameboard(Ordinateur.gameboard.board, OpponentGBElement, true); 
updateGameboard(Player1.gameboard.board, PlayerGBElement, false); 
updateDisplay(game); 
