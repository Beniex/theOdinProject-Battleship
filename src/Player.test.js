const Gameboard = require('./Gameboard');
const Player = require('./Player');

describe('Player Class', () => {
    test('Player should be created and have type "real"', () => {
      let Player1 = new Player(true); 
      expect(Player1.isReal).toBe(true);
    });

    test('Player should be created and have gameboard of type Gameboard', () => {
      let Player1 = new Player(true); 
      expect(Player1.gameboard).toBeInstanceOf(Gameboard)
    });

    test('Player should be created and have name', () => {
      let Player1 = new Player(true, "benoit"); 
      expect(Player1.playerName).toBe("benoit"); 
    });
});
 