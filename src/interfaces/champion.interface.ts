import NewChampion  from '../classes/champion.class'

export interface Champion{
  name:string;
  lifepoints:number;
  hitpoints:number;
  protected:boolean;
  timedOut:boolean;
  attack(opponent : NewChampion): void;
}
