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

  constructor(private http: Http, private authService: AuthService, private tilbudTilBrugerService: TilbudService, private router: Router) { }

  ngOnInit() {

  }


  onLogin(brugernavn: String, kodeord: String) {
    this.samletString = brugernavn + ' ' + kodeord;
    this.authService.samletString = this.samletString;
    const splitted = this.samletString.split(' ', 2);
    this.authService.brugernavnAuth = splitted[0];
    this.authService.passwordAuth = splitted[1];
    console.log(splitted[1]);

    this.authService.login(brugernavn + ' ' + kodeord);
  }
}
