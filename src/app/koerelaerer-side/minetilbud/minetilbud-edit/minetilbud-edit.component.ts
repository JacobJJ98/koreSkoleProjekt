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
    console.log('gggggg'+tilbud.tilgangeligeDage);
    this.tilbudForm = new FormGroup({
      'beskrivelse': new FormControl(tilbud.beskrivelse),
      'bilmarke': new FormControl(tilbud.bilmarke),
      'pris': new FormControl(tilbud.pris),
      //'tilg': new FormControl(any['mandag','','onsdag','','','','']),
      'tilgangelig': new FormControl(this.tilgangObjTilArray(tilbud.tilgangeligeDage)),
      'lynkursus': new FormControl(tilbud.lynkursus),
      'korekort_type': new FormControl(tilbud.korekort_type),
      'bilstorrelse': new FormControl(tilbud.bilstorrelse),
      'kon': new FormControl(tilbud.kon),
    });
  }
  tilgangObjTilArray(tilg: TilgangeligeDage) {
    console.log('tilg obj: '+tilg);
    const list: any[] = new Array(6);
    if (tilg.tilgangelig_mandag === 1) {
      list[0] = 'mandag';
    }
    else {
      list[0] = '';
    }
    if (tilg.tilgangelig_tirsdag === 1) {
      list[1] = 'tirsdag';
    }
    else {
      list[1] = '';
    }
    if (tilg.tilgangelig_onsdag === 1) {
      list[2] = 'onsdag';
    }
    else {
      list[2] = '';
    }
    if (tilg.tilgangelig_torsdag === 1) {
      list[3] = 'torsdag';
    }
    else {
      list[3] = '';
    }
    if (tilg.tilgangelig_fredag === 1) {
      list[4] = 'fredag';
    }
    else {
      list[4] = '';
    }
    if (tilg.tilgangelig_lordag === 1) {
      list[5] = 'lordag';
    }
    else {
      list[5] = '';
    }
    if (tilg.tilgangelig_sondag === 1) {
      list[6] = 'sondag';
    }
    else {
      list[6] = '';
    }
    console.log('Listen: '+list);
    return list;
  }
  onDelete() {
    this.tilbudsservice.sletTilbud(this.id);
  }
  onUpdate() {
    this.tilbudsservice.opdaterTilbud(this.id, this.tilbudForm.value);
    //this.tilbudsservice.tilbuddene[this.id] = blabla
  }
}
