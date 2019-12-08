import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { MovieService } from "../../services/movie.service";
import { from } from "rxjs";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  public searchString: string;

  constructor(private _router: Router, private _route: ActivatedRoute) {}

  ngOnInit() {}

  goSearch() {
    this._router.navigate(["/movie/title", this.searchString]);
  }
}
