import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { MovieApiServiceService } from './service/movie-api-service.service';
import { ReactiveFormsModule} from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarUsuarioComponent } from './components/verificar-usuario/verificar-correo.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { MovieListComponent } from './movies-crud/movie-list/movie-list.component';
import { EditMovieComponent } from './movies-crud/edit-movie/edit-movie.component';
import { CreateMovieComponent } from './movies-crud/create-movie/create-movie.component';
import { MainComponent } from './components/main/main.component';
// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BuscarUsuariosComponent } from './components/buscar-usuarios/buscar-usuarios.component';
import { AgregarUsuarioComponent } from './components/agregar-usuario/agregar-usuario.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    CreateMovieComponent,
    MainComponent,
    LoginComponent,
    DashboardComponent,
    RegistrarUsuarioComponent,
    RecuperarPasswordComponent,
    VerificarUsuarioComponent,
    SpinnerComponent,
    MovieListComponent,
    EditMovieComponent,
    MovieDetailsComponent,
    BuscarUsuariosComponent,
    AgregarUsuarioComponent
    
  ],

  imports:[
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    FormsModule,
    AngularFirestoreModule
    
  ],
  providers: [MovieApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }






  
