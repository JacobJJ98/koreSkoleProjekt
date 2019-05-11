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
}
  hentBilStr() {
    return this.form.value.bilstr;
  }

  hentKønn() {
    return this.form.value.gender;
  }

  ngAfterViewInit(): void {
  }

  hentMaerke() {
    const ss: string = this.form.value.bilmærke;
    return ss;
  }

  hentKKType() {
    return this.form.value.kktype;
  }

  hentLK() {
    return this.form.value.lynkurus;
  }

  hentOnskedeDage() {
    const s: string = this.form.value.dage;
    return s;
  }
}
