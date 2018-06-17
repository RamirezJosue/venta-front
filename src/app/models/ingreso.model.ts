export class Ingreso {

    constructor(
        public tipoComprobante: string,
        public serieComprobante?: string,
        public numComprobante?: string,
        public fechaHora?: string,
        public impuesto?: string,
        public totalCompra?: string,
        public proveedor?: string,
        public usuario?: string,
        public _id?: string
    ) { }

}