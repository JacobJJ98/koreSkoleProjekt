import {TilbudModel} from './tilbud.model';
import {TilgængeligedageModel} from './tilgængeligedage.model';
import {ngAppResolve} from '@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs';
import {TilbudTilBrugereModel} from './tilbudTilBrugere.model';

export class TilbudService {

  private tilg: TilgængeligedageModel = new TilgængeligedageModel(1, 1, 1, 1, 1, 0, 0);
  private tilbud1 = new TilbudTilBrugereModel();
  private tilbud2 = new TilbudTilBrugereModel();
  private tilbuddene: TilbudTilBrugereModel[];
  constructor() {
    this.tilbud1.tilbud.koreskole_id = 's175132';
    this.tilbud1.tilbud.pris = 13449;
    this.tilbud1.tilbud.korekort_type = 'A';
    this.tilbud1.tilbud.lynkursus = 1;
    this.tilbud1.tilbud.bilmaerke = 'Toyota';
    this.tilbud1.tilbud.bilstørrelse = 'Stor bil';
    this.tilbud1.tilbud.køn = 'kvinde';
    this.tilbud1.tilbud.beskrivelse = 'Hos os bliver du en god bilist';
    this.tilbud1.tilbud.tilgængeligedage = this.tilg;
    this.tilbud1.tilbud.id = 1234;

    this.tilbud1.koreskole.id = 's175132';
    this.tilbud1.koreskole.navn = 'Jacobs køreskole';
    this.tilbud1.koreskole.adresse = 'Toftebakken 15';
    this.tilbud1.koreskole.postnummer = 3790;
    // this.tilbud1.koreskole.telefonnummer 12345678;
    this.tilbud1.koreskole.mail = 'koreskolen@bæ.dk';

  this.tilbuddene = [this.tilbud1];
  }
  henttilbud() {
    return this.tilbuddene;
  }


}

