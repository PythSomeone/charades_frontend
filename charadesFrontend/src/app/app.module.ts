import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {EnrollmentService} from './_services/enrollment.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { GoogleComponent } from './google/google.component';
import { FacebookComponent } from './facebook/facebook.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    GoogleComponent,
    FacebookComponent,
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
