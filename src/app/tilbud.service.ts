import {TilgængeligeDage} from './tilgængeligedage.model';
import {ngAppResolve} from '@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs';
import {TilbudTilBrugere} from './tilbudTilBrugere.model';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {MyObjModel} from './myObj.model';

@Injectable()
export class TilbudService {

  private tilg: TilgængeligeDage = new TilgængeligeDage();
  private tilbud1 = new TilbudTilBrugere();
  private tilbud2 = new TilbudTilBrugere();
  private tilbuddeneV4: TilbudTilBrugere[] = new Array();
  private tilbuddene: TilbudTilBrugere[];
  private tilbuddene2: TilbudTilBrugere[];
  constructor(private http: Http) {
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
    this.tilbuddene2 = [this.tilbud1];
    this.tilbuddene2.push(this.tilbud1);
  }
  henttilbudTilBruger() {
    this.http.get('http://localhost:8080/koereskole_REST/webresources/generic/alleTilbud').subscribe(
      (response: Response) => {
        const data = response.text();
        console.log(data.toString());
        const obj: TilbudTilBrugere[] = JSON.parse(data.toString());
        console.log('obj[0]');
        console.log(obj[0].tilbud.koreskole_id);
        console.log(obj[1].koreskole.id);
        console.log(obj[2].tilbud.pris);
        console.log('obj[0]');
         for (let o = 0; o < obj.length; o++) {
          const tilll = new TilbudTilBrugere();
          // tilbud
          // tilll.tilbud.koreskole_id = obj[o].tilbud.koreskole_id;
          tilll.tilbud.pris = obj[o].tilbud.pris;
          tilll.tilbud.korekort_type = obj[o].tilbud.korekort_type;
          tilll.tilbud.lynkursus = obj[o].tilbud.lynkursus;
          tilll.tilbud.bilmaerke = obj[o].tilbud.bilmaerke;
          tilll.tilbud.bilstørrelse = obj[o].tilbud.bilstørrelse;
          tilll.tilbud.køn = obj[o].tilbud.køn;
          tilll.tilbud.beskrivelse = obj[o].tilbud.beskrivelse;
          tilll.tilbud.tilgængeligedage = obj[o].tilbud.tilgængeligedage;
          tilll.tilbud.id = obj[o].tilbud.id;
          // køreskole
          tilll.koreskole.id = obj[o].koreskole.id;
          tilll.koreskole.navn = obj[o].koreskole.navn;
          tilll.koreskole.adresse = obj[o].koreskole.adresse;
          tilll.koreskole.postnummer = obj[o].koreskole.postnummer;
          tilll.koreskole.telefonnummer = obj[o].koreskole.telefonnummer;
          tilll.koreskole.mail = obj[o].koreskole.mail;
          this.tilbuddeneV4.push(tilll);
          // this.tilbuddene.push(tilll);
        }
       // this.tilbuddene[0].tilbud.pris = obj[1].tilbud.pris;

       // this.tilbuddene = obj;
       // return obj;
        // this.lol = response.text().toString();
      },
      (error) => console.log(error),
    );
    return this.tilbuddeneV4;
  }
  hentTilbudMedId(index: number) {
    return this.tilbuddene[index];
  }


}

