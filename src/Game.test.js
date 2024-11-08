const Player = require('./Player');
const Game = require('./Game.js');

describe('Game Class', () => {
    test('Game should be created in phase shipPlacement', () => {
      let game = new Game();
      expect(game.phase).toBe("shipPlacement");
    });

    test('Game should be created in phase shipPlacement', () => {
        let game = new Game();
        expect(game.phase).toBe("shipPlacement");
      });

    test('Game should be created with possible phase benoit', () => {
        let game = new Game("benoit", "thierry");
        expect(game.GamePhases).toContain("benoit");
      });
    test('Game should be created with possible phase thierry', () => {
        let game = new Game("benoit", "thierry");
        expect(game.GamePhases).toContain("thierry");
      });

      test('Game should be created with possible phase thierry', () => {
        let game = new Game("benoit", "thierry");
        expect(game.GamePhases).toContain("thierry");
      });
      test('Game should be created with possible phase "endOfGame"', () => {
        let game = new Game("benoit", "thierry");
        expect(game.GamePhases).toContain("endOfGame");
      });






}); 