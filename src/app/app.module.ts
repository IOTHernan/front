import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

import { MatDialogModule } from '@angular/material/dialog';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


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
		MiDialogComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		materialModules
	],
	providers: [
    provideAnimationsAsync()
  ],
	bootstrap: [AppComponent]
})
export class AppModule { }
