import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {TilbudService} from '../../../tilbud.service';
import {TilbudTilBrugere} from '../../../Model/tilbudTilBrugere.model';
import {KoreskoleSideService} from '../../koreskoleSide.service';
import {Tilbud} from '../../../Model/tilbud.model';
import {FormControl, FormGroup} from '@angular/forms';
import {TilgangeligeDage} from '../../../Model/tilgængeligedage.model';

@Component({
  selector: 'app-minetilbud-edit',
  templateUrl: './minetilbud-edit.component.html',
  styleUrls: ['./minetilbud-edit.component.css']
})
export class MinetilbudEditComponent implements OnInit {
  id: number;
  status_valuess: any = ['VW', 'Audi', 'Mercedes', 'Citroén', 'Honda', 'Opel', 'Peugeot']; // Burde nok samled i en klasse med andet data så det hele kan ændres på én gang
  statuss: any = 'Audi';
  tilbudForm: FormGroup;
  konnn = ['Mand', 'Kvinde'];

  status: any = '47';
  status_values: any = ['45', '46', '47'];
  countries: string[] = ['USA', 'UK', 'Canada'];
  default: string = 'UK';

  countryForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private tilbudsservice: KoreskoleSideService) {
    this.countryForm = new FormGroup({
      country: new FormControl(null)
    });
    this.countryForm.controls['country'].setValue(this.default, {onlySelf: true});
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
    console.log('Det tilgængelige tilbud: ' + tilbud.tilgangeligeDage);
    console.log(tilbud);
    this.tilbudForm = new FormGroup({
      'beskrivelse': new FormControl(tilbud.beskrivelse),
      'kon': new FormControl(tilbud.kon),
      'bilmarke': new FormControl(tilbud.bilmarke),
      'pris': new FormControl(tilbud.pris),

      'tilg': new FormControl(['mandag','','onsdag','','','',''])
      //'tilg': new FormControl(this.tilgangObjTilArray(tilbud.tilgangeligeDage))
    });
  }
  tilgangObjTilArray(tilg: TilgangeligeDage) {
    const list: String[] = new Array(6);
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
      list[5] = 'lørdag';
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
    return list;
  }
}
