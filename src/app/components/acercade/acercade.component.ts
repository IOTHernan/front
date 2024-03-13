import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from './../../services/portfolio.service';

@Component({
	selector: 'app-acercade',
	templateUrl: './acercade.component.html',
	styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
	miPortfolio: any;
	@Input() isLogged!: boolean;

	constructor(private portfolioService: PortfolioService) {
    
	}

	ngOnInit(): void {
		console.log("Acerdade");
		this.portfolioService.obtenerDatosAcercaDe().subscribe(data => {
			console.log(data);
			
			this.miPortfolio=data;
			console.log(this.miPortfolio);
			
		  });
		  
	

	}
}
