import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Venta } from '../../models/venta.model';


@Injectable()
export class VentaService {

    totalVentas: number = 0;

    constructor(
        public http: HttpClient,
        public _usuarioService: UsuarioService
    ) { }

    cargarVentas() {

        let url = URL_SERVICIOS + '/venta';

        return this.http.get(url)
            .map((resp: any) => {

                this.totalVentas = resp.total;
                return resp.ventas;
            });

    }

    obtenerVenta(id: string) {

        let url = URL_SERVICIOS + '/venta/' + id;
        return this.http.get(url)
            .map((resp: any) => resp.venta);

    }

    cargarVenta(id: string) {

        let url = URL_SERVICIOS + '/venta/' + id;

        return this.http.get(url)
            .map((resp: any) => resp.venta);

    }

    buscarVentas(termino: string) {

        let url = URL_SERVICIOS + '/busqueda/coleccion/ventas/' + termino;
        return this.http.get(url)
            .map((resp: any) => resp.ventas);

    }

    borrarVenta(id: string) {

        let url = URL_SERVICIOS + '/venta/' + id;
        url += '?token=' + this._usuarioService.token;

        return this.http.delete(url)
            .map(resp => {
                swal('Venta Borrado', 'Venta borrado correctamente', 'success');
                return resp;
            });

    }

    guardarVenta(venta: Venta) {

        let url = URL_SERVICIOS + '/venta';

        if (venta._id) {
            // actualizando
            url += '/' + venta._id;
            url += '?token=' + this._usuarioService.token;

            return this.http.put(url, venta)
                .map((resp: any) => {
                    swal('Venta Actualizado', 'success');
                    return resp.venta;

                });

        } else {
            // creando
            url += '?token=' + this._usuarioService.token;
            return this.http.post(url, venta)
                .map((resp: any) => {
                    swal('Venta Creado', 'success');
                    return resp.venta;
                });
        }

    }
}
