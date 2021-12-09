import Knight from './classes/knight.class'
import Archer from './classes/archer.class'
import Mage from './classes/mage.class'

let newKnight : Knight  = new Knight("DumbDumb",20,6)
let newArcher : Archer  = new Archer("Badshot",20,5)
let newMage : Mage  = new Mage("Gandoulfe",20,4)

let i= 1;

function fightRound(roundNumber:number) {
  console.log(`Fight Night : this is round ${roundNumber}`);

  if(newKnight.protected === false && newKnight.timedOut === false ){
    newKnight.protect();
  }

  if(newMage.lifepoints > 0 && newMage.timedOut === false){
    newMage.heal();
  }
  const champions = [newKnight,newArcher,newMage];

    champions.forEach(champion => {
      if(i===3){
        champion.attack(champions[0]);
        i=0;
      }
      else{
        champion.attack(champions[i]);
        i=i+1;
      }
    });
}

const rounds = [1,2,3,4,5]
rounds.forEach(round => fightRound(round))
