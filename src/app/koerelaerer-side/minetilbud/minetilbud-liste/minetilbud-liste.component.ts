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
    /*
    HERINDE er det forsøgt at lave på en "ny" måde, men det ødelagde edit listen :P
    this.tilbudsservice.henttilbudV2().subscribe(
      (returObjekt: Tilbud[]) => {
        console.log('INDE I COMPOENENTET(LISTECOMP): ' + returObjekt);
        console.log(returObjekt);
        this.tilbud = returObjekt;
      },
      (error) => console.log(error),
    );
    */
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
