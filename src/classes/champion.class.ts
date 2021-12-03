export default class Champion {

  name:string;
  lifepoints:number;
  hitpoints:number;
  constructor(name: string,lifepoints:number, hitpoints:number) {
    this.name = name;
    this.lifepoints = lifepoints;
    this.hitpoints = hitpoints;
  }
  attack(opponent : Champion ){
    if( opponent.lifepoints <= 0 ){
      console.log('you\'re kicking a corpse idiot')
    }
    else{
      console.log(`${opponent.name} had ${opponent.lifepoints} points`)
      opponent.lifepoints = opponent.lifepoints - this.hitpoints;
      console.log(`${this.name} attacked & kicked ${opponent.name}. ${opponent.name} now has ${opponent.lifepoints} points`);
      if(opponent.lifepoints <= 0){
        console.log(`${opponent.name} is dead !`)
      }
    }
  }
}
