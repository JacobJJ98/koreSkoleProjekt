import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http/';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login-side',
  templateUrl: './login-side.component.html',
  styleUrls: ['./login-side.component.css']
})
export class LoginSideComponent implements OnInit {
  lol: string = 'stand';
  bk: string;

  constructor(private http: Http, private authService: AuthService) { }

  ngOnInit() {

  }

  logIn(brugernavn: HTMLInputElement, kode: HTMLInputElement) {
    this.bk = brugernavn.value + ' ' + kode.value;
    this.http.post('http://localhost:8080/koereskole_REST/webresources/generic/login', this.bk).subscribe(
      (response: Response) => {
        const data = response.text();
        console.log(data);
        this.lol = response.text().toString();
      },
      (error) => console.log(error),
    );
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }

}
