import {TilgangeligeDage} from '../Model/tilgængeligedage.model';
import {Tilbud} from '../Model/tilbud.model';


export class Tilbud2Service {

  private tilg: TilgangeligeDage = new TilgangeligeDage();
  private tilbud1 = new Tilbud;
  private tilbud2 = new Tilbud;
  private tilbuddene: Tilbud[];
  constructor() {
    this.tilbud1.koreskole_id = 's175132';
    this.tilbud1.pris = 13449;
    this.tilbud1.korekort_type = 'A';
    this.tilbud1.lynkursus = 1;
    this.tilbud1.bilmarke = 'Toyota';
    this.tilbud1.bilstorrelse = 'Stor bil';
    this.tilbud1.kon = 'kvinde';
    this.tilbud1.beskrivelse = 'Hos os bliver du en god bilist';
    this.tilbud1.tilgangeligeDage = this.tilg;
    this.tilbud1.id = 1234;

    this.tilbud2.koreskole_id = 's175132';
    this.tilbud2.pris = 13449;
    this.tilbud2.korekort_type = 'xcvvA';
    this.tilbud2.lynkursus = 1;
    this.tilbud2.bilmarke = 'Toyoxcvxta';
    this.tilbud2.bilstorrelse = 'Stoxcvr bil';
    this.tilbud2.kon = 'kvinde';
    this.tilbud2.beskrivelse = 'Hos os bliver xcvvvvvvvdu en god bixcvxlist';
    this.tilbud2.tilgangeligeDage = this.tilg;
    this.tilbud2.id = 1234;

    this.tilbuddene = [this.tilbud1, this.tilbud2];
  }
  henttilbud() {
    return this.tilbuddene;
  }
  hentTilbudMedIndex(index: number) {
    return this.tilbuddene[index];
  }
  addTilbud(tilbud: Tilbud) {
    this.tilbuddene.push(tilbud);
  }


}

