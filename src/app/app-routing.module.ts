import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ForsideComponent} from './forside/forside.component';
import {AuthGuard} from './auth-guard.service';
import {LoginSideComponent} from './login-side/login-side.component';
import {KoerelaererSideComponent} from './koerelaerer-side/koerelaerer-side.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {MinetilbudComponent} from './koerelaerer-side/minetilbud/minetilbud.component';
import {OprettilbudComponent} from './koerelaerer-side/oprettilbud/oprettilbud.component';
import {MinprofilComponent} from './koerelaerer-side/minprofil/minprofil.component';

const appRoutes: Routes = [
  { path: '', component: ForsideComponent},

  { path: 'erdukoerelaerer', component: LoginSideComponent},

  {
    path: 'koerelaerer',
     canActivate: [AuthGuard],
     // canActivateChild: [AuthGuard],
    component: KoerelaererSideComponent, children: [
      { path: '', component: MinetilbudComponent },
      { path: 'minetilbud', component: MinetilbudComponent },
      { path: 'oprettilbud', component: OprettilbudComponent },
      { path: 'minprofil', component: MinprofilComponent }]
    },

    { path: 'not-found', component: NotFoundComponent, data: {message: 'Page not found!'} },
    { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
