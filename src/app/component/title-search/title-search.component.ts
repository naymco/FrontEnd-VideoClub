import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '../Models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-title-search',
  templateUrl: './title-search.component.html',
  styleUrls: ['./title-search.component.scss'],
  providers: [MovieService]
})
export class TitleSearchComponent implements OnInit {
  public title: string;
  public movieTitles: object;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _movieService: MovieService
  ) { }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this.title = params.get('title');
      this._movieService.titleS(this.title).subscribe(res => {
        this.movieTitles = res;

      })
    })

  }
  //   this._route.params.subscribe(params => {
  //     const title = params['title'];

  //     this._movieService.titleS(title).subscribe(
  //       res => {
  //         console.log(res)
  //         if (res.title) {
  //           this.movieTitles = res.title;
  //         }
  //         console.log('devuelve res', this.movieTitles)

  //       },
  //       error => {
  //         console.log(error)
  //         // this._router.navigate(['/movie']);
  //       }
  //     )

}



