import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './component/movies/movies.component';


const routes: Routes = [
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "movie/", component: MoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
