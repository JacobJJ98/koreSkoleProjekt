import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {TilbudService} from '../../../tilbud.service';
import {TilbudTilBrugere} from '../../../Model/tilbudTilBrugere.model';
import {Tilbud2Service} from '../../../model2/tilbud2.service';
import {Tilbud} from '../../../Model/tilbud.model';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-minetilbud-edit',
  templateUrl: './minetilbud-edit.component.html',
  styleUrls: ['./minetilbud-edit.component.css']
})
export class MinetilbudEditComponent implements OnInit {
  id: number;
  status_valuess: any = ['VW', 'Audi', 'Mercedes', 'Citroén', 'Honda', 'Opel', 'Peugeot']; //Burde nok samled i en klasse med andet data så det hele kan ændres på én gang
  statuss: any = 'Audi';
  tilbudForm: FormGroup;
  konnn = ['Mand', 'Kvinde'];

  status: any = '47';
  status_values: any = ['45', '46', '47'];
  countries: string[] = ['USA', 'UK', 'Canada'];
  default: string = 'UK';

  countryForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private tilbudsservice: Tilbud2Service) {
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
    console.log(tilbud);
    this.tilbudForm = new FormGroup({
      'beskrivelse': new FormControl(tilbud.beskrivelse),
      'kon': new FormControl(tilbud.køn),
      'bilmarke': new FormControl(tilbud.bilmarke)
    });
  }
}
