import { Injectable } from '@angular/core';
import {
  collection,
  doc,
  docData,
  Firestore,
  getDoc,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { filter, from, map, Observable, of, switchMap } from 'rxjs';
import { ProfileUser } from './../model/user';
import { AuthService } from './auth.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private usersColeccion!: AngularFirestoreCollection<ProfileUser>;
  private users!: Observable<ProfileUser[]>;
  currentUser$ = "";
  constructor(private afs: AngularFirestore, private authService: AuthService) {}

  get currentUserProfile$(): Observable<ProfileUser | null | undefined> {
    return this.authService.currentUser$.pipe(
      switchMap((user) => {
        if (!user?.uid) {
          return of(null);
        }
        const userRef: AngularFirestoreDocument<ProfileUser> = this.afs.doc(`users/${user?.uid}`);
        return userRef.valueChanges();
      })
    );
  }

  addUser(user: ProfileUser): Observable<void> {
    const userRef: AngularFirestoreDocument<ProfileUser> = this.afs.doc(`users/${user.uid}`);
    return from(userRef.set(user));
  }

  updateUser(user: ProfileUser): Observable<void> {
    const userRef: AngularFirestoreDocument<ProfileUser> = this.afs.doc(`users/${user.uid}`);
    return from(userRef.update({ ...user }));
  }
}
