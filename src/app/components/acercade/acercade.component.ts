import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from './../../services/portfolio.service';

@Component({
	selector: 'app-acercade',
	templateUrl: './acercade.component.html',
	styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
	miPortfolio: any;
	miPortfolio2: any;
	@Input() isLogged!: boolean;

	constructor(private portfolioService: PortfolioService) {}

	ngOnInit(): void {
		console.log("[CHE-Acerdade]");
		this.portfolioService.obtenerDatosAcercaDe().subscribe(data => {
			console.log(data);
			this.miPortfolio = data.acercade;
			console.log(this.miPortfolio);
		});
		this.portfolioService.obtenerDatosPersona().subscribe(data => {
			console.log(data);
			this.miPortfolio2 = data;
			console.log(this.miPortfolio2);
		});
	}
}