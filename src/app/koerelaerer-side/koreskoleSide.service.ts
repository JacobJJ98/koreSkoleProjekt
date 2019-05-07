import {TilgangeligeDage} from '../Model/tilgængeligedage.model';
import {Tilbud} from '../Model/tilbud.model';
import {AuthService} from '../auth.service';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {TilbudTilBrugere} from '../Model/tilbudTilBrugere.model';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Injectable()
export class KoreskoleSideService {

  private brugernavn;
  private password;
  private samletString;

  private tilg: TilgangeligeDage = new TilgangeligeDage();
  private tilbud1 = new Tilbud;
  private tilbud2 = new Tilbud;
  private tilbuddene: Tilbud[] = new Array();
  tilbudChanged = new Subject<Tilbud[]>();

  constructor(private authService: AuthService, private http: Http, private router: Router) {

    this.brugernavn = this.authService.brugernavnAuth;
    console.log('brugernavn: ' + this.brugernavn);
    this.password = this.authService.passwordAuth;
    console.log('password: ' + this.password);

    this.samletString = this.brugernavn + ' ' + this.password;
    console.log('Samlet string: ' + this.samletString);

   // this.henttilbud();

    this.tilbud1.koreskole_id = 's175132';
    this.tilbud1.pris = 6;
    this.tilbud1.korekort_type = 'A2';
    this.tilbud1.lynkursus = 1;
    this.tilbud1.bilmarke = 'Audi';
    this.tilbud1.bilstorrelse = 'mellem';
    this.tilbud1.kon = 'kvinde';
    this.tilbud1.beskrivelse = 'Hos os bliver du en god bilist';
    this.tilbud1.tilgangeligeDage.tilgangelig_mandag = 1;
    this.tilbud1.tilgangeligeDage.tilgangelig_tirsdag = 0;
    this.tilbud1.tilgangeligeDage.tilgangelig_onsdag = 0;
    this.tilbud1.tilgangeligeDage.tilgangelig_torsdag = 1;
    this.tilbud1.tilgangeligeDage.tilgangelig_fredag = 1;
    this.tilbud1.tilgangeligeDage.tilgangelig_lordag = 0;
    this.tilbud1.tilgangeligeDage.tilgangelig_sondag = 0;
    this.tilbud1.id = 1234;

    this.tilbud2.koreskole_id = 's175132';
    this.tilbud2.pris = 2;
    this.tilbud2.korekort_type = 'AM';
    this.tilbud2.lynkursus = 0;
    this.tilbud2.bilmarke = 'Honda';
    this.tilbud2.bilstorrelse = 'stor';
    this.tilbud2.kon = 'mand';
    this.tilbud2.beskrivelse = 'Hos os bliver xcvvvvvvvdu en god bixcvxlist';
    this.tilbud2.tilgangeligeDage.tilgangelig_mandag = 0;
    this.tilbud2.tilgangeligeDage.tilgangelig_tirsdag = 1;
    this.tilbud2.tilgangeligeDage.tilgangelig_onsdag = 1;
    this.tilbud2.tilgangeligeDage.tilgangelig_torsdag = 0;
    this.tilbud2.tilgangeligeDage.tilgangelig_fredag = 0;
    this.tilbud2.tilgangeligeDage.tilgangelig_lordag = 0;
    this.tilbud2.tilgangeligeDage.tilgangelig_sondag = 0;
    this.tilbud2.id = 1234;
    // this.tilbuddene = [this.tilbud1, this.tilbud2];
  }
  henttilbud() {

    this.http.post('http://localhost:8080/koereskole_REST/webresources/generic/getTilbudKoreskole', this.samletString).subscribe(
      (response: Response) => {
        const data = response;
       // console.log('hent Tilbud' + data.text());
        // console.log(data.text());
        const obj: Tilbud[] = JSON.parse(data.text());
       // console.log('Det hentede bilmærke: ' + obj[0].bilmarke);
       // console.log('Det hentede størrelse: ' + obj[0].bilstorrelse);
       // console.log('Det hentede lynkursus: ' + obj[0].lynkursus);
       // console.log('Det hentede køn: ' + obj[0].kon);
       // console.log('Det hentede pris: ' + obj[0].pris);
       // console.log('Det hentede ID: ' + obj[0].id);
       // console.log('Det hentede beskrivelse: ' + obj[0].beskrivelse);
       // console.log('Det hentede koreskoleID: ' + obj[0].koreskole_id);
       // console.log('Det hentede type: ' + obj[0].korekort_type);
       // console.log(obj[0].tilgangeligeDage);

        this.fraObjTilListen(obj);
      },
      (error) => console.log(error),
    );
    return this.tilbuddene;
  }
  hentTilbudMedIndex(index: number) {
    return this.tilbuddene[index];
  }
  // gammel metode
  addTilbud(tilbud: Tilbud) {
    // let svaret = false;
    this.tilbuddene.push(tilbud);
    this.tilbudChanged.next(this.tilbuddene.slice());
    // console.log('INDE FRA ADDTILBUD :');
    // console.log(tilbud);
    const jsonTilbud: string = JSON.stringify(tilbud);
    // console.log('EFTER PARSE: ' + jsonTilbud);
    const stringArr: string[] = [this.brugernavn, this.password, jsonTilbud];
    const jsonStringArr: string = JSON.stringify(stringArr);
    this.http.post('http://localhost:8080/koereskole_REST/webresources/generic/opretTilbud', jsonStringArr).subscribe(
      (response: Response) => {
        const data = response;
        // console.log('SVAR FRA SERVER: ' + data.text());
        this.henttilbud();
      },
      (error) => console.log(error),
    );
  }
  sletTilbud(indeks: number) {
    const id: number = this.tilbuddene[indeks].id;
    this.tilbuddene.splice(indeks, 1);
    this.tilbudChanged.next(this.tilbuddene.slice());
    const stringArr: string[] = [this.brugernavn, this.password, id];
    const jsonStringArr: string = JSON.stringify(stringArr);
    this.http.delete('http://localhost:8080/koereskole_REST/webresources/generic/sletTilbud/' + id + '/' + this.brugernavn + '/' + this.password).subscribe(
      (response: Response) => {
        const data = response;
        console.log('SVAR FRA SERVER: SLET----- ' + data.text());
        // this.henttilbud();
        this.router.navigate(['/korelaerer/minetilbud']);
      },
      (error) => console.log(error),
    );
  }
  opdaterTilbud(index: number, tilbud: Tilbud) {
    console.log('køn ' + tilbud.kon);
    console.log('bilmærke ' + tilbud.bilmarke);
    console.log('bilstørrelse ' + tilbud.bilstorrelse);
    console.log('kørekort type ' + tilbud.korekort_type);
    tilbud.id = this.tilbuddene[index].id;
    this.tilbuddene[index] = tilbud;
    this.tilbudChanged.next(this.tilbuddene.slice());

    const jsonTilbud: string = JSON.stringify(this.tilbuddene[index]);
    // console.log('EFTER PARSE: ' + jsonTilbud);
    const stringArr: string[] = [this.brugernavn, this.password, this.tilbuddene[index].id, jsonTilbud];
    const jsonStringArr: string = JSON.stringify(stringArr);
    console.log('BODYEN I VORES POST METODE SKAL VÆRE PUT: ' + jsonStringArr);

    this.http.put('http://localhost:8080/koereskole_REST/webresources/generic/aendreTilbud', jsonStringArr).subscribe(
      (response: Response) => {
        const data = response;
        console.log('SVAR FRA SERVER: UPDATE----- ' + data.text());
        // this.henttilbud();
        this.router.navigate(['/korelaerer/minetilbud']);
      },
      (error) => console.log(error),
    );

  }


