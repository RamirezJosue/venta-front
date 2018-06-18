import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Articulo } from '../../models/articulo.model';


@Injectable()
export class ArticuloService {

    totalArticulos: number = 0;

    constructor(
        public http: HttpClient,
        public _usuarioService: UsuarioService
    ) { }

    cargarArticulos() {

        let url = URL_SERVICIOS + '/articulo';

        return this.http.get(url)
            .map((resp: any) => {

                this.totalArticulos = resp.total;
                return resp.articulos;
            });

    }

    obtenerArticulo(id: string) {

        let url = URL_SERVICIOS + '/articulo/' + id;
        return this.http.get(url)
            .map((resp: any) => resp.articulo);

    }

    cargarArticulo(id: string) {

        let url = URL_SERVICIOS + '/articulo/' + id;

        return this.http.get(url)
            .map((resp: any) => resp.articulo);

    }

    buscarArticulos(termino: string) {

        let url = URL_SERVICIOS + '/busqueda/coleccion/articulos/' + termino;
        return this.http.get(url)
            .map((resp: any) => resp.articulos);

    }

    borrarArticulo(id: string) {

        let url = URL_SERVICIOS + '/articulo/' + id;
        url += '?token=' + this._usuarioService.token;

        return this.http.delete(url)
            .map(resp => {
                swal('Articulo Borrado', 'Articulo borrado correctamente', 'success');
                return resp;
            });

    }

    guardarArticulo(articulo: Articulo) {

        let url = URL_SERVICIOS + '/articulo';

        if (articulo._id) {
            // actualizando
            url += '/' + articulo._id;
            url += '?token=' + this._usuarioService.token;

            return this.http.put(url, articulo)
                .map((resp: any) => {
                    swal('Articulo Actualizado', articulo.nombre, 'success');
                    return resp.articulo;

                });

        } else {
            // creando
            url += '?token=' + this._usuarioService.token;
            return this.http.post(url, articulo)
                .map((resp: any) => {
                    swal('Articulo Creado', articulo.nombre, 'success');
                    return resp.articulo;
                });
        }

    }
}
