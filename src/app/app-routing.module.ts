import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { EditAboutComponent } from './components/about/edit-about/edit-about.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { NewHysComponent } from './components/hys/new-hys/new-hys.component';
import { EditHysComponent } from './components/hys/edit-hys/edit-hys.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    // { path: "", component: HomeComponent },
    { path: "", pathMatch: 'full', component: LandingComponent },
    { path: "login", component: LoginComponent },
    { path: "sign-up", component: SignUpComponent },
    { path: "new-experiencia", component: NewExperienciaComponent },
    { path: "edit-experiencia/:id", component: EditExperienciaComponent },
    { path: "new-educacion", component: NewEducacionComponent },
    { path: "edit-educacion/:id", component: EditEducacionComponent },
    { path: "edit-about/:id", component: EditAboutComponent },
    { path: "new-hys", component: NewHysComponent },
    { path: "edit-hys/:id", component: EditHysComponent },
    { path: "home", component: HomeComponent },
    { path: "**", component: PageNotFoundComponent },
    { path: "header", component: HeaderComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
