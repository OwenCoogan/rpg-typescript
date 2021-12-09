import Knight from './classes/knight.class'
import Archer from './classes/archer.class'
import Mage from './classes/mage.class'

let newKnight : Knight  = new Knight("DumbDumb",20,6)
let newArcher : Archer  = new Archer("Badshot",20,5)
let newMage : Mage  = new Mage("Gandoulfe",20,4)


function fightRound(roundNumber:number){
  console.log(`Fight Night : this is round ${roundNumber}`)
  newKnight.attack(newArcher);
  newArcher.timedOut === true ? newArcher.attack(newMage) : newArcher.doubleTap(newMage)
  newMage.attack(newKnight);
  if(newKnight.protected === false && newKnight.timedOut === false ){
    newKnight.protect();
  }
  if(newMage.lifepoints > 0 && newMage.timedOut === false){
    newMage.heal();
  }
}

fightRound(1)
fightRound(2)
fightRound(3)
fightRound(4)
fightRound(5)
