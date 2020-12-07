import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthGuard} from './_helpers/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'h', pathMatch: 'full'},
  {path: 'h', component: HomeComponent},
  {path: 'p', component: ProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


export const routingComponents = [HomeComponent, ProfileComponent];

