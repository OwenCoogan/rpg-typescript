import Champion from '../classes/champion.class'
export default class Mage extends Champion{

heal(){
  this.lifepoints = this.lifepoints + 3;
  console.log(`${this.name} healed himself & now has ${this.lifepoints}`)
  this.timedOut = true;
  }
}
