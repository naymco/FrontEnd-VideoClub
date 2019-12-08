import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers: [MovieService]
})
export class OrderComponent implements OnInit {
  order: any;
  movieRent: object;
  constructor(
    private _movieService: MovieService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this.order = params.get('id');
      this._movieService.postOrder(this.order).subscribe(res => {
        console.log(res)
      })
    })
  }
  

}
