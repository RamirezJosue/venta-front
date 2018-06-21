export class Venta {

    constructor(
        public tipoComprobante: string,
        public cliente: string,
        public serieComprobante: string,
        public numComprobante: string,
        // public fechaHora?: DateTimeFormat,
        public usuario: string,
        public impuesto: string,
        public totalVenta: string,
        public cuentaCliente: string,
        public cuentaIgv: string,
        public tipoVenta: string,
        public plazo?: string,
        public estado?: string,
        public _id?: string
    ) { }

}