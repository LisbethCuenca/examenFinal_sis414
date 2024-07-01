/* import { Injectable } from '@angular/core';
import { Auth, EmailAuthCredential, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) { }

  register({ email, password}:any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
} */


  import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersCollection: AngularFirestoreCollection<any>;

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {
    this.usersCollection = this.firestore.collection('users');
  }

  // Crea un usuario
  createUser(email: string, password: string, displayName: string): Promise<void> {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(async (credential) => {
        await credential.user?.updateProfile({ displayName });
        await this.usersCollection.doc(credential.user?.uid).set({ email, displayName });
      });
  }

  // Obtiene todos los usuarios
  getUsers(): Observable<any[]> {
    return this.usersCollection.valueChanges({ idField: 'id' });
  }

  // Obtiene un usuario por su ID
  getUserById(userId: string): Observable<any | undefined> {
    return this.usersCollection.doc(userId).valueChanges();
  }

  // Actualiza el nombre de un usuario
  updateUserName(userId: string, newName: string): Promise<void> {
    return this.usersCollection.doc(userId).update({ displayName: newName });
  }

  // Elimina un usuario
  deleteUser(userId: string): Promise<void> {
    return this.usersCollection.doc(userId).delete();
  }
}
