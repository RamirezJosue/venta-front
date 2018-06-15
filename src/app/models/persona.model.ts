
export class Persona {

    constructor(
        public nombre: string,
        public tipoPersona: string,
        public tipoDocumento?: string,
        public numDocumento?: string,
        public direccion?: string,
        public telefono?: string,
        public email?: string,
        public _id?: string
    ) { }

}