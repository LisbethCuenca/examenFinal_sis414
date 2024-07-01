/* import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/service/firebase-code-error.service';
import { GoogleAuthProvider } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUsuario: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService
  ) {
    this.loginUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void { }

  async login(): Promise<void> {
    if (this.loginUsuario.invalid) return;

    const email = this.loginUsuario.value.email;
    const password = this.loginUsuario.value.password;

    this.loading = true;
    try {
      const user = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigateByUrl('/home');
    } catch (error: any) {
      this.loading = false;
      console.error(error);
      this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
    }
  }

  async loginWithGoogle(): Promise<void> {
    this.loading = true;
    try {
      const provider = new GoogleAuthProvider();
      const credential = await this.afAuth.signInWithPopup(provider);
      this.router.navigateByUrl('/home');
    } catch (error: any) {
      this.loading = false;
      console.error(error);
      this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
    }
  }
}
 */


import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/service/firebase-code-error.service';
import { GoogleAuthProvider } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUsuario: FormGroup;
  loading: boolean = false;
  private adminEmail: string = 'dioswachuka@gmail.com';  // Correo autorizado como administrador

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService
  ) {
    this.loginUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  async login(): Promise<void> {
    if (this.loginUsuario.invalid) return;

    const email = this.loginUsuario.value.email;
    const password = this.loginUsuario.value.password;

    this.loading = true;
    try {
      const user = await this.afAuth.signInWithEmailAndPassword(email, password);
      
      // Verifica si el correo es el del administrador
      if (email === this.adminEmail) {
        this.router.navigateByUrl('/dashboard');  // Redirige al área de administración
      } else {
        this.router.navigateByUrl('/home');  // Redirige al área de usuarios normales
      }
    } catch (error: any) {
      this.loading = false;
      console.error(error);
      this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
    }
  }

  async loginWithGoogle(): Promise<void> {
    this.loading = true;
    try {
      const provider = new GoogleAuthProvider();
      const credential = await this.afAuth.signInWithPopup(provider);
      const email = credential.user?.email;

      // Verifica si el correo es el del administrador
      if (email === this.adminEmail) {
        this.router.navigateByUrl('/dashboard');  // Redirige al área de administración
      } else {
        this.router.navigateByUrl('/home');  // Redirige al área de usuarios normales
      }
    } catch (error: any) {
      this.loading = false;
      console.error(error);
      this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
    }
  }
}
