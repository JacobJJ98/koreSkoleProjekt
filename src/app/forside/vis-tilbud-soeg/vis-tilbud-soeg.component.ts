import { Component, OnInit } from '@angular/core';
import {TilbudModel} from '../../tilbud.model';
import {TilbudService} from '../../tilbud.service';

@Component({
  selector: 'app-vis-tilbud-soeg',
  templateUrl: './vis-tilbud-soeg.component.html',
  styleUrls: ['./vis-tilbud-soeg.component.css']
})
export class VisTilbudSoegComponent implements OnInit {
  tilbudene: TilbudModel[];



  constructor(private tilbudsservice: TilbudService) { }

  ngOnInit() {
    this.tilbudene = this.tilbudsservice.getTilbud();
    console.log(this.tilbudene.length);
    console.log(this.tilbudene[0].koreskole_id);
  }

}
