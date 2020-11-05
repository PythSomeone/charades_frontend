
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {EnrollmentService} from './_services/enrollment.service';
import {FacebookComponent} from './facebook/facebook.component';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { GoogleComponent } from './google/google.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,

    FacebookComponent,
    GoogleComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],

  providers: [EnrollmentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
