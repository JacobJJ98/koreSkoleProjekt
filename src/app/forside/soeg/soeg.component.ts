import {Component, OnInit, ViewChild} from '@angular/core';
import {KoerelaererComponent} from './koerelaerer/koerelaerer.component';
import {KoereskoleComponent} from './koereskole/koereskole.component';

@Component({
  selector: 'app-soeg',
  templateUrl: './soeg.component.html',
  styleUrls: ['./soeg.component.css']
})
export class SoegComponent implements OnInit {
  @ViewChild(KoerelaererComponent) korelærecomp: KoerelaererComponent;
  @ViewChild(KoereskoleComponent) koreskolecomp: KoereskoleComponent;

  constructor() {
  }

  ngOnInit() {
  }
  hentvaerdiernefrakk() {
    return this.korelærecomp.bla();
  }
  hentPostNummer() {
    return this.koreskolecomp.hentpostnummer();
  }

}
