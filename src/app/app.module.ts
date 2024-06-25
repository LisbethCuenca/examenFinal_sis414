import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import {HttpClientModule} from '@angular/common/http';
import { MovieApiServiceService } from './service/movie-api-service.service';

import {ReactiveFormsModule} from '@angular/forms';
import { MainComponent } from './components/main/main.component';

// Componentes
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarUsuarioComponent } from './components/verificar-usuario/verificar-correo.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';  // Importa FormsModule


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,

    MainComponent,
    LoginComponent,
    DashboardComponent,
    RegistrarUsuarioComponent,
    RecuperarPasswordComponent,
    VerificarUsuarioComponent,
    SpinnerComponent,
    MovieListComponent,
    MovieCreateComponent,
    MovieEditComponent,
    MovieDetailComponent,

  ],

  imports:[
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    FormsModule 
    
  ],
  providers: [MovieApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }






  
