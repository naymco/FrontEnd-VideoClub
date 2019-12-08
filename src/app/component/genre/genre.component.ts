import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { MovieService } from "../../services/movie.service";
import { Route } from "@angular/compiler/src/core";

@Component({
  selector: "app-genre",
  templateUrl: "./genre.component.html",
  styleUrls: ["./genre.component.scss"],
  providers: [MovieService]
})
export class GenreComponent implements OnInit {
  public genreMovie: any;
  public genre: object;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _movieService: MovieService
  ) {}

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this.genreMovie = params.get("generos");
      this._movieService.getGenre(this.genreMovie).subscribe(res => {
        this.genre = res;
        console.log(this.genre);
      });
    });
  }
}
