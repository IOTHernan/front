import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './../../services/portfolio.service';
import { IPersona } from '../../interfaces/ipersona';

@Component({
	selector: 'app-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
	miAcercade: any;
	miPersona: any;
	miAcercade2: any;
	miPersona2: any;
constructor(private portfolioService: PortfolioService) { }

	ngOnInit(): void {
		console.log("[CHE-BANNER]");
		this.miAcercade2=this.portfolioService.obtenerDatosAcercaDe();
		console.log('[miAcercade2:] ',this.miAcercade2);
		this.miPersona2=this.portfolioService.obtenerDatosPersona();
		console.log('[P2:] ',this.miPersona2);
		
		this.portfolioService.obtenerDatosAcercaDe().subscribe(data => {
			this.miAcercade = data;
			console.log(this.miAcercade);
			
		});

		this.portfolioService.obtenerDatosPersona().subscribe(data => {
		//	console.log('banner: ' , data);
			this.miPersona = data;
		//	console.log('Nombres: '+this.miPortfolio.Nombres);	
			console.log(this.miPersona);
		});
	}
}