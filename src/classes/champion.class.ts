export default class Champion {

  name:string;
  lifepoints:number;
  constructor(name: string,lifepoints:number) {
    this.name = name;
    this.lifepoints = lifepoints;
  }
  attack(){
    console.log("attack")
  }
}
