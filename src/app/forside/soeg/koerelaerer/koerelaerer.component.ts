import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-koerelaerer',
  templateUrl: './koerelaerer.component.html',
  styleUrls: ['./koerelaerer.component.css']
})
export class KoerelaererComponent implements OnInit {
  @ViewChild('str') str: ElementRef;

  constructor() { }

  ngOnInit() {
   // console.log('INDE FRA KØRERLÆRERSØG' + this.prisen.nativeElement.value );
  }
  bla() {
   // console.log('INDE FRA KØRERLÆRERSØG' + this.prisen.nativeElement.value );
    return 'INDE FRA KØRERLÆRERSØG' + this.str.nativeElement.value ;
  }

}
