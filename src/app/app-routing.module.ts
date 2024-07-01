import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'; 
import { VerificarUsuarioComponent } from './components/verificar-usuario/verificar-correo.component'; 
import { MainComponent } from './components/main/main.component'; 
import { EditMovieComponent } from './movies-crud/edit-movie/edit-movie.component';
import { CreateMovieComponent } from './movies-crud/create-movie/create-movie.component';
import { MovieListComponent } from './movies-crud/movie-list/movie-list.component';
import { BuscarUsuariosComponent } from './components/buscar-usuarios/buscar-usuarios.component';
import { ObtenerUsuariosComponent } from './components/obtener-usuarios/obtener-usuarios.component'; 
import * as path from 'path';
import { AgregarUsuarioComponent } from './components/agregar-usuario/agregar-usuario.component';



const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'search', component:SearchComponent},
  {path:'movie/:id',component:MovieDetailsComponent}, 
  { path: '', component: MainComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' }, 
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent }, 
  { path: 'registrar-usuario', component: RegistrarUsuarioComponent },     
  { path: 'recuperar-password', component: RecuperarPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'verificar-usuario', component: VerificarUsuarioComponent }, 
  { path: 'edit-movie', component: EditMovieComponent },
  { path: 'create-movie', component: CreateMovieComponent },
  { path: 'movie-list', component: MovieListComponent},
  { path: 'buscar-usuarios', component: BuscarUsuariosComponent},
  { path: 'agregar-usuario', component: AgregarUsuarioComponent},
  { path: 'obtener-usuarios', component: ObtenerUsuariosComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}




 






  

