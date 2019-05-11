import {Component, OnDestroy, OnInit} from '@angular/core';
import {Tilbud} from '../../../Model/tilbud.model';
import {SoegService} from '../../../soeg.service';
import {TilbudTilBrugere} from '../../../Model/tilbudTilBrugere.model';
import {KoreskoleSideService} from '../../koreskoleSide.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import Swal from "sweetalert2";

@Component({
  selector: 'app-minetilbud-liste',
  templateUrl: './minetilbud-liste.component.html',
  styleUrls: ['./minetilbud-liste.component.css']
})
export class MinetilbudListeComponent implements OnInit, OnDestroy {
  tilbud: Tilbud[];
  subscription: Subscription;
  constructor(private tilbudsservice: KoreskoleSideService, private router: Router) { }

  ngOnInit() {
    if (this.tilbudsservice.firstTime) {
      this.tilbud = this.tilbudsservice.henttilbud();
      this.tilbudsservice.firstTime = false;
    }
    this.subscription = this.tilbudsservice.tilbudChanged
      .subscribe(
        (tilbud: Tilbud[]) => {
          console.log('lndring');
          this.tilbud = tilbud;
        }
      );
    this.tilbud = this.tilbudsservice.getTilbud();
   // HERINDE er det forsøgt at lave på en "ny" måde, men det ødelagde edit listen :P
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  opdater() {
    this.tilbudsservice.henttilbud();
    this.router.navigate(['/korelaerer/minetilbud']);
    Swal.fire({
      type: 'success',
      title: 'Tilbud opdateret!',
      showConfirmButton: false,
      timer: 1000
    });
  }

}
