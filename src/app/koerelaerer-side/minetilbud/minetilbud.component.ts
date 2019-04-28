import { Component, OnInit } from '@angular/core';
import {TilbudService} from '../../tilbud.service';
import {TilbudTilBrugere} from '../../Model/tilbudTilBrugere.model';

@Component({
  selector: 'app-minetilbud',
  templateUrl: './minetilbud.component.html',
  styleUrls: ['./minetilbud.component.css']
})
export class MinetilbudComponent implements OnInit {
  tilbudene: TilbudTilBrugere[];
  constructor(private tilbudsservice: TilbudService) { }

  ngOnInit() {
    this.tilbudene = this.tilbudsservice.henttilbudTilBruger();
  }

}
