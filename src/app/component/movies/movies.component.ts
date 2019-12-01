import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public peliculas: Array<MoviesComponent> = [];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getDiscoverMovies().subscribe(
      res => this.peliculas = res['peliculas'],
      error => console.error(error)
    )
  }

}
