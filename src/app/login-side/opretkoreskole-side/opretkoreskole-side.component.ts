import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {TilbudService} from '../../tilbud.service';
import {Koreskole} from '../../Model/koreskole.model';
import {error} from 'util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-opretkoreskole-side',
  templateUrl: './opretkoreskole-side.component.html',
  styleUrls: ['./opretkoreskole-side.component.css']
})

export class OpretkoreskoleSideComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  constructor(private opretkoreskoleservice: TilbudService, private router: Router) { }

  ngOnInit() {
  }

  onOpretKoreskole() {
    console.log(this.form.value.nummerinput);
    const ks: Koreskole = new Koreskole();
    ks.telefonnummer = this.form.value.nummerinput;
    ks.navn = this.form.value.navninput;
    ks.id = this.form.value.brugernavninput;
    ks.mail = this.form.value.mailinput;
    ks.postnummer = this.form.value.postnummerinput;
    ks.adresse = this.form.value.adrinput;
    // console.log(this.opretkoreskoleservice.opretKoreskole(this.form.value.brugernavninput, this.form.value.passwordinput, ks));

    this.opretkoreskoleservice.opretKoreskolen(this.form.value.brugernavninput, this.form.value.passwordinput, ks).subscribe(
      (returStreng: string) => {
        // this.opretkoreskoleservice.tilbuddeneV4 = tilbudTilbrugere;
        console.log('INDE I COMPOENENTET: ' + returStreng);
        if (returStreng.includes('false')) {
          window.alert('Der skete en fejl, prøv igen!');
        } else {
          window.alert('Du er blevet oprettet, log venligst ind!');
          this.router.navigate(['/erdukoerelaerer']);
        }
      },
      (error) => console.log(error),
    );
  }

}
