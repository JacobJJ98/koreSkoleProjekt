import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http/';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  lol: string = 'stand';
  bk: string;

  constructor(private http: Http) { }

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


}
