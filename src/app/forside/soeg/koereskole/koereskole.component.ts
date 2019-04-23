import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-koereskole',
  templateUrl: './koereskole.component.html',
  styleUrls: ['./koereskole.component.css']
})
export class KoereskoleComponent implements OnInit {
  @ViewChild('postnr') postnr: ElementRef;
  constructor() {
 //  console.log(document.getElementById('selectbasic').toString());

  }

  ngOnInit() {
  }

  hentpostnummer() {
    return this.postnr.nativeElement.value;
  }
}
