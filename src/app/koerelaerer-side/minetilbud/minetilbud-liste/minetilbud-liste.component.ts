import {Component, OnDestroy, OnInit} from '@angular/core';
import {Tilbud} from '../../../Model/tilbud.model';
import {TilbudService} from '../../../tilbud.service';
import {TilbudTilBrugere} from '../../../Model/tilbudTilBrugere.model';
import {KoreskoleSideService} from '../../koreskoleSide.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-minetilbud-liste',
  templateUrl: './minetilbud-liste.component.html',
  styleUrls: ['./minetilbud-liste.component.css']
})
export class MinetilbudListeComponent implements OnInit, OnDestroy {
  tilbud: Tilbud[];
  subscription: Subscription;
  constructor(private tilbudsservice: KoreskoleSideService) { }

  ngOnInit() {
    this.subscription = this.tilbudsservice.tilbudChanged
      .subscribe(
        (tilbud: Tilbud[]) => {
          this.tilbud = tilbud;
        }
      );
    this.tilbud = this.tilbudsservice.henttilbud();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
