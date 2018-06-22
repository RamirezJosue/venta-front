import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { DetalleIngreso } from '../../models/detalleIngreso.model';


@Injectable()
export class DetalleIngresoService {

    totalDetalleIngresos: number = 0;

    constructor(
        public http: HttpClient,
        public _usuarioService: UsuarioService
    ) { }

    cargarDetalleIngresos() {

        let url = URL_SERVICIOS + '/detalleIngreso';

        return this.http.get(url)
            .map((resp: any) => {

                this.totalDetalleIngresos = resp.total;
                return resp.detalleIngresos;
            });

    }

    obtenerDetalleIngreso(id: string) {

        let url = URL_SERVICIOS + '/detalleIngreso/' + id;
        return this.http.get(url)
            .map((resp: any) => resp.detalleIngreso);

    }

    cargarDetalleIngreso(id: string) {

        let url = URL_SERVICIOS + '/detalleIngreso/' + id;

        return this.http.get(url)
            .map((resp: any) => resp.detalleIngreso);

    }

    buscarDetalleIngresos(termino: string) {

        let url = URL_SERVICIOS + '/busqueda/coleccion/detalleIngresos/' + termino;
        return this.http.get(url)
            .map((resp: any) => resp.detalleIngresos);

    }

    borrarDetalleIngreso(id: string) {

        let url = URL_SERVICIOS + '/detalleIngreso/' + id;
        url += '?token=' + this._usuarioService.token;

        return this.http.delete(url)
            .map(resp => {
                swal('DetalleIngreso Borrado', 'DetalleIngreso borrado correctamente', 'success');
                return resp;
            });

    }

    guardarDetalleIngreso(detalleIngreso: DetalleIngreso) {

        let url = URL_SERVICIOS + '/detalleIngreso';

        if (detalleIngreso._id) {
            // actualizando
            url += '/' + detalleIngreso._id;
            url += '?token=' + this._usuarioService.token;

            return this.http.put(url, detalleIngreso)
                .map((resp: any) => {
                    swal('DetalleIngreso Actualizado', 'success');
                    return resp.detalleIngreso;

                });

        } else {
            // creando
            url += '?token=' + this._usuarioService.token;
            return this.http.post(url, detalleIngreso)
                .map((resp: any) => {
                    swal('DetalleIngreso Creado', 'success');
                    return resp.detalleIngreso;
                });
        }

    }
}
