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
    console.log('POSTNUMMERET ER: ' + postnummer);
    console.log('Prisen ER: ' + this.soegcomp.hentPrisen());
    console.log('køn er følgende: ' + this.soegcomp.hentKøn());
    console.log('BILMÆRKE ER: ' +  this.soegcomp.hentMarke());
    console.log('Bilstørrelse: ' + this.soegcomp.hentStørrelse());
    console.log('Kørekort type: ' + this.soegcomp.hentKKType());
    console.log('Lynkursus: ' + this.soegcomp.hentLK());
    console.log('Ønskede dage: ' + this.soegcomp.onskedeDage());
    // find alle tilbud med dette postnummer
    this.tilbudTilBrugerService.hentTilbudMedPostnummer(postnummer);
  }

}
