import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Tilbud2Service} from '../../model2/tilbud2.service';
import {Tilbud} from '../../tilbud.model';

@Component({
  selector: 'app-oprettilbud',
  templateUrl: './oprettilbud.component.html',
  styleUrls: ['./oprettilbud.component.css']
})
export class OprettilbudComponent implements OnInit {
  form: NgForm;
  private tilbud1 = new Tilbud();
  constructor(private tilbudsservice: Tilbud2Service) { }

  ngOnInit() {
  }

  hentBilStr() {
    // console.log('INDE FRA KØRERLÆRERSØG' + this.prisen.nativeElement.value );
    return this.form.value.bilstr;
  }

  hentKønn() {
    return this.form.value.gender;
  }

  hentMaerke() {
    return this.form.value.bilmærke;
  }

  hentKKType() {
    return this.form.value.kktype;
  }

  hentLK() {
    return this.form.value.lynkurus;
  }

  hentOnskedeDage() {
    return this.form.value.dage;
  }
  hentpostnummer() {
    return this.form.value.postnummer;
  }

  hentPrisen() {
    return this.form.value.prisen.value_;
  }
  onClick() {
    //this.tilbud1.koreskole_id = 's175132';
   // this.tilbud1.pris = this.form.value.;
    //this.tilbud1.korekort_type = this.hentKKType();
    this.tilbud1.lynkursus = 1;
    //this.tilbud1.bilmarke = this.form.value.bilmarke;
    this.tilbud1.bilstørrelse = 'Stor bil';
    this.tilbud1.køn = 'kvinde';
    this.tilbud1.beskrivelse = 'Hos os bliver du en god bilist';
    this.tilbud1.id = 1234;
    this.tilbudsservice.addTilbud(this.tilbud1);
  }

}
