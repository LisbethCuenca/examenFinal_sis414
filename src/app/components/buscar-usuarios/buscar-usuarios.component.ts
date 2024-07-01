
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-buscar-usuarios',
  templateUrl: './buscar-usuarios.component.html',
  styleUrls: ['./buscar-usuarios.component.css'],
})
export class BuscarUsuariosComponent implements OnInit {
  usuarios: any[] = [];
  usuariosFiltrados: any[] = [];
  busqueda: string = '';
  usuarioResaltado: any = null;
  nuevoUsuario: any = { nombre: '', email: '', uid: '' };

  constructor(
    private firestore: AngularFirestore,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.firestore.collection('users').snapshotChanges().subscribe((data) => {
      this.usuarios = data.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as any)
        };
      });
      this.filtrarUsuarios();
    });
  }

  filtrarUsuarios() {
    const texto = this.busqueda.toLowerCase();
    this.usuariosFiltrados = this.usuarios.filter(usuario =>
      usuario.nombre.toLowerCase().includes(texto)
    );
    this.usuarioResaltado = this.usuariosFiltrados.length > 0 ? this.usuariosFiltrados[0] : null;
  }

  buscar() {
    // Realizar búsqueda exacta solo si la búsqueda no está vacía
    if (this.busqueda.trim() !== '') {
      this.usuariosFiltrados = this.usuarios.filter(usuario =>
        usuario.nombre.toLowerCase() === this.busqueda.toLowerCase()
      );
      this.usuarioResaltado = this.usuariosFiltrados.length > 0 ? this.usuariosFiltrados[0] : null;
    } else {
      this.filtrarUsuarios();
    }
  }

  editarUsuario(usuario: any) {
    const nuevoNombre = prompt('Nuevo nombre:', usuario.nombre);
    const nuevoCorreo = prompt('Nuevo correo:', usuario.email);
    const nuevoUid = prompt('Nuevo UID:', usuario.uid);

    if (nuevoNombre && nuevoCorreo && nuevoUid) {
      this.firestore.collection('users').doc(usuario.id).update({
        nombre: nuevoNombre,
        email: nuevoCorreo,
        uid: nuevoUid
      }).then(() => {
        this.toastr.success('Usuario actualizado');
        this.obtenerUsuarios();
      }).catch((error) => {
        this.toastr.error('Error al actualizar', error);
      });
    }
  }

  eliminarUsuario(id: string) {
    this.firestore.collection('users').doc(id).delete()
      .then(() => {
        this.toastr.success('Usuario eliminado');
        this.obtenerUsuarios();
      })
      .catch((error) => this.toastr.error('Error al eliminar', error));
  }

  agregarUsuario() {
    if (this.nuevoUsuario.nombre && this.nuevoUsuario.email && this.nuevoUsuario.uid) {
      this.firestore.collection('users').add(this.nuevoUsuario)
        .then(() => {
          this.toastr.success('Usuario agregado correctamente');
          this.nuevoUsuario = { nombre: '', email: '', uid: '' };
          this.obtenerUsuarios();
        })
        .catch((error) => this.toastr.error('Error al agregar usuario', error));
    } else {
      this.toastr.error('Por favor complete todos los campos');
    }
  }
}