  private fraObjTilListen(obj: Tilbud[]) {
    this.tilbuddene.splice(0, this.tilbuddene.length);
    for (let o = 0; o < obj.length; o++) {
      const tilbud = new Tilbud();
      // tilbud
      tilbud.koreskole_id = obj[o].koreskole_id;
      tilbud.pris = obj[o].pris;
      tilbud.korekort_type = obj[o].korekort_type;
      tilbud.lynkursus = obj[o].lynkursus;
      tilbud.bilmarke = obj[o].bilmarke;
      tilbud.bilstorrelse = obj[o].bilstorrelse;
      tilbud.kon = obj[o].kon;
      tilbud.beskrivelse = obj[o].beskrivelse;
      tilbud.tilgangeligeDage = obj[o].tilgangeligeDage;
      // oversætter alle dage fra int til string
      if (tilbud.tilgangeligeDage.tilgangelig_mandag === 1) {
       tilbud.tilgangeligeDage.tilgangeligstring_mandag = 'Mandag';
      } else {
        tilbud.tilgangeligeDage.tilgangeligstring_mandag = '';
      }
      if (tilbud.tilgangeligeDage.tilgangelig_tirsdag === 1) {
        tilbud.tilgangeligeDage.tilgangeligstring_tirsdag = ', Tirsdag';
      } else {
        tilbud.tilgangeligeDage.tilgangeligstring_tirsdag = '';
      }
      if (tilbud.tilgangeligeDage.tilgangelig_onsdag === 1) {
        tilbud.tilgangeligeDage.tilgangeligstring_onsdag = ', Onsdag';
      } else {
        tilbud.tilgangeligeDage.tilgangeligstring_onsdag = '';
      }
      if (tilbud.tilgangeligeDage.tilgangelig_torsdag === 1) {
       tilbud.tilgangeligeDage.tilgangeligstring_torsdag = ', Torsdag';
      } else {
        tilbud.tilgangeligeDage.tilgangeligstring_torsdag = '';
      }
      if (tilbud.tilgangeligeDage.tilgangelig_fredag === 1) {
        tilbud.tilgangeligeDage.tilgangeligstring_fredag = ', Fredag';
      } else {
        tilbud.tilgangeligeDage.tilgangeligstring_fredag = '';
      }
      if (tilbud.tilgangeligeDage.tilgangelig_lordag === 1) {
       tilbud.tilgangeligeDage.tilgangeligstring_lordag = ', Lørdag';
      } else {
        tilbud.tilgangeligeDage.tilgangeligstring_lordag = '';
      }
      if (tilbud.tilgangeligeDage.tilgangelig_sondag === 1) {
       tilbud.tilgangeligeDage.tilgangeligstring_sondag = ', Søndag';
      } else {
        tilbud.tilgangeligeDage.tilgangeligstring_sondag = '';
      }
      // her slutter oversættelse af dage!!
      tilbud.id = obj[o].id;
       this.tilbuddene.push(tilbud);
    }
   // console.log(this.tilbuddene);
  }

  addTilbudV2(tilbud1: Tilbud) {
    this.tilbuddene.push(tilbud1);
    this.tilbudChanged.next(this.tilbuddene.slice());
    const jsonTilbud: string = JSON.stringify(tilbud1);
    const stringArr: string[] = [this.brugernavn, this.password, jsonTilbud];
    const jsonStringArr: string = JSON.stringify(stringArr);
    return this.http.post('http://localhost:8080/koereskole_REST/webresources/generic/opretTilbud', jsonStringArr).pipe(
      map(
        (response: Response) => {
          const data = response.text();
          console.log(data);
          return data;
        }
      )
    );
  }
}

