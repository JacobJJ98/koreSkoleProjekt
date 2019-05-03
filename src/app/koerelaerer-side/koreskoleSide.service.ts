import {TilgangeligeDage} from '../Model/tilgængeligedage.model';
import {Tilbud} from '../Model/tilbud.model';
import {AuthService} from '../auth.service';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class KoreskoleSideService {

  private brugernavn;
  private password;
  private samletString;

  private tilg: TilgangeligeDage = new TilgangeligeDage();
  private tilbud1 = new Tilbud;
  private tilbud2 = new Tilbud;
  private tilbuddene: Tilbud[];
  constructor(private authService: AuthService, private http: Http) {

    this.brugernavn = this.authService.brugernavnAuth;
    console.log('brugernavn: ' + this.brugernavn);
    this.password = this.authService.passwordAuth;
    console.log('password: ' + this.password);

    this.samletString = this.brugernavn + ' ' + this.password;
    console.log('Samlet string: ' + this.samletString);

    this.henttilbud();

    this.tilbud1.koreskole_id = 's175132';
    this.tilbud1.pris = 6;
    this.tilbud1.korekort_type = 'A';
    this.tilbud1.lynkursus = 1;
    this.tilbud1.bilmarke = 'Toyota';
    this.tilbud1.bilstorrelse = 'Stor bil';
    this.tilbud1.kon = 'kvinde';
    this.tilbud1.beskrivelse = 'Hos os bliver du en god bilist';
    this.tilbud1.tilgangeligeDage = this.tilg;
    this.tilbud1.id = 1234;

    this.tilbud2.koreskole_id = 's175132';
    this.tilbud2.pris = 2;
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

    this.http.post('http://localhost:8080/koereskole_REST/webresources/generic/getTilbudKoreskole', this.samletString).subscribe(
      (response: Response) => {
        const data = response;
        console.log('hent Tilbud' + data.text()[1]);
      },
      (error) => console.log(error),
    );



    return this.tilbuddene;
  }
  hentTilbudMedIndex(index: number) {
    return this.tilbuddene[index];
  }
  addTilbud(tilbud: Tilbud) {
    this.tilbuddene.push(tilbud);
  }


}

