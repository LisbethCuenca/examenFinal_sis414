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
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

import * as path from 'path';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'search', component:SearchComponent},
  {path:'movie/:id',component:MovieDetailsComponent},
  { path: '', component: LoginComponent },
  { path: 'registrar-usuario', component: RegistrarUsuarioComponent },     
  { path: 'recuperar-password', component: RecuperarPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'verificar-usuario', component: VerificarUsuarioComponent },
  { path: '', component: MovieListComponent },
  { path: 'create', component: MovieCreateComponent },
  { path: 'edit/:id', component: MovieEditComponent },
  { path: 'detail/:id', component: MovieDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}






  

