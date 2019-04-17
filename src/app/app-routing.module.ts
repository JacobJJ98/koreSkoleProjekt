import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ForsideComponent} from './forside/forside.component';
import {AuthGuard} from './auth-guard.service';
import {LoginSideComponent} from './login-side/login-side.component';
import {KoerelaererSideComponent} from './koerelaerer-side/koerelaerer-side.component';
import {NotFoundComponent} from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', component: ForsideComponent},

  { path: 'erdukoerelaerer', component: LoginSideComponent},

  {
    path: 'koerelaerer',
     canActivate: [AuthGuard],
     // canActivateChild: [AuthGuard],
    component: KoerelaererSideComponent,
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
