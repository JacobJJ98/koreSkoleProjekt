import {TilbudModel} from './tilbud.model';
import {TilgængeligedageModel} from './tilgængeligedage.model';

export class TilbudService {

  private tilg: TilgængeligedageModel = new TilgængeligedageModel(1, 1, 1, 1, 1, 0, 0);
  private tilbud: TilbudModel[] = [
    new TilbudModel(
      's175132',
      9499,
      'A',
      0,
    'Opel',
    'Stor bil',
    'Mand',
    'Tilbuddet gælder i 2 uger, så skynd jer!',
    this.tilg,
    12345),
    new TilbudModel(
      's175132',
      9499,
      'A',
      0,
      'Opel',
      'Stor bil',
      'Mand',
      'Tilbuddet gælder i 2 uger, så skynd jer!',
      this.tilg,
      12345)];
  constructor() {
  }

  getTilbud() {
    this.tilbud[0]._mail = 'hej@koreskole.dk';
    this.tilbud[1]._mail = 'hejhej@koreskole.dk';
    this.tilbud[0]._mobilnummer = 12345678;
    this.tilbud[1]._mobilnummer = 87654321;
    return this.tilbud;
  }
}

