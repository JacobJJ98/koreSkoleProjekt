import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ForsideComponent} from './forside/forside.component';
import {KoerelaererComponent} from './forside/soeg/koerelaerer/koerelaerer.component';
import {OmSideComponent} from './om-side/om-side.component';
import {KoerelaererSideComponent} from './koerelaerer-side/koerelaerer-side.component';

const appRoutes: Routes = [
  { path: '', component: ForsideComponent},
  { path: 'erdukoerelarer', component: KoerelaererSideComponent},
  { path: 'omos', component: OmSideComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
