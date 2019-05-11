import { Component, OnInit } from '@angular/core';
import {SoegService} from '../../soeg.service';
import {TilbudTilBrugere} from '../../Model/tilbudTilBrugere.model';

@Component({
  selector: 'app-minetilbud',
  templateUrl: './minetilbud.component.html',
  styleUrls: ['./minetilbud.component.css']
})
export class MinetilbudComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
