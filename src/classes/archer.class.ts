import NewChampion from '../classes/champion.class'
export default class Archer extends NewChampion{
  doubleTap(opponent : NewChampion ){
    if(opponent.lifepoints <= 0){
      console.log('you\'re kicking a corpse idiot')
    }
    else{
      console.log(`${this.name} is preparing a critical hit on ${opponent.name}`);
      if(opponent.lifepoints >= 0 && opponent.protected === false){
      opponent.lifepoints = opponent.lifepoints - ( this.hitpoints * 2 )
      console.log(`${this.name} unleashed double tap & ${opponent.name} now has ${opponent.lifepoints}`)
      }
      else if(opponent.lifepoints <= 0){
        console.log(`${opponent.name} is dead !`)
      }
    }
    this.timedOut = true;
  }
}
