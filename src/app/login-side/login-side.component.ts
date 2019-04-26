import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http/';
import {AuthService} from '../auth.service';
import {Koreskole} from '../koreskole.model';
import {MyObjModel} from '../myObj.model';
import {TilbudService} from '../tilbud.service';

@Component({
  selector: 'app-login-side',
  templateUrl: './login-side.component.html',
  styleUrls: ['./login-side.component.css']
})
export class LoginSideComponent implements OnInit {
  lol: String = 'stand';
  bk: string;
  samletString: String;
  b;

  constructor(private http: Http, private authService: AuthService, private tilbudTilBrugerService: TilbudService) { }

  ngOnInit() {

  }

  logIn(brugernavn: HTMLInputElement, kode: HTMLInputElement) {
    this.bk = brugernavn.value + ' ' + kode.value;
    this.http.get('http://localhost:8080/koereskole_REST/webresources/generic/alleTilbud').subscribe(
      (response: Response) => {
        const data = response.text();
        console.log(data);

        // this.lol = response.text().toString();
      },
      (error) => console.log(error),
    );
  }

  onLogin(brugernavn: String, kodeord: String) {
    this.samletString = brugernavn + ' ' + kodeord;
    this.b = this.loginRest(this.samletString);
    if (this.b = 'true') {
      this.authService.login();
    }
  }
  loginRest(string: String) {
    this.http.post('http://localhost:8080/koereskole_REST/webresources/generic/login', string).subscribe(
      (response: Response) => {
        const data = response;
        console.log('DETTE ER BLEVET HENTET FRA SERVEREN MED GIVET POSTNUMMER: ' + data + data.text() + data.toString()
          + data.statusText.toString());
        return data;
      },
      (error) => console.log(error),
    );
  }
}
