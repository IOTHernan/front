import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-mi-dialog',
	templateUrl: './../mi-dialog-component/mi-dialog-component.html',
	styleUrls: ['./../mi-dialog-component/mi-dialog-component.css']
})
export class MiDialogComponent implements OnInit {

	// constructor(public dialogRef: MatDialogRef<MiDialogComponent>) { }

	ngOnInit(): void {
		console.log('DEBUG: MIDIALOG');
	}

	/* cerrarDialog(): void {
		this.dialogRef.close();
	} */

}
