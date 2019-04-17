import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  bo: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  loggedIn() {
    return false;
  }
  loginClicked() {
    this.bo = false;
  }
}
