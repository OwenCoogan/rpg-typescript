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
    console.log(`${opponent.name} had ${opponent.lifepoints} points`)
    opponent.lifepoints = opponent.lifepoints - this.hitpoints;
    console.log(`${this.name} attacked & kicked ${opponent.name}. ${opponent.name} now has ${opponent.lifepoints} points`)
  }
}
