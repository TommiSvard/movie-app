import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }

  getAllMovies() {
    return this.http.get<any[]>(`${environment.apiUrl}`);
  }

  searchMovieByTerm(term: string) {
    return this.http.get<any[]>(`${environment.apiUrl}/query/${term}`);
  }
}
