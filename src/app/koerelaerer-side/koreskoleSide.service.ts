import {Tilbud} from '../Model/tilbud.model';
import {AuthService} from '../auth.service';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Injectable()
export class KoreskoleSideService {

  private brugernavn;
  private password;
  private samletString;
  private url: String = 'http://dist.saluton.dk:5401/koereskole_REST/webresources/generic/';
  private tilbuddene: Tilbud[] = new Array();
  tilbudChanged = new Subject<Tilbud[]>();

  constructor(private authService: AuthService, private http: Http, private router: Router) {

    this.brugernavn = this.authService.brugernavnAuth;
    this.password = this.authService.passwordAuth;
    this.samletString = this.brugernavn + ' ' + this.password;
    console.log('Samlet string: ' + this.samletString);
  }
  henttilbud() {
    this.http.post(this.url + 'tilbudKoreskole', this.samletString).subscribe(
      (response: Response) => {
        const data = response;
        const obj: Tilbud[] = JSON.parse(data.text());

        this.fraObjTilListen(obj);
      },
      (error) => console.log(error),
    );
    return this.tilbuddene;
  }
  hentTilbudMedIndex(index: number) {
    return this.tilbuddene[index];
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
    return this.http.post(this.url + 'opretTilbud', jsonStringArr).pipe(
      map(
        (response: Response) => {
          const data = response.text();
          console.log(data);
          return data;
        }
      )
    );
  }

  /*
  Man burde nok først køre følgende hvis man får et 1 tilbage:
  t.id = this.tilbuddene[id].id;
    this.tilbuddene[id] = t;
    Men det kan vi ikke pga. at metoden er PUT??? eller hva
    For det virker fint med DELETE og POST metoder
   */
  opdaterTilbudV2(id: number, t: Tilbud) {
    t.id = this.tilbuddene[id].id;
    this.tilbuddene[id] = t;
    this.tilbudChanged.next(this.tilbuddene.slice());
    const jsonTilbud: string = JSON.stringify(this.tilbuddene[id]);
    const stringArr: string[] = [this.brugernavn, this.password, this.tilbuddene[id].id, jsonTilbud];
    const jsonStringArr: string = JSON.stringify(stringArr);
    return this.http.put(this.url + 'aendreTilbud', jsonStringArr).pipe(
      map(
        (response: Response) => {
          const data = response.text();
          console.log(data);
          if (data.includes('1')) {
            // t.id = this.tilbuddene[id].id;
           // this.tilbuddene[id] = t;
           // this.tilbudChanged.next(this.tilbuddene.slice());
          }
          return data;
        }
      )
    );
  }

  sletTilbudV2(index: number) {
    const id: number = this.tilbuddene[index].id;
    const stringArr: string[] = [this.brugernavn, this.password, id];
    return this.http.delete(this.url + 'sletTilbud/' + id + '/' + this.brugernavn + '/' + this.password).pipe(
      map(
        (response: Response) => {
          const data = response.text();
          console.log(data);
          if (data.includes('1')) {
            this.tilbuddene.splice(index, 1);
            this.tilbudChanged.next(this.tilbuddene.slice());
          }
          return data;
        }
      )
    );
  }
}

