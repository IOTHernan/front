import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './../../services/portfolio.service';

@Component({
	selector: 'app-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
	miPortfolio: any;
	constructor(private portfolioService: PortfolioService) { }

	ngOnInit(): void {
		console.log("[BANNER]");
		this.portfolioService.obtenerDatos().subscribe(data => {
			console.log(data);
			this.miPortfolio = data;
			console.log(this.miPortfolio);
		});
	}
}