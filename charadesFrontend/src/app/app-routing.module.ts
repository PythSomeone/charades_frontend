import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [HomeComponent];
