import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TraineeHomeComponent } from './components/trainee-home/trainee-home.component';
import { TraineeHeaderComponent } from './components/trainee-header/trainee-header.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PageNotFoundComponent,
    SignUpComponent,
    TraineeHomeComponent,
    TraineeHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
