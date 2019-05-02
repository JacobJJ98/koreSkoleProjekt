import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {KoerelaererComponent} from './soeg/koerelaerer/koerelaerer.component';
import {SoegComponent} from './soeg/soeg.component';
import {TilbudService} from '../tilbud.service';

@Component({
  selector: 'app-forside',
  templateUrl: './forside.component.html',
  styleUrls: ['./forside.component.css']
})
export class ForsideComponent implements OnInit, AfterViewInit {
   @ViewChild(SoegComponent) soegcomp: SoegComponent;

  constructor(private tilbudTilBrugerService: TilbudService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // console.log('INDE FRA FORSIDEN: ' + this.soegcomp.hentvaerdiernefrakk());
    // console.log('INDE FRA FORSIDEN: ' + this.korelærecomp);
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
    console.log('POSTNUMMERET ER: ' + postnummer);
    console.log('Prisen ER: ' + this.soegcomp.hentPrisen());
    console.log('køn er følgende: ' + this.soegcomp.hentKøn());
    console.log('BILMÆRKE ER: ' +  this.soegcomp.hentMarke());
    // const splitted = this.soegcomp.hentMarke().toString().split(',', 5);
    // console.log(splitted[0]);
    // console.log(splitted[1]);
    console.log('Bilstørrelse: ' + this.soegcomp.hentStørrelse());
    console.log('Kørekort type: ' + this.soegcomp.hentKKType());
    console.log('Lynkursus: ' + this.soegcomp.hentLK());
    console.log('Ønskede dage: ' + this.soegcomp.onskedeDage());
    // const splittedv2 = this.soegcomp.onskedeDage().toString().split(',', 5);
     // console.log(splittedv2[0]);
    // console.log(splittedv2[1]);
    // find alle tilbud med dette postnummer
    this.tilbudTilBrugerService.hentTilbudMedPostnummer(postnummer, pris, kon, maerke, str, type, lyn, dage);
  }

}
