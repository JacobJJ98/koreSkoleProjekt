import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {SoegComponent} from './soeg/soeg.component';
import {KoerelaererComponent} from './soeg/koerelaerer/koerelaerer.component';
import {KoereskoleComponent} from './soeg/koereskole/koereskole.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SoegComponent,
    KoerelaererComponent,
    KoereskoleComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
