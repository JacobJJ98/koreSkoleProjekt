import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {TilbudService} from '../../tilbud.service';
import {Koreskole} from '../../Model/koreskole.model';

@Component({
  selector: 'app-opretkoreskole-side',
  templateUrl: './opretkoreskole-side.component.html',
  styleUrls: ['./opretkoreskole-side.component.css']
})

export class OpretkoreskoleSideComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  constructor(private opretkoreskoleservice: TilbudService) { }

  ngOnInit() {
  }

  onOpretKoreskole() {
    console.log(this.form.value.nummerinput);
    const ks: Koreskole = new Koreskole();
    ks.telefonnummer = this.form.value.nummerinput;
    ks.navn = this.form.value.navninput;
    ks.id = this.form.value.brugernavninput;
    ks.mail = this.form.value.mailinput;
    ks.postnummer = this.form.value.postnummerinput;
    ks.adresse = this.form.value.adrinput;
    console.log(this.opretkoreskoleservice.opretKoreskole(this.form.value.brugernavninput, this.form.value.passwordinput, ks));
  }

}
