//import { Ship } from '../Ship.js';
const Ship = require('./Ship');

describe('Ship class', () => {
  test('Ship should register hits correctly', () => {
    const ship = new Ship(3); // Création d'un navire de longueur 3
    ship.hit();
    expect(ship.hitCount).toBe(1);
  });

  test('Ship should sink when hits equal length', () => {
    const ship = new Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
