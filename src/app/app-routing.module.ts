import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
	{ path: "", component: PortfolioComponent },
	{ path: "login", component: LoginComponent },
	{ path: "portfolio", component: PortfolioComponent },
	{ path: "**", component: PageNotFoundComponent },
	{ path: "navbar", component: NavbarComponent},
	{ path: "register", component: RegisterComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
