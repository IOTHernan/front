import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class Auth2Service {
  constructor(private afAuth: AngularFireAuth) { }

  async register(email: string, password: string) {
    const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
    this.sendEmailVerification();
    return result;
  }

  async sendEmailVerification() {
    (await this.afAuth.currentUser)?.sendEmailVerification();
  }

  async login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async logout() {
    return this.afAuth.signOut();
  }
}
