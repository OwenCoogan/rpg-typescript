import Knight from './classes/knight.class'
import Archer from './classes/archer.class'
import Mage from './classes/mage.class'

let newKnight : Knight  = new Knight("DumbDumb",20,6)
let newKnight1 : Knight  = new Knight("BumBum",20,6)
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
  const champions = [newKnight,newArcher,newMage,newKnight1];

    champions.forEach(champion => {
      if(i===champions.length){

        champion.attack(champions[0]);
        i=0;
      }
      else{
        champion === newArcher && champion.timedOut === false? newArcher.doubleTap(champions[i]) :champion.attack(champions[i])
        i=i+1;
      }
    });
}

const rounds = [1,2,3,4,5]
rounds.forEach(round => fightRound(round))
