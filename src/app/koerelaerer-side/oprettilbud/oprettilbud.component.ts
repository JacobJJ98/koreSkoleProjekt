import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {KoreskoleSideService} from '../koreskoleSide.service';
import {Tilbud} from '../../Model/tilbud.model';
import {element} from 'protractor';
import {TilgangeligeDage} from '../../Model/tilgængeligedage.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-oprettilbud',
  templateUrl: './oprettilbud.component.html',
  styleUrls: ['./oprettilbud.component.css']
})
export class OprettilbudComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  private tilbud1 = new Tilbud();
  private TilgangeligeDage = new TilgangeligeDage();
  konnn = ['mand', 'kvinde'];
  constructor(private tilbudsservice: KoreskoleSideService, private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    this.tilbud1.kon = this.form.value.gender;
    this.tilbud1.bilmarke = this.form.value.bilmærke;
    this.tilbud1.bilstorrelse = this.form.value.bilstr;
    this.tilbud1.korekort_type = this.form.value.kktype;
    this.tilbud1.lynkursus = this.lynkursusBooleantilBit(this.form.value.lynkurus);
    // @ts-ignore  //Den giver fejl her, men det er ikke noget problem da fraArrayTilObject returnerer et korrekt TilgængeligeDage objekt
    this.tilbud1.tilgangeligeDage = this.fraArrayTilObject(this.form.value.dage);
    // let tilgang: TilgangeligeDage = new TilgangeligeDage();
    // tilgang = this.fraArrayTilObject(this.form.value.dage);
    console.log(this.fraArrayTilObject(this.form.value.dage));
    console.log('her er dagene: ' + this.form.value.dage);
    console.log(this.form.value.dage);
    this.tilbud1.pris = this.form.value.prisen;
    console.log('prisen er sat til: ' + this.tilbud1.pris);
    console.log('prisen value: ' + this.form.value.prisen);
    this.tilbud1.beskrivelse = this.form.value.beskrivelse;
    this.tilbudsservice.addTilbud(this.tilbud1);
   // her mangler noget validering i forhold til om tilbuddet bliver oprettet ordenligt! men det drillede!!
      // console.log('Tilbud oprettet!');
      this.router.navigate(['/korelaerer/minetilbud']);
  }
  lynkursusBooleantilBit(bo: Boolean) {
    let bit = 0;
    if (bo === true) {
      bit = 1;
    } else {
      bit = 0;
    }
    return bit;
  }
  fraArrayTilObject(ar: String[]) {
    const tilgang: TilgangeligeDage = new TilgangeligeDage();
    tilgang.tilgangelig_mandag = 0;
    tilgang.tilgangelig_tirsdag = 0;
    tilgang.tilgangelig_onsdag = 0;
    tilgang.tilgangelig_torsdag = 0;
    tilgang.tilgangelig_fredag = 0;
    tilgang.tilgangelig_lordag = 0;
    tilgang.tilgangelig_sondag = 0;

    for (const entry of ar) {
      if (entry.match('mandag')) {
        tilgang.tilgangelig_mandag = 1;
      }
      if (entry.match('tirsdag')) {
        tilgang.tilgangelig_tirsdag = 1;
      }
      if (entry.match('onsdag')) {
        tilgang.tilgangelig_onsdag = 1;
      }
      if (entry.match('torsdag')) {
        tilgang.tilgangelig_torsdag = 1;
      }
      if (entry.match('fredag')) {
       tilgang.tilgangelig_fredag = 1;
      }
      if (entry.match('lørdag')) {
        tilgang.tilgangelig_lordag = 1;
      }
      if (entry.match('søndag')) {
        tilgang.tilgangelig_sondag = 1;
      }
    }

    return tilgang;
    }
}
