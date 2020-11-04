<<<<<<< Updated upstream
import {NgModule} from '@angular/core';
=======
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
>>>>>>> Stashed changes
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [HomeComponent]
