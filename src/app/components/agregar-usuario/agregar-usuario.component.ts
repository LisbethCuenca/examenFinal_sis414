import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {
  nuevoUsuario: any = { nombre: '', email: '', uid: '' };
  mensajeAgregado: boolean = false;

  constructor(
    private firestore: AngularFirestore,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  agregarUsuario() {
    if (this.nuevoUsuario.nombre && this.nuevoUsuario.email && this.nuevoUsuario.uid) {
      this.firestore.collection('users').add(this.nuevoUsuario)
        .then(() => {
          this.toastr.success('Usuario agregado correctamente');
          this.nuevoUsuario = { nombre: '', email: '', uid: '' };
          this.mensajeAgregado = true; // Mostrar mensaje de éxito
          setTimeout(() => {
            this.mensajeAgregado = false; // Ocultar mensaje después de unos segundos
          }, 3000); // Ocultar después de 3 segundos
        })
        .catch((error) => this.toastr.error('Error al agregar usuario', error));
    } else {
      this.toastr.error('Por favor complete todos los campos');
    }
  }
}
