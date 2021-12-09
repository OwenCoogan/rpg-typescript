import NewChampion from '../classes/champion.class'
export default class Knight extends NewChampion{

  protect(){
    this.protected =true;
    this.timedOut = true;
  }
}
