import {Component, Input, OnInit} from '@angular/core';
import {TilbudModel} from '../../../../tilbud.model';

@Component({
  selector: 'app-minetilbud-item',
  templateUrl: './minetilbud-item.component.html',
  styleUrls: ['./minetilbud-item.component.css']
})
export class MinetilbudItemComponent implements OnInit {

  @Input() tilbud: TilbudModel;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
