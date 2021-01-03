import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {FacebookComponent} from './facebook/facebook.component';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {GoogleComponent} from './google/google.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthenticationService} from './_services/authentication.service';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import {MatButtonModule} from '@angular/material/button';
import {FlexModule} from '@angular/flex-layout';
import {MaterialModule} from './material.module';
import {SocialAuthServiceConfig, SocialLoginModule} from 'angularx-social-login';
import {GoogleLoginProvider, FacebookLoginProvider} from 'angularx-social-login';
import {BasicCategoriesService} from './_services/basic-categories.service';
import {MatExpansionModule} from '@angular/material/expansion';
import {UserCategoriesService} from './_services/user-categories.service';
import {DeleteCategoryComponent} from './dialogs/delete-category/delete-category.component';
import {SignUpComponent} from './dialogs/sign-up/sign-up.component';
import {SignInComponent} from './dialogs/sign-in/sign-in.component';
import {EditCategoryComponent} from './dialogs/edit-category/edit-category.component';
import {UserWordsService} from './_services/user-words.service';
import {UserCategoriesWithWordsService} from './_services/user-categories-with-words.service';
import {EditWordComponent} from './dialogs/edit-word/edit-word.component';
import {DeleteWordComponent} from './dialogs/delete-word/delete-word.component';
import {SocialService} from './_services/social.service';
import {DeleteAccountComponent} from './dialogs/delete-account/delete-account.component';
import {GameService} from './_services/game.service';
import {PlayerService} from './_services/player.service';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FacebookComponent,
    GoogleComponent,
    SignInComponent,
    SignUpComponent,
    DeleteCategoryComponent,
    EditCategoryComponent,
    EditWordComponent,
    DeleteWordComponent,
    DeleteAccountComponent,

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
        SocialLoginModule,
        MatExpansionModule,
    ],

  providers: [
    AuthenticationService,
    BasicCategoriesService,
    UserCategoriesService,
    UserWordsService,
    UserCategoriesWithWordsService,
    SocialService,
    GameService,
    PlayerService,
    {
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
