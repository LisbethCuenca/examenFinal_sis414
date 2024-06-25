import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  movie: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieService.getMovie(+id).subscribe(data => {
        this.movie = data;
      });
    } else {
      console.error('ID is null');
      // Maneja el caso donde id es null, tal vez redirigir a otra página
    }
  }

  updateMovie(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieService.updateMovie(+id, this.movie).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      console.error('ID is null');
      // Maneja el caso donde id es null, tal vez mostrar un mensaje de error
    }
  }
}
