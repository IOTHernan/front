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
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { LoginComponent } from './components/login/login.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HysComponent } from './components/hys/hys.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { MiDialogComponent } from './components/mi-dialog-component/mi-dialog-component';
import { FooterComponent } from './components/footer/footer.component';
import { UserService } from './services/user.service';
// fire
import { MatDialogModule } from '@angular/material/dialog';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from './../environments/environment';
// import { AngularFireStorage } from '@angular/fire/compat/storage';
// import { provideStorage, getStorage} from '@angular/fire/storage';
import { RegisterComponent } from './components/register/register.component';
// import { AppCheckModule } from '@angular/fire/app-check';

import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { SocialComponent } from './components/social/social.component';
// material
const materialModules = [
	MatDialogModule
];


@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		LoginComponent,
		FooterComponent,
		AcercadeComponent,
		EducacionComponent,
		ExperienciaComponent,
		ProyectosComponent,
		HysComponent,
		PageNotFoundComponent,
		PortfolioComponent,
		BannerComponent,
		MiDialogComponent,
  		AudioPlayerComponent,
     	RegisterComponent,
      EditEducacionComponent,
      NewEducacionComponent,
      HeaderComponent,
      LogoAPComponent,
      SocialComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule.forRoot([]),
		ReactiveFormsModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		HttpClientModule,
		FormsModule,
		materialModules,
		AngularFirestoreModule,
		AngularFireStorageModule,
		AngularFireAuthModule,
		NgCircleProgressModule.forRoot({})
		// providerStorage(() => getStorage())
	],
	providers: [
		// provideAnimationsAsync()
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
