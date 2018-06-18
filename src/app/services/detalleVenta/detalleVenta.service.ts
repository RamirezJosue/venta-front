import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { DetalleVenta } from '../../models/detalleVenta.model';


@Injectable()
export class DetalleVentaService {

    totalDetalleVentas: number = 0;

    constructor(
        public http: HttpClient,
        public _usuarioService: UsuarioService
    ) { }

    cargarDetalleVentas() {

        let url = URL_SERVICIOS + '/detalleVenta';

        return this.http.get(url)
            .map((resp: any) => {

                this.totalDetalleVentas = resp.total;
                return resp.detalleVentas;
            });

    }

    obtenerDetalleVenta(id: string) {

        let url = URL_SERVICIOS + '/detalleVenta/' + id;
        return this.http.get(url)
            .map((resp: any) => resp.detalleVenta);

    }

    cargarDetalleVenta(id: string) {

        let url = URL_SERVICIOS + '/detalleVenta/' + id;

        return this.http.get(url)
            .map((resp: any) => resp.detalleVenta);

    }

    buscarDetalleVentas(termino: string) {

        let url = URL_SERVICIOS + '/busqueda/coleccion/detalleVentas/' + termino;
        return this.http.get(url)
            .map((resp: any) => resp.detalleVentas);

    }

    borrarDetalleVenta(id: string) {

        let url = URL_SERVICIOS + '/detalleVenta/' + id;
        url += '?token=' + this._usuarioService.token;

        return this.http.delete(url)
            .map(resp => {
                swal('DetalleVenta Borrado', 'DetalleVenta borrado correctamente', 'success');
                return resp;
            });

    }

    guardarDetalleVenta(detalleVenta: DetalleVenta) {

        let url = URL_SERVICIOS + '/detalleVenta';

        if (detalleVenta._id) {
            // actualizando
            url += '/' + detalleVenta._id;
            url += '?token=' + this._usuarioService.token;

            return this.http.put(url, detalleVenta)
                .map((resp: any) => {
                    swal('DetalleVenta Actualizado', 'success');
                    return resp.detalleVenta;

                });

        } else {
            // creando
            url += '?token=' + this._usuarioService.token;
            return this.http.post(url, detalleVenta)
                .map((resp: any) => {
                    swal('DetalleVenta Creado', 'success');
                    return resp.detalleVenta;
                });
        }

    }
}
