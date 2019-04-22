import {TilgængeligedageModel} from '../tilgængeligedage.model';
import {TilbudModel} from '../tilbud.model';


export class Tilbud2Service {

  private tilg: TilgængeligedageModel = new TilgængeligedageModel(1, 1, 1, 1, 1, 0, 0);
  private tilbud1 = new TilbudModel;
  private tilbud2 = new TilbudModel;
  private tilbuddene: TilbudModel[];
  constructor() {
    this.tilbud1.koreskole_id = 's175132';
    this.tilbud1.pris = 13449;
    this.tilbud1.korekort_type = 'A';
    this.tilbud1.lynkursus = 1;
    this.tilbud1.bilmaerke = 'Toyota';
    this.tilbud1.bilstørrelse = 'Stor bil';
    this.tilbud1.køn = 'kvinde';
    this.tilbud1.beskrivelse = 'Hos os bliver du en god bilist';
    this.tilbud1.tilgængeligedage = this.tilg;
    this.tilbud1.id = 1234


    this.tilbud2.koreskole_id = 's175132';
    this.tilbud2.pris = 13449;
    this.tilbud2.korekort_type = 'xcvvA';
    this.tilbud2.lynkursus = 1;
    this.tilbud2.bilmaerke = 'Toyoxcvxta';
    this.tilbud2.bilstørrelse = 'Stoxcvr bil';
    this.tilbud2.køn = 'kvinde';
    this.tilbud2.beskrivelse = 'Hos os bliver xcvvvvvvvdu en god bixcvxlist';
    this.tilbud2.tilgængeligedage = this.tilg;
    this.tilbud2.id = 1234

    this.tilbuddene = [this.tilbud1,this.tilbud2];
  }
  henttilbud() {
    return this.tilbuddene;
  }
  hentTilbudMedIndex(index: number) {
    return this.tilbuddene[index];
  }


}

