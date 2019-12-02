import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './component/movies/movies.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { ProfileComponent } from './component/profile/profile.component';
import { TitleSearchComponent } from './component/title-search/title-search.component';



const routes: Routes = [
  { path: "", redirectTo: "movie", pathMatch: "full" },
  { path: "movie", component: MoviesComponent },
  { path: "auth", component: ProfileComponent },
  { path: "auth/login", component: LoginComponent },
  { path: "user/register", component: RegisterComponent },
  { path: "movie/:id", component: MovieDetailComponent },
  { path: "movie/title/:title", component: TitleSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
