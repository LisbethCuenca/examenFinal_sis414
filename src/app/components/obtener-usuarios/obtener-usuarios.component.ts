import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-obtener-usuarios',
  templateUrl: './obtener-usuarios.component.html',
  styleUrls: ['./obtener-usuarios.component.css']
})
export class ObtenerUsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private firestore: AngularFirestore) { }

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
    });
  }
}
