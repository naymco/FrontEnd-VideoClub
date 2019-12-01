import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './component/movies/movies.component';
import { NavComponent } from './component/nav/nav.component';
import { FormsModule } from '@angular/forms'
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { ProfileComponent } from './component/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    MovieDetailComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
