export class Educacion {
	id?: number;
	nombreE: string;
	descripcionE: string;
	titulo: string;
	periodo: string;
	img: string;

	constructor(id: number = 0, nombreE: string = '', descripcionE: string = '', titulo: string = '',
		periodo: string = '', img: string = '') {
    this.id = id;
		this.nombreE = nombreE;
		this.descripcionE = descripcionE;
		this.titulo = titulo;
		this.periodo = periodo;
		this.img = img;
	}
}
