import { Champion } from '../interfaces/champion.interface'

export default class NewChampion implements Champion {
  name:string;
  lifepoints:number;
  hitpoints:number;
  protected:boolean;
  timedOut:boolean;

  constructor(name: string,lifepoints:number, hitpoints:number) {
    this.name = name;
    this.lifepoints = lifepoints;
    this.hitpoints = hitpoints;
    this.protected = false;
    this.timedOut = false;
  }
  attack(opponent : NewChampion ): void{
    if(this.lifepoints > 0) {
      if( opponent.lifepoints <= 0 ) {
        console.log('you\'re kicking a corpse idiot')
      }
      else {
        if (opponent.protected === true ){
          console.log(`${this.name} attacked & kicked ${opponent.name}.`);
          console.log(`${opponent.name} blocked the blow`);
          opponent.protected = false;
        }
        else {
          console.log(`${opponent.name} had ${opponent.lifepoints} points`)
          opponent.lifepoints = opponent.lifepoints - this.hitpoints;
          console.log(`${this.name} attacked & kicked ${opponent.name}.`);
          this.timedOut = !this.timedOut;
          if (opponent.lifepoints <= 0){
            console.log(`${opponent.name} is dead !`)
          }
          else {
            console.log(`${opponent.name} now has ${opponent.lifepoints} points`);
          }
        }
      }
    }
    else {
      console.log('dead character cannot attack')
    }
  }
}
