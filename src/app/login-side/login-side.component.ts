import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http/';
import {AuthService} from '../auth.service';
import {Koreskole} from '../Model/koreskole.model';
import {MyObjModel} from '../Model/myObj.model';
import {TilbudService} from '../tilbud.service';

@Component({
  selector: 'app-login-side',
  templateUrl: './login-side.component.html',
  styleUrls: ['./login-side.component.css']
})
export class LoginSideComponent implements OnInit {

  samletString: String;

  constructor(private http: Http, private authService: AuthService, private tilbudTilBrugerService: TilbudService) { }

  ngOnInit() {

  }


  onLogin(brugernavn: String, kodeord: String) {
    this.samletString = brugernavn + ' ' + kodeord;
    console.log(this.samletString);
    this.http.post('http://localhost:8080/koereskole_REST/webresources/generic/login', this.samletString).subscribe(
      (response: Response) => {
        const data = response;
        console.log('true = 1, false = 0: ' + data.text());
        if (data.text().toString().match('1')) {
          this.authService.login();
        }
      },
      (error) => console.log(error),
    );
  }

}
