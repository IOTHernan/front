import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
	ngOnInit(): void {
		console.log('[app.components]');
	}
	title = '#Argentina Programa - FrontEnd';
}