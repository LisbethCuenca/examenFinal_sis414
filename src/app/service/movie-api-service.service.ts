/* import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http: HttpClient) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey = "96854f6207833fe0daa0987536a19775";
  language = "es-ES";
  
    


  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }


  trendingMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
  }

  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie#');

    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  }

  // getmoviedatails
  getMovieDetails(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
  }

  // getMovieVideo
  getMovieVideo(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
  }

  // getMovieCast
  getMovieCast(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
  }
  // action 
  fetchActionMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
  }

  // adventure
  fetchAdventureMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`);
  }

  // animation
  fetchAnimationMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`);
  }

  // comedy
  fetchComedyMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`);
  }

  // documentary
  fetchDocumentaryMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`);
  }

  // science-fiction:878

  fetchScienceFictionMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`);
  }

  // thriller:53
  fetchThrillerMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`);
  }


  // Métodos para CRUD de películas
createMovie(movieData: any): Observable<any> {
  return this.http.post(`${this.baseurl}/movie`, movieData);
}

getMovies(): Observable<any> {
  return this.http.get(`${this.baseurl}/movies`);
}

updateMovie(movieId: string, movieData: any): Observable<any> {
  return this.http.put(`${this.baseurl}/movie/${movieId}`, movieData);
}

deleteMovie(movieId: string): Observable<any> {
  return this.http.delete(`${this.baseurl}/movie/${movieId}`);
}


getMovieDetailsExtended(data: any): Observable<any> {
  return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}&append_to_response=genres`);
}

getCompleteMovieDetails(movieId: any): Observable<any> {
  return this.http.get(`${this.baseurl}/movie/${movieId}?api_key=${this.apikey}&append_to_response=videos`);
}

}

 */


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, map } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http: HttpClient) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey = "96854f6207833fe0daa0987536a19775";
  language = "es-ES";

  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}&language=${this.language}`);
  }

  trendingMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}&language=${this.language}`);
  }

  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie#');
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}&language=${this.language}`);
  }

  getMovieDetails(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}&language=${this.language}`);
  }

  getMovieVideo(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}&language=${this.language}`);
  }

  getMovieCast(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}&language=${this.language}`);
  }

  fetchActionMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28&language=${this.language}`);
  }

  fetchAdventureMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12&language=${this.language}`);
  }

  fetchAnimationMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16&language=${this.language}`);
  }

  fetchComedyMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35&language=${this.language}`);
  }

  fetchDocumentaryMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99&language=${this.language}`);
  }

  fetchScienceFictionMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878&language=${this.language}`);
  }

  fetchThrillerMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53&language=${this.language}`);
  }

  createMovie(movieData: any): Observable<any> {
    return this.http.post(`${this.baseurl}/movie?api_key=${this.apikey}&language=${this.language}`, movieData);
  }

  /* getMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/movies?api_key=${this.apikey}&language=${this.language}`);
  } */
    getMovies(): Observable<any[]> {
      return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&language=${this.language}`)
        .pipe(
          switchMap((response: any) => {
            return this.getGenres().pipe(
              map((genreMap: { [key: number]: string }) => {
                response.results.forEach((movie: any) => {
                  movie.genres = movie.genre_ids.map((id: number) => genreMap[id]);
                });
                return response.results;
              })
            );
          })
        );
    }

  updateMovie(movieId: string, movieData: any): Observable<any> {
    return this.http.put(`${this.baseurl}/movie/${movieId}?api_key=${this.apikey}&language=${this.language}`, movieData);
  }

  deleteMovie(movieId: string): Observable<any> {
    return this.http.delete(`${this.baseurl}/movie/${movieId}?api_key=${this.apikey}&language=${this.language}`);
  }

  getMovieDetailsExtended(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}&append_to_response=genres&language=${this.language}`);
  }

  getCompleteMovieDetails(movieId: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${movieId}?api_key=${this.apikey}&append_to_response=videos&language=${this.language}`);
  }

  getGenres(): Observable<{ [key: number]: string }> {
    return this.http.get(`${this.baseurl}/genre/movie/list?api_key=${this.apikey}&language=${this.language}`)
      .pipe(
        map((response: any) => {
          const genreMap: { [key: number]: string } = {};
          response.genres.forEach((genre: any) => {
            genreMap[genre.id] = genre.name;
          });
          return genreMap;
        })
      );
  }

}
