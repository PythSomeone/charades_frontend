import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {FacebookComponent} from './facebook/facebook.component';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {GoogleComponent} from './google/google.component';
import {ProfileComponent} from './profile/profile.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthenticationService} from './_services/authentication.service';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import {MatButtonModule} from '@angular/material/button';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {FlexModule} from '@angular/flex-layout';
import {MaterialModule} from './material.module';
import {SocialAuthServiceConfig, SocialLoginModule} from 'angularx-social-login';
import {GoogleLoginProvider, FacebookLoginProvider} from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FacebookComponent,
    GoogleComponent,
    ProfileComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    FlexModule,
    MaterialModule,
    SocialLoginModule
  ],

  providers: [AuthenticationService, {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }, {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [{
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('1096940430460-ln1fkpm3muobqapvpbp0qnt094v0doll.apps.googleusercontent.com')
      },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('355306638859925')
        }]
    } as SocialAuthServiceConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
