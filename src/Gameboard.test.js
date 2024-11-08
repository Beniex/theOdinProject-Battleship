
const Gameboard = require('./Gameboard.js');
const Ship = require('./Ship.js');

describe('Gameboard class', () => {
    test('Gameboard should be a array of length 8', () => {
      const GameboardTest = new Gameboard(8); 
      expect(GameboardTest.board.length).toBe(8);
    });
    test('Gameboard should be a array of arrays of length 11', () => {
        const GameboardTest = new Gameboard(11); 
        expect(GameboardTest.board[2].length).toBe(11);
      });
    test('a Gameboard case should have an attribute x equal to its row position ', () => {
        const GameboardTest = new Gameboard(8); 
        expect(GameboardTest.board[2][3].x).toBe(2);
      });
    test('a Gameboard case should have an attribute y equal to its column position ', () => {
        const GameboardTest = new Gameboard(8); 
        expect(GameboardTest.board[2][3].y).toBe(3);
      });
    test('a Gameboard case should have an attribute state equal to "empty" ', () => {
        const GameboardTest = new Gameboard(8); 
        expect(GameboardTest.board[2][3].state).toBe("empty");
      });
    test('a Gameboard case should have an attribute boat equal to null ', () => {
        const GameboardTest = new Gameboard(8); 
        expect(GameboardTest.board[2][3].boat).toBe(null);
      });
      
    describe('Gameboard class place function', () => {

        test('a Gameboard case should have an attribute boat equal to ship1 ', () => {
            const GameboardTest = new Gameboard(8); 
            let ship1 = new Ship(2); 
            GameboardTest.place(ship1,2,3);
            expect(GameboardTest.board[2][3].boat).toBe(ship1);
        });
        test('the ship should be placed horizontally ', () => {
            const GameboardTest = new Gameboard(8); 
            let ship1 = new Ship(2); 
            GameboardTest.place(ship1,2,3, true);
            expect(GameboardTest.board[3][3].boat).toBe(ship1);
        });
        test('the ship should be placed vertically ', () => {
            const GameboardTest2 = new Gameboard(8); 
            let ship2 = new Ship(2); 
            GameboardTest2.place(ship2,2,3, false);
            expect(GameboardTest2.board[2][3].boat).toBe(ship2);
        });

        test('the ship should be placed vertically on 2 cases', () => {
            const GameboardTest2 = new Gameboard(8); 
            let ship2 = new Ship(2); 
            GameboardTest2.place(ship2,2,3, false);
            expect(GameboardTest2.board[2][4].boat).toBe(ship2);
        });

        test('the ship should be placed vertically on 4 cases', () => {
            const GameboardTest2 = new Gameboard(8); 
            let ship2 = new Ship(4); 
            GameboardTest2.place(ship2,2,1, false);
            expect(GameboardTest2.board[2][4].boat).toBe(ship2);
        });

        test('the case onwhich the ship is placed should have a state of "ship"', () => {
          const GameboardTest2 = new Gameboard(8); 
          let ship2 = new Ship(4); 
          GameboardTest2.place(ship2,2,1, false);
          expect(GameboardTest2.board[2][4].state).toBe("ship");
      });
        test('place fonction should return a truthy if a ship is placed"', () => {
          const GameboardTest2 = new Gameboard(8); 
          let ship2 = new Ship(4); 
          expect(GameboardTest2.place(ship2,2,1, false)).toBe(true);
      });
      test('place fonction should return a falsy if a ship is placed where a ship is already present"', () => {
        const GameboardTest2 = new Gameboard(8); 
        let ship2 = new Ship(4); 
        GameboardTest2.place(ship2,2,1, false);
        let ship1 = new Ship(1); 
        expect(GameboardTest2.place(ship1,2,1, false)).toBe(false);
       });

       test('place fonction should return a falsy if a ship is placed where a ship is already present"', () => {
        const GameboardTest2 = new Gameboard(8); 
        let ship2 = new Ship(4); 
        GameboardTest2.place(ship2,2,1, false);
        let ship1 = new Ship(1); 
        expect(GameboardTest2.place(ship1,2,4, false)).toBe(false);
       });
    });

    describe('Gameboard class receiveAttack function', () => {

        test('a Gameboard should receive an attack on case 5,7 and register a missHit', () => {
            const GameboardTest = new Gameboard(8); 
            GameboardTest.receiveAttack(5,7);
            expect(GameboardTest.board[5][7].state).toBe("missHit");
        }); 

        test('a Gameboard should receive an attack on case 2,1 and ship2 should register this hit', () => {
            const GameboardTest1 = new Gameboard(9); 
            let ship3 = new Ship(2); 
            GameboardTest1.place(ship3, 2, 1, false);
            GameboardTest1.receiveAttack(2,1);
            expect(ship3.hitCount).toBe(1);
        }); 


        test('a Gameboard should receive an attack on case 2,1 on which is ship3 and it should be sunk', () => {
          const GameboardTest1 = new Gameboard(9); 
          let ship3 = new Ship(1); 
          GameboardTest1.place(ship3, 2, 1, false);
          GameboardTest1.receiveAttack(2,1);
          expect(ship3.isSunk()).toBe(true);
      }); 

      test('a Gameboard should receive an attack on case 2,1 on which is ship3 and the case state should be shipHit', () => {
        const GameboardTest1 = new Gameboard(9); 
        let ship3 = new Ship(1); 
        GameboardTest1.place(ship3, 2, 1, false);
        GameboardTest1.receiveAttack(2,1);
        expect(GameboardTest1.board[2][1].state).toBe("shipHit");
    }); 
  }); 

  describe('Gameboard class allShipsSunk function', () => {

      test('a Gameboard should return a boolean to check if all ships on it are sunk', () => {
          const GameboardTest = new Gameboard(8); 
          let ship3 = new Ship(1); 
          GameboardTest.place(ship3, 2, 1, false);
          GameboardTest.receiveAttack(2,1);
          let ship4 = new Ship(2); 
          GameboardTest.place(ship4, 3, 4, true);
          GameboardTest.receiveAttack(3,4);
          GameboardTest.receiveAttack(4,4);

          expect(GameboardTest.areAllShipsSunk()).toBe(true);
      }); 


  }); 
}); 
    

