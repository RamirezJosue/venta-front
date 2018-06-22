import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Ingreso } from '../../models/ingreso.model';


@Injectable()
export class IngresoService {

    totalIngresos: number = 0;

    constructor(
        public http: HttpClient,
        public _usuarioService: UsuarioService
    ) { }

    cargarIngresos() {

        let url = URL_SERVICIOS + '/ingreso';

        return this.http.get(url)
            .map((resp: any) => {

                this.totalIngresos = resp.total;
                return resp.ingresos;
            });

    }

    obtenerIngreso(id: string) {

        let url = URL_SERVICIOS + '/ingreso/' + id;
        return this.http.get(url)
            .map((resp: any) => resp.ingreso);

    }

    cargarIngreso(id: string) {

        let url = URL_SERVICIOS + '/ingreso/' + id;

        return this.http.get(url)
            .map((resp: any) => resp.ingreso);

    }

    buscarIngresos(termino: string) {

        let url = URL_SERVICIOS + '/busqueda/coleccion/ingresos/' + termino;
        return this.http.get(url)
            .map((resp: any) => resp.ingresos);

    }

    borrarIngreso(id: string) {

        let url = URL_SERVICIOS + '/ingreso/' + id;
        url += '?token=' + this._usuarioService.token;

        return this.http.delete(url)
            .map(resp => {
                swal('Ingreso Borrado', 'Ingreso borrado correctamente', 'success');
                return resp;
            });

    }

    guardarIngreso(ingreso: Ingreso) {

        let url = URL_SERVICIOS + '/ingreso';

        if (ingreso._id) {
            // actualizando
            url += '/' + ingreso._id;
            url += '?token=' + this._usuarioService.token;

            return this.http.put(url, ingreso)
                .map((resp: any) => {
                    swal('Ingreso Actualizado', 'success');
                    return resp.ingreso;

                });

        } else {
            // creando
            url += '?token=' + this._usuarioService.token;
            return this.http.post(url, ingreso)
                .map((resp: any) => {
                    swal('Ingreso Creado', ingreso.serieComprobante, 'success');
                    return resp.ingreso;
                });
        }

    }
}
