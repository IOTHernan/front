import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './../../services/portfolio.service';
import { IPersona } from '../../interfaces/ipersona';

@Component({
	selector: 'app-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
	miPortfolio: any;
	miPortfolio2: any;
	constructor(private portfolioService: PortfolioService) { }

	ngOnInit(): void {
		console.log("[CHE-BANNER]");
		this.portfolioService.obtenerDatosAcercaDe().subscribe(data => {
			this.miPortfolio2 = data;
			console.log(this.miPortfolio2);
			
		});

		this.portfolioService.obtenerDatosPersona().subscribe(data => {
		//	console.log('banner: ' , data);
			this.miPortfolio = data;
		//	console.log('Nombres: '+this.miPortfolio.Nombres);	
			console.log(this.miPortfolio);
		});
	}
}