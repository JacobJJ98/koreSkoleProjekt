import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {KoerelaererComponent} from './soeg/koerelaerer/koerelaerer.component';
import {SoegComponent} from './soeg/soeg.component';
import {SoegService} from '../soeg.service';

@Component({
  selector: 'app-forside',
  templateUrl: './forside.component.html',
  styleUrls: ['./forside.component.css']
})
export class ForsideComponent implements OnInit {
   @ViewChild(SoegComponent) soegcomp: SoegComponent;

  constructor(private tilbudTilBrugerService: SoegService) {
  }

  ngOnInit() {
  }
  onSog() {
     const postnummer = this.soegcomp.hentPostNummer();
      const pris = this.soegcomp.hentPrisen();
    const kon = this.soegcomp.hentKøn();
    const maerke = this.soegcomp.hentMarke();
    const str = this.soegcomp.hentStørrelse();
    const type = this.soegcomp.hentKKType();
    const lyn = this.soegcomp.hentLK();
    const dage = this.soegcomp.onskedeDage();

    this.tilbudTilBrugerService.hentTilbudMedPostnummer(postnummer, pris, kon, maerke, str, type, lyn, dage);
  }

}
