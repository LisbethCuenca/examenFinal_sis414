import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent {

  constructor(private movieService: MovieApiServiceService) { }

  createMovie(form: NgForm): void {
    if (form.valid) {
      this.movieService.createMovie(form.value).subscribe(response => {
        console.log('Película creada con éxito!', response);
        // Aquí podrías redirigir al usuario a la lista de películas o hacer alguna otra acción.
      }, error => {
        console.error('Error al crear la película', error);
      });
    }
  }
}
