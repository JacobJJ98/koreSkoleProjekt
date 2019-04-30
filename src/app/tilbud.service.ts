import {TilgangeligeDage} from './Model/tilgængeligedage.model';
import {ngAppResolve} from '@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs';
import {TilbudTilBrugere} from './Model/tilbudTilBrugere.model';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {MyObjModel} from './Model/myObj.model';
import {Tilbud} from './Model/tilbud.model';
import {Koreskole} from './Model/koreskole.model';

@Injectable()
export class TilbudService {

  private tilg: TilgangeligeDage = new TilgangeligeDage();
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
    this.tilbud1.tilbud.bilmarke = 'Toyota';
    this.tilbud1.tilbud.bilstorrelse = 'Stor bil';
    this.tilbud1.tilbud.kon = 'kvinde';
    this.tilbud1.tilbud.beskrivelse = 'Hos os bliver du en god bilist';
    this.tilbud1.tilbud.tilgangeligeDage = this.tilg;
    this.tilbud1.tilbud.id = 1234;

    this.tilbud1.koreskole.id = 's175132';
    this.tilbud1.koreskole.navn = 'Jacobs køreskole';
    this.tilbud1.koreskole.adresse = 'Toftebakken 15';
    this.tilbud1.koreskole.postnummer = 3790;
//    this.tilbud1.koreskole.telefonnummer 12345678;
    this.tilbud1.koreskole.mail = 'koreskolen@bæ.dk';
    this.tilbuddene2 = [this.tilbud1];
    this.tilbuddene2.push(this.tilbud1);
  }
  henttilbudTilBruger() {
    this.http.get('http://localhost:8080/koereskole_REST/webresources/generic/getAlleTilbud').subscribe(
      (response: Response) => {
        const data = response.text();
       // console.log(data.toString());
        const obj: TilbudTilBrugere[] = JSON.parse(data.toString());
       console.log('GAMLE MÅDE ' + obj[0].tilbud.tilgangeligeDage.tilgangelig_mandag);
      //  var customer: ITilbudTilBruger[] = JSON.parse(data.toString()) as ITilbudTilBruger[];
      //  console.log(customer[0].tilbud.tilgangeligeDage.tilgangelig_fredag);
      //  console.log(customer[0].tilbud.tilgangeligeDage.tilgangelig_mandag);
      //  console.log(customer[0].tilbud.pris);
        this.fraObjTilListen(obj);
      },
      (error) => console.log(error),
    );
    return this.tilbuddeneV4;
  }
  hentTilbudMedId(index: number) {
    return this.tilbuddene[index];
  }
  hentTilbudMedPostnummer(postnummer: number) {
    this.http.post('http://localhost:8080/koereskole_REST/webresources/generic/tilbudMedGiventPostnummer', postnummer).subscribe(
      (response: Response) => {
        const data = response.text();
        console.log('DETTE ER BLEVET HENTET FRA SERVEREN MED GIVET POSTNUMMER: ' + data);
        return data.toString();
      },
      (error) => console.log(error),
    );
  }
  fraObjTilListen(obj: TilbudTilBrugere[]) {
    this.tilbuddeneV4.splice(0, this.tilbuddeneV4.length);
    for (let o = 0; o < obj.length; o++) {
      const tilll = new TilbudTilBrugere();
      // tilbud
      // tilll.tilbud.koreskole_id = obj[o].tilbud.koreskole_id;
      tilll.tilbud.pris = obj[o].tilbud.pris;
      tilll.tilbud.korekort_type = obj[o].tilbud.korekort_type;
      tilll.tilbud.lynkursus = obj[o].tilbud.lynkursus;
      tilll.tilbud.bilmarke = obj[o].tilbud.bilmarke;
      tilll.tilbud.bilstorrelse = obj[o].tilbud.bilstorrelse;
      tilll.tilbud.kon = obj[o].tilbud.kon;
      tilll.tilbud.beskrivelse = obj[o].tilbud.beskrivelse;
      tilll.tilbud.tilgangeligeDage = obj[o].tilbud.tilgangeligeDage;
      // oversætter alle dage fra int til string
      if (tilll.tilbud.tilgangeligeDage.tilgangelig_mandag === 1) {
        tilll.tilbud.tilgangeligeDage.tilgangeligstring_mandag = 'Mandag';
      } else {
        tilll.tilbud.tilgangeligeDage.tilgangeligstring_mandag = '';
      }
      if (tilll.tilbud.tilgangeligeDage.tilgangelig_tirsdag === 1) {
        tilll.tilbud.tilgangeligeDage.tilgangeligstring_tirsdag = ', Tirsdag';
      } else {
        tilll.tilbud.tilgangeligeDage.tilgangeligstring_tirsdag = '';
      }
      if (tilll.tilbud.tilgangeligeDage.tilgangelig_onsdag === 1) {
        tilll.tilbud.tilgangeligeDage.tilgangeligstring_onsdag = ', Onsdag';
      } else {
        tilll.tilbud.tilgangeligeDage.tilgangeligstring_onsdag = '';
      }
      if (tilll.tilbud.tilgangeligeDage.tilgangelig_torsdag === 1) {
        tilll.tilbud.tilgangeligeDage.tilgangeligstring_torsdag = ', Torsdag';
      } else {
        tilll.tilbud.tilgangeligeDage.tilgangeligstring_torsdag = '';
      }
      if (tilll.tilbud.tilgangeligeDage.tilgangelig_fredag === 1) {
        tilll.tilbud.tilgangeligeDage.tilgangeligstring_fredag = ', Fredag';
      } else {
        tilll.tilbud.tilgangeligeDage.tilgangeligstring_fredag = '';
      }
      if (tilll.tilbud.tilgangeligeDage.tilgangelig_lordag === 1) {
        tilll.tilbud.tilgangeligeDage.tilgangeligstring_lordag = ', Lørdag';
      } else {
        tilll.tilbud.tilgangeligeDage.tilgangeligstring_lordag = '';
      }
      if (tilll.tilbud.tilgangeligeDage.tilgangelig_sondag === 1) {
        tilll.tilbud.tilgangeligeDage.tilgangeligstring_sondag = ', Søndag';
      } else {
        tilll.tilbud.tilgangeligeDage.tilgangeligstring_sondag = '';
      }
      // her slutter oversættelse af dage!!
      tilll.tilbud.id = obj[o].tilbud.id;
      // køreskole
      tilll.koreskole.id = obj[o].koreskole.id;
      tilll.koreskole.navn = obj[o].koreskole.navn;
      tilll.koreskole.adresse = obj[o].koreskole.adresse;
      tilll.koreskole.postnummer = obj[o].koreskole.postnummer;
      tilll.koreskole.telefonnummer = obj[o].koreskole.telefonnummer;
      tilll.koreskole.mail = obj[o].koreskole.mail;
      this.tilbuddeneV4.push(tilll);
    }
  }

}

interface ITilbudTilBruger {
  koreskole: Koreskole;
  tilbud: Tilbud;
}

