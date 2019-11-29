import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './component/movies/movies.component';
import { LoginComponent } from './component/login/login.component';


const routes: Routes = [
  { path: "", redirectTo: "movie", pathMatch: "full" },
  { path: "movie", component: MoviesComponent },
  { path: "auth/login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
