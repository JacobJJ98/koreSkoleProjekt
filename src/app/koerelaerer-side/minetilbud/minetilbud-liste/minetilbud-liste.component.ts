import { Component, OnInit } from '@angular/core';
import {TilbudModel} from '../../../tilbud.model';
import {TilbudService} from '../../../tilbud.service';
import {TilbudTilBrugereModel} from '../../../tilbudTilBrugere.model';
import {Tilbud2Service} from '../../../model2/tilbud2.service';

@Component({
  selector: 'app-minetilbud-liste',
  templateUrl: './minetilbud-liste.component.html',
  styleUrls: ['./minetilbud-liste.component.css']
})
export class MinetilbudListeComponent implements OnInit {
  tilbud: TilbudModel[];
  constructor(private tilbudsservice: Tilbud2Service) { }

  ngOnInit() {
    this.tilbud = this.tilbudsservice.henttilbud();
  }

}
