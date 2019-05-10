import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ForsideComponent } from './forside/forside.component';
import { HeaderComponent } from './koerelaerer-side/header/header.component';
import { KoerelaererComponent } from './forside/soeg/koerelaerer/koerelaerer.component';
import { KoereskoleComponent } from './forside/soeg/koereskole/koereskole.component';
import { KoerelaererSideComponent } from './koerelaerer-side/koerelaerer-side.component';
import { LoginSideComponent } from './login-side/login-side.component';
import { MinetilbudComponent } from './koerelaerer-side/minetilbud/minetilbud.component';
import { MinprofilComponent } from './koerelaerer-side/minprofil/minprofil.component';
import { MinetilbudStandardComponent } from './koerelaerer-side/minetilbud/minetilbud-standard/minetilbud-standard.component';
import { MinetilbudListeComponent } from './koerelaerer-side/minetilbud/minetilbud-liste/minetilbud-liste.component';
import { MinetilbudEditComponent } from './koerelaerer-side/minetilbud/minetilbud-edit/minetilbud-edit.component';
import { MinetilbudItemComponent } from './koerelaerer-side/minetilbud/minetilbud-liste/minetilbud-item/minetilbud-item.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OprettilbudComponent } from './koerelaerer-side/oprettilbud/oprettilbud.component';
import { SoegComponent } from './forside/soeg/soeg.component';
import { VisTilbudSoegComponent } from './forside/vis-tilbud-soeg/vis-tilbud-soeg.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AppRoutingModule } from './app-routing.module';

import { HttpModule } from '@angular/http';

import { AuthService } from './auth.service';
import { TilbudService } from './tilbud.service';
import { KoreskoleSideService } from './koerelaerer-side/koreskoleSide.service';

import { AuthGuard } from './auth-guard.service';
import { OpretkoreskoleSideComponent } from './login-side/opretkoreskole-side/opretkoreskole-side.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
@NgModule({
  declarations: [
    AppComponent,
    ForsideComponent,
    HeaderComponent,
    KoerelaererComponent,
    KoereskoleComponent,
    KoerelaererSideComponent,
    LoginSideComponent,
    MinetilbudComponent,
    MinprofilComponent,
    MinetilbudStandardComponent,
    MinetilbudListeComponent,
    MinetilbudEditComponent,
    MinetilbudItemComponent,
    NotFoundComponent,
    OprettilbudComponent,
    SoegComponent,
    VisTilbudSoegComponent,
    OpretkoreskoleSideComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    })
  ],
  providers: [AuthGuard, AuthService, TilbudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
