import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { user } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { catchError, map, Observable, of } from 'rxjs';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.css'
})
export class NavbarComponent {
	profilePopupOpen = false;
	currentUser: any;
	profilePictureUrl: any;

	constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, private http: HttpClient) { }

	ngOnInit(): void {

		this.afAuth.authState.subscribe(user => {
			if (user) {
				this.currentUser = user;
				this.getUserProfilePicture().subscribe(url => {
					this.profilePictureUrl = url;
				});
			} else {
				this.currentUser = null;
				this.profilePictureUrl = null;
			}
		});
	}
	private getUserProfilePicture(): Observable<string> {
		const accessToken = this.currentUser.accessToken;
		const url = `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`;
		return this.http.get<any>(url)
			.pipe(
				map(userInfo => userInfo.picture),
				catchError(error => of(''))
			);
	}
	openProfilePopup() {
		this.profilePopupOpen = true;
	}
	closeProfilePopup() {
		this.profilePopupOpen = false;
	}
}
