// npm
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// my
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BannerComponent } from './components/banner/banner.component';
import { MiDialogComponent } from './components/mi-dialog-component/mi-dialog-component';
// import { NgCircleProgressModule } from 'ng-circle-progress';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { RegisterComponent } from './components/register/register.component';
// import { AppCheckModule } from '@angular/fire/app-check';

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
		SkillsComponent,
		PageNotFoundComponent,
		PortfolioComponent,
		BannerComponent,
		MiDialogComponent,
  		AudioPlayerComponent,
     	RegisterComponent
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
		AngularFireAuthModule
	],
	providers: [
		// provideAnimationsAsync()
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
