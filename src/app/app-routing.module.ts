import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthGuard} from './_helpers/auth.guard';
import {CategoriesComponent} from './categories/categories.component';
import {UserCategoriesComponent} from './user-categories/user-categories.component';
import {LobbyComponent} from './lobby/lobby.component';
import {SettingsComponent} from './settings/settings.component';
import {GameComponent} from './game/game.component';
import {ResultsComponent} from './results/results.component';
import {HistoryAndStatisticsComponent} from './history-and-statistics/history-and-statistics.component';


const routes: Routes = [
  {path: '', redirectTo: 'h', pathMatch: 'full'},
  {path: 'h', component: HomeComponent},
  {path: 'p', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'gc', component: CategoriesComponent, canActivate: [AuthGuard]},
  {path: 'cm', component: UserCategoriesComponent, canActivate: [AuthGuard]},
  {path: 'l', component: LobbyComponent, canActivate: [AuthGuard]},
  {path: 's', component: SettingsComponent, canActivate: [AuthGuard]},
  {path: 'g', component: GameComponent, canActivate: [AuthGuard]},
  {path: 'r', component: ResultsComponent, canActivate: [AuthGuard]},
  {path: 'hns', component: HistoryAndStatisticsComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


export const routingComponents = [
  HomeComponent,
  CategoriesComponent,
  ProfileComponent,
  UserCategoriesComponent,
  LobbyComponent,
  SettingsComponent,
  GameComponent,
  ResultsComponent,
  HistoryAndStatisticsComponent
];

