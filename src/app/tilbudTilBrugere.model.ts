import {Koreskole} from './koreskole.model';
import {Tilbud} from './tilbud.model';

export class TilbudTilBrugere {
  public koreskole: Koreskole;
  public tilbud: Tilbud;

  constructor() {
    this.koreskole = new Koreskole();
    this.tilbud = new Tilbud();
  }
}
