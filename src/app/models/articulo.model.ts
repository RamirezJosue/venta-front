export class Articulo {

    constructor(
        public codigo: string,
        public nombre?: string,
        public stock?: string,
        public tipoIgv?: string,
        public descripcion?: string,
        public img?: string,
        public condicion?: string,
        public categoria?: string,
        public _id?: string
    ) { }

}