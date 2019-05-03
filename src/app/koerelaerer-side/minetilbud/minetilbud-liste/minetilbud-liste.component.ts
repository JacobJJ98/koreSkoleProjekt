import { Component, OnInit } from '@angular/core';
import {Tilbud} from '../../../Model/tilbud.model';
import {TilbudService} from '../../../tilbud.service';
import {TilbudTilBrugere} from '../../../Model/tilbudTilBrugere.model';
import {KoreskoleSideService} from '../../koreskoleSide.service';

@Component({
  selector: 'app-minetilbud-liste',
  templateUrl: './minetilbud-liste.component.html',
  styleUrls: ['./minetilbud-liste.component.css']
})
export class MinetilbudListeComponent implements OnInit {
  tilbud: Tilbud[];
  constructor(private tilbudsservice: KoreskoleSideService) { }

  ngOnInit() {
    this.tilbud = this.tilbudsservice.henttilbud();
  }

}
