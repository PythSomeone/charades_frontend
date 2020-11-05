import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {EnrollmentService} from './_services/enrollment.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { GoogleComponent } from './google/google.component';
<<<<<<< Updated upstream
import { FacebookComponent } from './facebook/facebook.component';
=======
import { ProfileComponent } from './profile/profile.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    GoogleComponent,
<<<<<<< Updated upstream
    FacebookComponent,
=======
    ProfileComponent,
>>>>>>> Stashed changes
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
export class AppModule { }
