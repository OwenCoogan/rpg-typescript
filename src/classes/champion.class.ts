export default class Champion {

  name:string;
  lifepoints:number;
  hitpoints:number;
  protected:boolean;
  constructor(name: string,lifepoints:number, hitpoints:number) {
    this.name = name;
    this.lifepoints = lifepoints;
    this.hitpoints = hitpoints;
    this.protected = false;
  }
  attack(opponent : Champion ){
    if( opponent.lifepoints <= 0 ){
      console.log('you\'re kicking a corpse idiot')
    }
    else{
      if(opponent.protected === true ){
        console.log(`${this.name} attacked & kicked ${opponent.name}.`);
        console.log(`${opponent.name} blocked the blow`);
      }
      else{
        console.log(`${opponent.name} had ${opponent.lifepoints} points`)
        opponent.lifepoints = opponent.lifepoints - this.hitpoints;
        console.log(`${this.name} attacked & kicked ${opponent.name}.`);
        if(opponent.lifepoints <= 0){
          console.log(`${opponent.name} is dead !`)
        }
        else{
          console.log(`${opponent.name} now has ${opponent.lifepoints} points`);
        }
      }

    }
  }
}
