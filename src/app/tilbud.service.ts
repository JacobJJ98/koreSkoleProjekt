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
  private tilbuddeneV4: TilbudTilBrugere[] = new Array();
  constructor(private http: Http) {
  }
  henttilbudTilBruger() {
    this.http.get('http://localhost:8080/koereskole_REST/webresources/generic/getAlleTilbud').subscribe(
      (response: Response) => {
        const data = response.text();
        const obj: TilbudTilBrugere[] = JSON.parse(data.toString());
       console.log('GAMLE MÅDE ' + obj[0].tilbud.tilgangeligeDage.tilgangelig_mandag);

        this.tilbuddeneV4.splice(0, this.tilbuddeneV4.length);
        this.fraObjTilListen(obj);
      },
      (error) => console.log(error),
    );
    return this.tilbuddeneV4;
  }
  hentTilbudMedId(index: number) {
  }
  hentTilbudMedPostnummer(postnummer: number) {
    this.http.post('http://localhost:8080/koereskole_REST/webresources/generic/tilbudMedGiventPostnummer', postnummer).subscribe(
      (response: Response) => {
        const data = response.text();
        const obj: TilbudTilBrugere[] = JSON.parse(data.toString());
        console.log('DETTE ER BLEVET HENTET FRA SERVEREN MED GIVET POSTNUMMER: ' + data);

        this.tilbuddeneV4.splice(0, this.tilbuddeneV4.length);
        this.fraObjTilListen(obj);
      },
      (error) => console.log(error),
    );
  }
  fraObjTilListen(obj: TilbudTilBrugere[]) {
    const midlerArr: TilbudTilBrugere[] = [];
   // const midlArr = new TilbudTilBrugere[obj.length];
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
      midlerArr.push(tilll);
     this.tilbuddeneV4.push(tilll);
    }
  }

}


