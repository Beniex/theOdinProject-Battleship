import './style.css';
//import Ship from './src/Ship.js';
console.log('Hello World'); 

const Player = require('./Player.js');
const Gameboard = require('./Gameboard.js');

 
const HeaderElement = document.getElementById("header");
const ContainerGBElement = document.getElementById("containerGB"); 
const PlayerGBElement = document.getElementById("PlayerGB");
const OpponentGBElement = document.getElementById("OpponentGB"); 
const BottomElement = document.getElementById("Bottom");
const ButtonLeftElement = document.getElementById("buttonLeft"); 
const ButtonRightElement = document.getElementById("buttonRight");

/*
const createGrid = (GBElement) => {
    for(let i=0; i<10; i++){
        let box = document.createElement("div"); 
        box.addEventListener('click',function(){ 
            console.log("clicked!!");
        })
        GBElement.appendChild(box); 

    }

}
*/
ButtonLeftElement.addEventListener('click', () => update(Player1.gameboard.board, PlayerGBElement));
ButtonRightElement.addEventListener('click', () => update(Player1.gameboard.board, PlayerGBElement));

let Player1 = new Player(true); 
let Ordinateur = new Player(notReal)



const update = (gameboard, GBElement) => {
    for (let i = 0; i<gameboard.length; i++){
        let row = document.createElement("div"); 
        row.className = "row";
        for (let j = 0; j<gameboard[i].length; j++){
            let box = document.createElement("div");
            box.className = "box"; 
            box.addEventListener('click',function(){ 
                console.log("clicked!!, mon x est" + gameboard[i][j].x + "   et mon y est : " + gameboard[i][j].y);
            })
            row.appendChild(box); 
        }
        GBElement.appendChild(row); 
    }
}



const destroyGrid = (GBElement) => {
    while (GBElement.firstChild) {
        GBElement.removeChild(GBElement.firstChild); // Supprime chaque enfant un par un
    }
}
    
