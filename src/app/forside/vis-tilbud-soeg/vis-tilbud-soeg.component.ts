import { Component, OnInit } from '@angular/core';
import {Tilbud} from '../../tilbud.model';
import {TilbudService} from '../../tilbud.service';
import {MyObjModel} from '../../myObj.model';
import {TilbudTilBrugere} from '../../tilbudTilBrugere.model';

@Component({
  selector: 'app-vis-tilbud-soeg',
  templateUrl: './vis-tilbud-soeg.component.html',
  styleUrls: ['./vis-tilbud-soeg.component.css']
})
export class VisTilbudSoegComponent implements OnInit {
  tilbudene: TilbudTilBrugere[];



  constructor(private tilbudsservice: TilbudService) { }

  ngOnInit() {
    this.tilbudene = this.tilbudsservice.henttilbudTilBruger();
   console.log(this.tilbudene.length);
  // console.log(this.tilbudene[0].tilbud.koreskole_id);
  }

}
