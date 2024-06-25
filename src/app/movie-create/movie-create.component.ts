import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent {
  movie = {
    original_title: '',
    overview: '',
    poster_path: ''
  };

  constructor(private movieService: MovieService, private router: Router) {}

  createMovie(): void {
    this.movieService.createMovie(this.movie).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
