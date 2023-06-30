import { SharedModule } from "src/app/shared/shared.module";
import { MovieSearchRoutingModule } from "./movie-search-routing.module";
import { MovieSearchComponent } from "./movie-search.component";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    MovieSearchComponent
  ],
  exports: [
    MovieSearchComponent
    ],
    imports: [MovieSearchRoutingModule, SharedModule],
  providers: [],
})
export class MovieSearchModule { }
