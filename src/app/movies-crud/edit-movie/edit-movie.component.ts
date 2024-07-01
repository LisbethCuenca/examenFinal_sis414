/* import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  movieId: string = ''; 

  movieData: any;

  constructor(private route: ActivatedRoute, private movieService: MovieApiServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get('id') || ''; 
      this.getMovieDetails(this.movieId);
    });
  }

  getMovieDetails(id: string): void {
    this.movieService.getMovieDetails(id).subscribe(data => {
      this.movieData = data;
    });
  }

  updateMovie(): void {
    this.movieService.updateMovie(this.movieId, this.movieData).subscribe(response => {
      console.log('Película actualizada con éxito!', response);
      
    }, error => {
      console.error('Error al actualizar la película', error);
    });
  }
}
 */


/* import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  movieId: string = ''; 

  movieData: any;

  constructor(private movieService: MovieApiServiceService) { }

  ngOnInit(): void {
 
  }

  getMovieDetails(): void {
    this.movieService.getMovieDetails(this.movieId).subscribe(data => {
      this.movieData = data;
    }, error => {
      console.error('Error al obtener los detalles de la película', error);

    });
  }

  updateMovie(): void {
    this.movieService.updateMovie(this.movieId, this.movieData).subscribe(response => {
      console.log('Película actualizada con éxito!', response);

    }, error => {
      console.error('Error al actualizar la película', error);

    });
  }
}

 */




import { Component } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent {
  movieName: string = ''; // Variable para almacenar el nombre de la película
  movieData: any; // Variable para almacenar los detalles de la película encontrada

  constructor(private movieService: MovieApiServiceService) {}

  // Método para obtener los detalles de la película por nombre
  getMovieDetails(): void {
    if (this.movieName.trim() !== '') {
      this.movieService.getSearchMovie({ movieName: this.movieName }).subscribe(
        (result) => {
          this.movieData = result.results[0]; // Asignar los detalles de la primera película encontrada
        },
        (error) => {
          console.error('Error al buscar la película:', error);
          // Puedes manejar errores aquí, por ejemplo, mostrando un mensaje al usuario.
        }
      );
    }
  }

  // Método para actualizar los detalles de la película
  updateMovie(): void {
    // Llamar al servicio para actualizar la película, utilizando el ID o algún identificador único si es necesario
    // Ejemplo: this.movieService.updateMovie(this.movieData.id, { genre: this.movieData.genre, description: this.movieData.description, movieUrl: this.movieData.movieUrl })
    console.log('Datos a actualizar:', this.movieData); // Verifica que los datos sean los correctos
    this.movieService.updateMovie(this.movieData.id, this.movieData).subscribe(
      response => {
        console.log('Película actualizada con éxito!', response);
        // Aquí podrías redirigir al usuario a la lista de películas o hacer alguna otra acción.
      },
      error => {
        console.error('Error al actualizar la película', error);
        // Puedes manejar el error aquí, por ejemplo, mostrando un mensaje al usuario.
      }
    );
}
}
