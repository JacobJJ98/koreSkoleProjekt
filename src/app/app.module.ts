import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {SoegComponent} from './forside/soeg/soeg.component';
import {KoerelaererComponent} from './forside/soeg/koerelaerer/koerelaerer.component';
import {KoereskoleComponent} from './forside/soeg/koereskole/koereskole.component';
import { ForsideComponent } from './forside/forside.component';
import { KoerelaererSideComponent } from './koerelaerer-side/koerelaerer-side.component';
import { OmSideComponent } from './om-side/om-side.component';
import {AppRoutingModule} from './app-routing.module';
import { LoginComponent } from './koerelaerer-side/login/login.component';
import { LoggedindComponent } from './koerelaerer-side/loggedind/loggedind.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SoegComponent,
    KoerelaererComponent,
    KoereskoleComponent,
    ForsideComponent,
    KoerelaererSideComponent,
    OmSideComponent,
    LoginComponent,
    LoggedindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
