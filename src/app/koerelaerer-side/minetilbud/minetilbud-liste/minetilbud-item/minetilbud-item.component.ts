import {Component, Input, OnInit} from '@angular/core';
import {Tilbud} from '../../../../Model/tilbud.model';

@Component({
  selector: 'app-minetilbud-item',
  templateUrl: './minetilbud-item.component.html',
  styleUrls: ['./minetilbud-item.component.css']
})
export class MinetilbudItemComponent implements OnInit {

  @Input() tilbud: Tilbud;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
