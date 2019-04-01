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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SoegComponent,
    KoerelaererComponent,
    KoereskoleComponent,
    ForsideComponent,
    KoerelaererSideComponent,
    OmSideComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
