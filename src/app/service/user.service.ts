import { Injectable } from '@angular/core';
import { Auth, EmailAuthCredential, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) { }

  register({ email, password}:any){
    return createUserWithEmailAndPassword(this.auth, email, password);
    

  }
}
