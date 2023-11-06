import { Component } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent {
  public movies: any[] = [];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe((data) => {
      console.log(data);
    });
  }

  onSearch(term: any): void {
          this.movieService.searchMovieByTerm(term).subscribe((data) => {
        this.movies = data;
      });
  }
}
