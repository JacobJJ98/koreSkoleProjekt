import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Tilbud2Service} from '../../model2/tilbud2.service';
import {Tilbud} from '../../tilbud.model';
import {element} from 'protractor';
import {TilgængeligeDage} from '../../tilgængeligedage.model';

@Component({
  selector: 'app-oprettilbud',
  templateUrl: './oprettilbud.component.html',
  styleUrls: ['./oprettilbud.component.css']
})
export class OprettilbudComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  private tilbud1 = new Tilbud();
  private TilgængeligeDage = new TilgængeligeDage();
  konnn = ['Mand', 'Kvinde'];
  constructor(private tilbudsservice: Tilbud2Service) { }

  ngOnInit() {
  }

  hentBilStr() {
    // console.log('INDE FRA KØRERLÆRERSØG' + this.prisen.nativeElement.value );
    return this.form.value.bilstr;
  }

  hentKønn() {
    return this.form.value.gender;
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
  hentpostnummer() {
    return this.form.value.postnummer;
  }

  hentPrisen() {
    return this.form.value.prisen.value_;
  }
  onClick() {
    this.tilbud1.køn = this.form.value.gender;
    this.tilbud1.bilmarke = this.form.value.bilmærke;
    this.tilbud1.bilstørrelse = this.form.value.bilstr;
    this.tilbud1.bilstørrelse = this.form.value.bilstr;
    this.tilbud1.korekort_type = this.form.value.kktype;
    this.tilbud1.lynkursus = this.lynkursusBooleantilBit(this.form.value.lynkurus);
    //this.tilbud1.tilgængeligedage = this.fraArrayTilObject(this.form.dage);
    this.tilbud1.pris = this.form.value.prisen;
    this.tilbud1.beskrivelse = this.form.value.beskrivelse;
    this.tilbudsservice.addTilbud(this.tilbud1);
    //console.log(this.tilbud1);
    console.log(this.form);
    console.log(this.tilbud1);
  }
  lynkursusBooleantilBit(bo: Boolean) {
    let bit = 0;
    if (bo === true) {
      bit = 1;
    } else {
      bit = 0;
    }
    return bit;
  }
  // TODO lav metode der tager i mod et array og laver det om til et tilgængeligedage
  //  objekt med 0 og 1 for hver dag. (lav loop der kører igennem array og checker stringens navn; Mandag, Tirsdag osv)
  fraArrayTilObject(ar: String[]) {
    TilgængeligeDage.prototype.tilgængelig_mandag = 1;
    TilgængeligeDage.prototype.tilgængelig_tirsdag = 0;
    TilgængeligeDage.prototype.tilgængelig_onsdag = 0;
    TilgængeligeDage.prototype.tilgængelig_torsdag = 1;
    TilgængeligeDage.prototype.tilgængelig_fredag = 1;
    TilgængeligeDage.prototype.tilgængelig_lørdag = 1;
    TilgængeligeDage.prototype.tilgængelig_søndag = 0;
    return TilgængeligeDage;
    }
}
