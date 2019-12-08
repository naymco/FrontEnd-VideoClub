import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  public movie: object;
  rentMe: string;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.movieService.getMovieById(id)
        .subscribe(movie => {
          this.movie = movie;
          console.log(movie)

        })
    })
  }
  goOrder() {
    this._router.navigate(['/order', this.rentMe]);
  }
}
