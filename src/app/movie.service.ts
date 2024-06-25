import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3';  // Cambia esto por tu URL de API

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getMovie(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createMovie(movie: any): Observable<any> {
    return this.http.post(this.apiUrl, movie);
  }

  updateMovie(id: number, movie: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, movie);
  }

  deleteMovie(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
