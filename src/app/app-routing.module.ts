import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
// import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { ProfileComponent } from './components/profile/profile.component';
// import { BannerComponent } from './components/banner/banner.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

// const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
// const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingComponent },/* BannerComponent  */
  { path: 'login', component: LoginComponent },/* , ...canActivate(redirectLoggedInToHome)  */
  { path: 'sign-up', component: SignUpComponent, },/*  ...canActivate(redirectLoggedInToHome) */
  { path: 'home', component: HomeComponent },/* , ...canActivate(redirectUnauthorizedToLogin)  */
  { path: 'profile', component: ProfileComponent },/* , ...canActivate(redirectUnauthorizedToLogin)  */
  { path: 'portfolio', component: PortfolioComponent },/* , ...canActivate(redirectUnauthorizedToLogin)  */
  { path: '**', redirectTo: 'PageNotFoundComponent' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
