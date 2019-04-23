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
  hentStørrelse() {
    return this.korelærecomp.hentBilStr();
  }
  hentPostNummer() {
    return this.koreskolecomp.hentpostnummer();
  }
  hentPrisen() {
    return this.koreskolecomp.hentPrisen();
  }
  hentKøn() {
    return this.korelærecomp.hentKønn();
  }

  hentMarke() {
    return this.korelærecomp.hentMaerke();
  }

  hentKKType() {
    return this.korelærecomp.hentKKType();
  }

  hentLK() {
    return this.korelærecomp.hentLK();
  }

  onskedeDage() {
    return this.korelærecomp.hentOnskedeDage();
  }
}
