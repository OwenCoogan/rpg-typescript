import Knight from '../src/classes/knight.class'
import Archer from '../src/classes/archer.class'
import Mage from '../src/classes/mage.class'

describe("Champion", () => {
  let knight: Knight = new Knight("DumbDumb Morty",19,6)

  let deadKnight: Knight = new Knight("DumbDumb Morty",0,5)
  let archer: Archer = new Archer("PhoenixPerson",19,4)
  let mage: Mage = new Mage("Rick Sanchez",10,4)

  test('cannot hit a dead character', () => {
    knight.attack(deadKnight)
    expect(deadKnight.lifepoints).toBe(0)
  });
  test('attack should take away points', () => {
    knight.attack(archer)
    expect(archer.lifepoints).toBe(13);
  });
  test('should properly switch between timedOut true & false for ', () => {

    expect(archer.timedOut).toBe(false);
    archer.attack(knight);
    expect(knight.lifepoints).toBe(15);

    expect(archer.timedOut).toBe(true);
    archer.attack(knight);
    expect(knight.lifepoints).toBe(11);

    expect(archer.timedOut).toBe(false);

  });

  test('mage should be able to restore points', () => {
    expect(mage.lifepoints).toBe(10);
    mage.heal();
    expect(archer.lifepoints).toBe(13);
  });

})
