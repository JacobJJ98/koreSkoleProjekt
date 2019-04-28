import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Tilbud} from '../../Model/tilbud.model';
import {TilbudService} from '../../tilbud.service';
import {MyObjModel} from '../../Model/myObj.model';
import {TilbudTilBrugere} from '../../Model/tilbudTilBrugere.model';
import {KoereskoleComponent} from '../soeg/koereskole/koereskole.component';
import {KoerelaererComponent} from '../soeg/koerelaerer/koerelaerer.component';

@Component({
  selector: 'app-vis-tilbud-soeg',
  templateUrl: './vis-tilbud-soeg.component.html',
  styleUrls: ['./vis-tilbud-soeg.component.css']
})
export class VisTilbudSoegComponent implements OnInit, AfterViewInit {
  @ViewChild(KoereskoleComponent) koreskoleREF;
  @ViewChild(KoerelaererComponent) korelaerREF;
  tilbudene: TilbudTilBrugere[];



  constructor(private tilbudsservice: TilbudService) { }

  ngOnInit() {
    this.tilbudene = this.tilbudsservice.henttilbudTilBruger();
   // console.log(this.tilbudene.length);
  // console.log(this.tilbudene[0].tilbud.koreskole_id);
  }
  ngAfterViewInit() {

  }

}
