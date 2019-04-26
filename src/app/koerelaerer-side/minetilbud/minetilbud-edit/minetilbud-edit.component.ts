import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {TilbudService} from '../../../tilbud.service';
import {TilbudTilBrugere} from '../../../tilbudTilBrugere.model';
import {Tilbud2Service} from '../../../model2/tilbud2.service';
import {Tilbud} from '../../../tilbud.model';

@Component({
  selector: 'app-minetilbud-edit',
  templateUrl: './minetilbud-edit.component.html',
  styleUrls: ['./minetilbud-edit.component.css']
})
export class MinetilbudEditComponent implements OnInit {
  tilbud: Tilbud;
  id: number;

  constructor(private route: ActivatedRoute, private router: Router, private tilbudsservice: Tilbud2Service) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.tilbud = this.tilbudsservice.hentTilbudMedIndex(this.id);
        }
      );
  }
}
