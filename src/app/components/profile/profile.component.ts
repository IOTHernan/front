import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { switchMap, tap } from 'rxjs';
import { ProfileUser } from './../../model/user';
import { ImageUploadService } from './../../services/image-upload.service';
import { UsersService } from './../../services/users.service';

@UntilDestroy()
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user$ = this.usersService.currentUserProfile$;
//  user$ = this.usersService.currentUserValue();
  profileForm = this.fb.group({
    uid: [''],
    displayName: [''],
    firstName: [''],
    lastName: [''],
    phone: [''],
    address: [''],
  });

  constructor(
    private imageUploadService: ImageUploadService,
    private toast: HotToastService,
    private usersService: UsersService,
    private fb: NonNullableFormBuilder
  ) { }

  ngOnInit(): void {
    this.usersService.currentUserProfile$
      .pipe(untilDestroyed(this), tap(console.log))
      .subscribe((user) => {
        this.profileForm.patchValue({ ...user });
      });
  }

  uploadFile(event: any, { uid }: ProfileUser) {
    this.imageUploadService
      .uploadImage(event.target.files[0], `images/profile/${uid}`)
      // .pipe(
        // this.toast.observe({
          // loading: 'Uploading profile image...',
          // success: 'Image uploaded successfully',
          // error: 'There was an error in uploading the image',
        // }),
        // switchMap((photoURL) =>
          /* this.usersService.updateUser({ */
            // this.usersService.currentUserValue();
            // uid,
            // photoURL,
          // })
        // )
      // )
      // .subscribe();
  }

  /* saveProfile() {
    const { uid, ...data } = this.profileForm.value;

    if (!uid) {
      return;
    }

    this.usersService
      .updateUser({ uid, ...data })
      .pipe(
        this.toast.observe({
          loading: 'Saving profile data...',
          success: 'Profile updated successfully',
          error: 'There was an error in updating the profile',
        })
      )
      .subscribe();
  } */

  /* updateUser(user: ProfileUser): Observable<void> {
  const ref = doc(this.firestore, 'users', user.uid);
  return from(updateDoc(ref, { ...user }));
} */
}
