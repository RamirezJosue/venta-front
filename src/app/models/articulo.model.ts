export class Articulo {

    constructor(
        public stock: string,
        public nombre?: string,
        public codigo?: string,
        public tipoIgv?: string,
        public descripcion?: string,
        public img?: string,
        public condicion?: string,
        public categoria?: string,
        public _id?: string
    ) { }

}