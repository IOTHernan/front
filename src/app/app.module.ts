import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

// npm
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// my
import { BannerComponent } from './components/banner/banner.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HysComponent } from './components/hys/hys.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// import { MiDialogComponent } from './components/mi-dialog-component/mi-dialog-component';
import { FooterComponent } from './components/footer/footer.component';
import { UserService } from './services/user.service';
// fire
// import { MatDialogModule } from '@angular/material/dialog';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from './../environments/environment';
import { AngularFireStorage } from '@angular/fire/compat/storage';
// import { provideStorage, getStorage} from '@angular/fire/storage';
import { RegisterComponent } from './components/register/register.component';
// import { AppCheckModule } from '@angular/fire/app-check';

import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { HeaderComponent } from './components/header/header.component';
// import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { SocialComponent } from './components/social/social.component';
import { EditAboutComponent } from './components/about/edit-about/edit-about.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditProjectComponent } from './components/proyectos/edit-project/edit-project.component';
import { NewProjectComponent } from './components/proyectos/new-project/new-project.component';
import { EditHysComponent } from './components/hys/edit-hys/edit-hys.component';
import { NewHysComponent } from './components/hys/new-hys/new-hys.component';


import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { interceptorProvider } from './services/interceptor-service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthComponent } from './components/auth/auth.component';
import { MyFormComponent } from './components/my-form/my-form.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LandingComponent } from './components/landing/landing.component';

// material
/* const materialModules = [
    MatButtonModule
];
 */

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    AboutComponent,
    EducacionComponent,
    ExperienciaComponent,
    ProyectosComponent,
    HysComponent,
    PageNotFoundComponent,
    BannerComponent,
    // MiDialogComponent,
    AudioPlayerComponent,
    RegisterComponent,
    EditEducacionComponent,
    NewEducacionComponent,
    HeaderComponent,
    // LogoAPComponent,
    SocialComponent,
    EditAboutComponent,
    EditExperienciaComponent,
    HomeComponent,
    NewExperienciaComponent,
    EditProjectComponent,
    NewProjectComponent,
    EditHysComponent,
    NewHysComponent,
    NavbarComponent,
    AuthComponent,
    MyFormComponent,
    SignUpComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgCircleProgressModule.forRoot({}),
    RouterModule.forRoot([]),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    MatButtonModule,
    MatToolbar,
    MatFormFieldModule,
    MatInput,
    MatIconModule,
    MatCardModule

    // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    // provideStorage(() => getStorage()),
    // providerStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
    // provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
