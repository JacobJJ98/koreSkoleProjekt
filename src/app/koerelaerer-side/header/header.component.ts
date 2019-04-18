import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  bo: boolean = true;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  loggedIn() {
    return false;
  }
  onLogout() {
    this.authService.logout();
  }
}
