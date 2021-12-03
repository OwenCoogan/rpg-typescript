import Champion from '../classes/champion.class'
export default class Knight extends Champion{

  protect(){
    this.protected =true;
    this.timedOut = true;
  }
}
