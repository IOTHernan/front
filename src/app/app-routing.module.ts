import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
	{ path: "login", component: LoginComponent },
	{ path: "portfolio", component: PortfolioComponent },
	{ path: "", redirectTo: 'login', pathMatch: 'full' },
	{ path: "**", component: PageNotFoundComponent },
	{ path: "navbar", component: NavbarComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
