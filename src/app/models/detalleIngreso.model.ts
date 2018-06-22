export class DetalleIngreso {

    constructor(
        public cantidad: number,
        public precioVenta?: number,
        public precioCompra?: number,
        public articulo?: string,
        public ingreso?: string,
        public _id?: string
    ) { }

}