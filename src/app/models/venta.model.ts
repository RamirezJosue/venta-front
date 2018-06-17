export class Venta {

    constructor(
        public tipoComprobante: string,
        public serieComprobante?: string,
        public numComprobante?: string,
        public fechaHora?: string,
        public impuesto?: string,
        public totalVenta?: string,
        public cuentaCliente?: string,
        public cuentaIgv?: string,
        public tipoVenta?: string,
        public plazo?: string,
        public estado?: string,
        public usuario?: string,
        public cliente?: string,
        public _id?: string
    ) { }

}