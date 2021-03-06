import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './koerelaerer-side/header/header.component';
import {SoegComponent} from './forside/soeg/soeg.component';
import {KoerelaererComponent} from './forside/soeg/koerelaerer/koerelaerer.component';
import {KoereskoleComponent} from './forside/soeg/koereskole/koereskole.component';
import { ForsideComponent } from './forside/forside.component';
import { KoerelaererSideComponent } from './koerelaerer-side/koerelaerer-side.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth-guard.service';
import { ForsideKoerelaererComponent } from './koerelaerer-side/forside-koerelaerer/forside-koerelaerer.component';
import { LoginSideComponent } from './login-side/login-side.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VisTilbudSoegComponent } from './forside/vis-tilbud-soeg/vis-tilbud-soeg.component';
import {TilbudService} from './tilbud.service';
import { MinetilbudComponent } from './koerelaerer-side/minetilbud/minetilbud.component';
import { OprettilbudComponent } from './koerelaerer-side/oprettilbud/oprettilbud.component';
import { MinprofilComponent } from './koerelaerer-side/minprofil/minprofil.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SoegComponent,
    KoerelaererComponent,
    KoereskoleComponent,
    ForsideComponent,
    KoerelaererSideComponent,
    ForsideKoerelaererComponent,
    LoginSideComponent,
    NotFoundComponent,
    VisTilbudSoegComponent,
    MinetilbudComponent,
    OprettilbudComponent,
    MinprofilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [AuthGuard, AuthService, TilbudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
