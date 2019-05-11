import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-koereskole',
  templateUrl: './koereskole.component.html',
  styleUrls: ['./koereskole.component.css']
})
export class KoereskoleComponent implements OnInit {
  @ViewChild('postnr') postnr: ElementRef;
  @ViewChild('f') form: NgForm;
  constructor() {

  }

  ngOnInit() {
  }

  hentpostnummer() {
    return this.form.value.postnummer;
  }

  hentPrisen() {
    return this.form.value.prisen;
  }
}
