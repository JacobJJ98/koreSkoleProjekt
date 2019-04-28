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
import { LoginSideComponent } from './login-side/login-side.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VisTilbudSoegComponent } from './forside/vis-tilbud-soeg/vis-tilbud-soeg.component';
import {TilbudService} from './tilbud.service';
import { MinetilbudComponent } from './koerelaerer-side/minetilbud/minetilbud.component';
import { OprettilbudComponent } from './koerelaerer-side/oprettilbud/oprettilbud.component';
import { MinprofilComponent } from './koerelaerer-side/minprofil/minprofil.component';
import { MinetilbudStandardComponent } from './koerelaerer-side/minetilbud/minetilbud-standard/minetilbud-standard.component';
import { MinetilbudListeComponent } from './koerelaerer-side/minetilbud/minetilbud-liste/minetilbud-liste.component';
import { MinetilbudEditComponent } from './koerelaerer-side/minetilbud/minetilbud-edit/minetilbud-edit.component';
import {Tilbud2Service} from './model2/tilbud2.service';
import { MinetilbudItemComponent } from './koerelaerer-side/minetilbud/minetilbud-liste/minetilbud-item/minetilbud-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SoegComponent,
    KoerelaererComponent,
    KoereskoleComponent,
    ForsideComponent,
    KoerelaererSideComponent,
    LoginSideComponent,
    NotFoundComponent,
    VisTilbudSoegComponent,
    MinetilbudComponent,
    OprettilbudComponent,
    MinprofilComponent,
    MinetilbudStandardComponent,
    MinetilbudListeComponent,
    MinetilbudEditComponent,
    MinetilbudItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, AuthService, TilbudService, Tilbud2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
