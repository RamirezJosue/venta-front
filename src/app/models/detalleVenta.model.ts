export class DetalleVenta {

    constructor(
        public cantidad: number,
        public precioVenta?: number,
        public descuento?: number,
        public cuentaVenta?: string,
        public tipoIgv?: string,
        public igv?: string,
        public venta?: string,
        public articulo?: string,
        public _id?: string
    ) { }

}