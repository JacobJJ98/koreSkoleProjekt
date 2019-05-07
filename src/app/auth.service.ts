import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
@Injectable()
export class AuthService {
  loggedIn = false;
  brugernavnAuth;
  passwordAuth;
  samletString: String;
  constructor(private http: Http, private router: Router) {}

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        resolve(this.loggedIn === true);
      }
    );
    return promise;
  }
  login(samletstreng: String) {
    console.log('Login metode STARTER');
    this.http.post('http://localhost:8080/koereskole_REST/webresources/generic/login', samletstreng).subscribe(
      (response: Response) => {
        const data = response;
        console.log('true = 1, false = 0: ' + data.text());
        if (data.text().toString().match('1')) {
          this.loggedIn = true;
          console.log('Mellem lort i helvedes: '+ this.loggedIn);
          console.log('Login metode SLUT');
          this.router.navigate(['/korelaerer']);
        }
      },
      (error) => console.log(error),
    );
  }

  logout() {
    console.log('LOUGOUT: ' + this.loggedIn);
    this.loggedIn = false;
    console.log('LOUGOUT: ' + this.loggedIn);
  }
}
