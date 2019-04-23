import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-koerelaerer',
  templateUrl: './koerelaerer.component.html',
  styleUrls: ['./koerelaerer.component.css']
})
export class KoerelaererComponent implements OnInit, AfterViewInit {
  konnn = ['Mand', 'Kvinde'];
  @ViewChild('str') str: ElementRef;
  @ViewChild('køn') køn: ElementRef;
  @ViewChild('f') form: NgForm;

  constructor() { }

  ngOnInit() {
   // console.log('INDE FRA KØRERLÆRERSØG' + this.prisen.nativeElement.value );
}
  hentBilStr() {
   // console.log('INDE FRA KØRERLÆRERSØG' + this.prisen.nativeElement.value );
    return this.form.value.bilstr;
  }

  hentKønn() {
    return this.form.value.gender;
  }

  ngAfterViewInit(): void {
    // console.log(this.form);
  }

  hentMaerke() {
    return this.form.value.bilmærke;
  }

  hentKKType() {
    return this.form.value.kktype;
  }

  hentLK() {
    return this.form.value.lynkurus;
  }

  hentOnskedeDage() {
    return this.form.value.dage;
  }
}
