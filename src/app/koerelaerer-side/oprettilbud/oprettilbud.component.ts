import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {KoreskoleSideService} from '../koreskoleSide.service';
import {Tilbud} from '../../Model/tilbud.model';
import {element} from 'protractor';
import {TilgangeligeDage} from '../../Model/tilgængeligedage.model';

@Component({
  selector: 'app-oprettilbud',
  templateUrl: './oprettilbud.component.html',
  styleUrls: ['./oprettilbud.component.css']
})
export class OprettilbudComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  private tilbud1 = new Tilbud();
  private TilgangeligeDage = new TilgangeligeDage();
  konnn = ['Mand', 'Kvinde'];
  constructor(private tilbudsservice: KoreskoleSideService) { }

  ngOnInit() {
  }

  onClick() {
    this.tilbud1.kon = this.form.value.gender;
    this.tilbud1.bilmarke = this.form.value.bilmærke;
    this.tilbud1.bilstorrelse = this.form.value.bilstr;
    this.tilbud1.bilstorrelse = this.form.value.bilstr;
    this.tilbud1.korekort_type = this.form.value.kktype;
    this.tilbud1.lynkursus = this.lynkursusBooleantilBit(this.form.value.lynkurus);
    // this.tilbud1.tilgængeligedage = this.fraArrayTilObject(this.form.dage);
    this.tilbud1.pris = this.form.value.prisen;
    console.log('prisen er sat til: '+this.tilbud1.pris);
    console.log('prisen value: ' + this.form.value.prisen);
    this.tilbud1.beskrivelse = this.form.value.beskrivelse;
    this.tilbudsservice.addTilbud(this.tilbud1);
    // console.log(this.tilbud1);
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
    TilgangeligeDage.prototype.tilgangelig_mandag = 1;
    TilgangeligeDage.prototype.tilgangelig_tirsdag = 0;
    TilgangeligeDage.prototype.tilgangelig_onsdag = 0;
    TilgangeligeDage.prototype.tilgangelig_torsdag = 1;
    TilgangeligeDage.prototype.tilgangelig_fredag = 1;
    TilgangeligeDage.prototype.tilgangelig_lordag = 1;
    TilgangeligeDage.prototype.tilgangelig_sondag = 0;
    return TilgangeligeDage;
    }
}
