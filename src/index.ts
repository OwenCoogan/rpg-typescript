import Knight from './classes/knight.class'
import Archer from './classes/archer.class'
import Mage from './classes/mage.class'

let newKnight : Knight  = new Knight("DumbDumb",20,6)
let newArcher : Archer  = new Knight("Badshot",20,5)
let newMage : Mage  = new Knight("Gandoulfe",20,4)

newKnight.attack(newArcher);
newMage.attack(newKnight);
newArcher.attack(newMage);

newKnight.attack(newArcher);
newMage.attack(newKnight);
newArcher.attack(newMage);

newKnight.attack(newArcher);
newMage.attack(newKnight);
newArcher.attack(newMage);

newKnight.attack(newArcher);
newMage.attack(newKnight);
newArcher.attack(newMage);

newKnight.attack(newArcher);
newMage.attack(newKnight);
newArcher.attack(newMage);
