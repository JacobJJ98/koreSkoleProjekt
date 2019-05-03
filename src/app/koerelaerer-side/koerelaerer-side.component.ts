import { Component, OnInit } from '@angular/core';
import {KoreskoleSideService} from './koreskoleSide.service';

@Component({
  selector: 'app-koerelaerer-side',
  templateUrl: './koerelaerer-side.component.html',
  styleUrls: ['./koerelaerer-side.component.css'],
  providers: [KoreskoleSideService]
})
export class KoerelaererSideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
