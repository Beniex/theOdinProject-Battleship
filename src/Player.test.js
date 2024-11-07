const Player = require('./Player');

describe('Player Class', () => {
    test('Player should be created and have type "real"', () => {
      let Player1 = new Player(true); 
      expect(Player1.typeReal).toBe(true);
    });
}); 