import {KoreskoleModel} from './koreskole.model';
import {TilbudModel} from './tilbud.model';

export class TilbudTilBrugereModel {
  public koreskole: KoreskoleModel;
  public tilbud: TilbudModel;

  constructor() {
    this.koreskole = new KoreskoleModel();
    this.tilbud = new TilbudModel();
  }
}
