import { Component, OnInit } from '@angular/core';
import {TilbudModel} from '../../tilbud.model';
import {TilbudService} from '../../tilbud.service';
import {MyObjModel} from '../../myObj.model';
import {TilbudTilBrugereModel} from '../../tilbudTilBrugere.model';

@Component({
  selector: 'app-vis-tilbud-soeg',
  templateUrl: './vis-tilbud-soeg.component.html',
  styleUrls: ['./vis-tilbud-soeg.component.css']
})
export class VisTilbudSoegComponent implements OnInit {
  tilbudene: TilbudTilBrugereModel[];



  constructor(private tilbudsservice: TilbudService) { }

  ngOnInit() {
    const obj: MyObjModel = JSON.parse('{ "myString": "string", "myNumber": 4 }');
    console.log(obj.myString);
    console.log(obj.myNumber);
    this.tilbudene = this.tilbudsservice.henttilbud();
   console.log(this.tilbudene.length);
   console.log(this.tilbudene[0].tilbud.koreskole_id);
  }

}
