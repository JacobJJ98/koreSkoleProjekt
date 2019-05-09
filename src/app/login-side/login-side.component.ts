import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http/';
import {AuthService} from '../auth.service';
import {Koreskole} from '../Model/koreskole.model';
import {MyObjModel} from '../Model/myObj.model';
import {TilbudService} from '../tilbud.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-side',
  templateUrl: './login-side.component.html',
  styleUrls: ['./login-side.component.css']
})
export class LoginSideComponent implements OnInit {

  samletString: String;
  status: Boolean = false;
  fejlLogin: Boolean = false;

  constructor(private http: Http, private authService: AuthService, private tilbudTilBrugerService: TilbudService, private router: Router) { }

  ngOnInit() {

  }


  onLogin(brugernavn: String, kodeord: String) {
    this.status = true;
    this.samletString = brugernavn + ' ' + kodeord;
    this.authService.samletString = this.samletString;
    const splitted = this.samletString.split(' ', 2);
    this.authService.brugernavnAuth = splitted[0];
    this.authService.passwordAuth = splitted[1];
    console.log(splitted[1]);

    // this.authService.login(brugernavn + ' ' + kodeord);
    this.authService.loginV2(brugernavn + ' ' + kodeord).subscribe(
      (returStreng: string) => {
        console.log('INDE I COMPOENENTET(logind): ' + returStreng);
        if (returStreng.includes('1')) {
          this.router.navigate(['/korelaerer/minetilbud']);
        } else {
          //window.alert('Du er logget ind din store klovn!');
          this.fejlLogin = true;
          //window.alert('Der skete en fejl, prøv igen!');
          this.status = false;
        }
      },
      (error) => console.log(error),
    );
  }
}
