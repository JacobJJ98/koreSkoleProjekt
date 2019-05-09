import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {TilbudService} from '../../../tilbud.service';
import {TilbudTilBrugere} from '../../../Model/tilbudTilBrugere.model';
import {KoreskoleSideService} from '../../koreskoleSide.service';
import {Tilbud} from '../../../Model/tilbud.model';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {TilgangeligeDage} from '../../../Model/tilgængeligedage.model';

@Component({
  selector: 'app-minetilbud-edit',
  templateUrl: './minetilbud-edit.component.html',
  styleUrls: ['./minetilbud-edit.component.css']
})
export class MinetilbudEditComponent implements OnInit {
  id: number;
  tilbudForm: FormGroup;
  private t = new Tilbud();
  @ViewChild('f') form: NgForm;
  public popoverTitle = 'Er du sikker?';
  public popoverMessage = 'Når først et tilbud er slettet, kan det ikke genskabes!';
  public confirmClicked = false;
  public cancelClicked = false;
  status: Boolean = false;
  fejlLogin: Boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private tilbudsservice: KoreskoleSideService) {

  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.initForm();
        }
      );
  }
  initForm() {
    const tilbud = this.tilbudsservice.hentTilbudMedIndex(this.id);
    console.log(tilbud.tilgangeligeDage.tilgangelig_mandag);
    console.log('gggggg' + tilbud.tilgangeligeDage);
    this.tilbudForm = new FormGroup({
      'beskrivelse': new FormControl(tilbud.beskrivelse),
      'bilmarke': new FormControl(tilbud.bilmarke),
      'pris': new FormControl(tilbud.pris),
      // 'tilg': new FormControl(any['mandag','','onsdag','','','','']),
      'tilgangelig': new FormControl(this.tilgangObjTilArray(tilbud.tilgangeligeDage)),
      'lynkursus': new FormControl(tilbud.lynkursus),
      'korekort_type': new FormControl(tilbud.korekort_type),
      'bilstorrelse': new FormControl(tilbud.bilstorrelse),
      'kon': new FormControl(tilbud.kon),
    });
  }
  tilgangObjTilArray(tilg: TilgangeligeDage) {
    console.log('tilg obj: ' + tilg);
    const list: any[] = new Array(6);
    if (tilg.tilgangelig_mandag === 1) {
      list[0] = 'mandag';
    } else {
      list[0] = '';
    }
    if (tilg.tilgangelig_tirsdag === 1) {
      list[1] = 'tirsdag';
    } else {
      list[1] = '';
    }
    if (tilg.tilgangelig_onsdag === 1) {
      list[2] = 'onsdag';
    } else {
      list[2] = '';
    }
    if (tilg.tilgangelig_torsdag === 1) {
      list[3] = 'torsdag';
    } else {
      list[3] = '';
    }
    if (tilg.tilgangelig_fredag === 1) {
      list[4] = 'fredag';
    } else {
      list[4] = '';
    }
    if (tilg.tilgangelig_lordag === 1) {
      list[5] = 'lordag';
    } else {
      list[5] = '';
    }
    if (tilg.tilgangelig_sondag === 1) {
      list[6] = 'sondag';
    } else {
      list[6] = '';
    }
    console.log('Listen: ' + list);
    return list;
  }
  onDelete() {
    this.status = true;
   // this.tilbudsservice.sletTilbud(this.id);
    this.tilbudsservice.sletTilbudV2(this.id).subscribe(
      (returStreng: string) => {
        console.log('INDE I COMPOENENTET(MT EDIT): ' + returStreng);
        if (returStreng.includes('1')) {
          this.tilbudsservice.sletTilbudFraListen(this.id);
          window.alert('Tilbud ' + (this.id + 1) + ' i listen er blevet slettet!');
          //  this.router.navigate(['/korelaerer/minetilbud']);
        } else {
          //window.alert('Der skete en fejl, prøv igen!');
          //Lav en fejl
          this.fejlLogin = true;
        }
      },
      (error) => console.log(error),
    );
  }
  onUpdate() {
    const t: Tilbud = new Tilbud();
    t.beskrivelse = this.form.value.beskrivelse;
    t.bilmarke = this.form.value.bilmarke;
    t.pris = this.form.value.pris;
    t.tilgangeligeDage = this.fraArrayTilObject(this.form.value.tilgangelig);
    t.lynkursus = this.form.value.lynkursus;
    t.korekort_type = this.form.value.korekort_type;
    t.kon = this.form.value.kon;
    t.bilstorrelse = this.form.value.bilstorrelse;

    console.log(t);
    // console.log('1: '+t.tilgangeligeDage.tilgangeligstring_mandag);
    // console.log('2: '+t.tilgangeligeDage.tilgangelig_mandag);
    // t.tilgangeligeDage = this.fraArrayTilObject(this.form.value.dage);
    // this.tilbudsservice.opdaterTilbud(this.id, t);
    this.tilbudsservice.opdaterTilbudV2(this.id, t).subscribe(
      (returStreng: string) => {
        console.log('INDE I COMPOENENTET(logind): ' + returStreng);
        if (returStreng.includes('false')) {
          window.alert('Der skete en fejl, prøv igen!');
        } else {
          window.alert('Tilbud ' + (this.id + 1) + ' i listen er blevet opdateret!');
         //  this.router.navigate(['/korelaerer/minetilbud']);
        }
      },
      (error) => console.log(error),
    );
  }
  fraArrayTilObject(ar: String[]) {
    const tilgang: TilgangeligeDage = new TilgangeligeDage();
    tilgang.tilgangelig_mandag = 0;
    tilgang.tilgangelig_tirsdag = 0;
    tilgang.tilgangelig_onsdag = 0;
    tilgang.tilgangelig_torsdag = 0;
    tilgang.tilgangelig_fredag = 0;
    tilgang.tilgangelig_lordag = 0;
    tilgang.tilgangelig_sondag = 0;

    for (const entry of ar) {
      if (entry.match('mandag')) {
        tilgang.tilgangelig_mandag = 1;
      }
      if (entry.match('tirsdag')) {
        tilgang.tilgangelig_tirsdag = 1;
      }
      if (entry.match('onsdag')) {
        tilgang.tilgangelig_onsdag = 1;
      }
      if (entry.match('torsdag')) {
        tilgang.tilgangelig_torsdag = 1;
      }
      if (entry.match('fredag')) {
        tilgang.tilgangelig_fredag = 1;
      }
      if (entry.match('lordag')) {
        tilgang.tilgangelig_lordag = 1;
      }
      if (entry.match('sondag')) {
        tilgang.tilgangelig_sondag = 1;
      }
    }

    return tilgang;
  }
}
