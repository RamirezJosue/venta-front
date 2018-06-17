import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Categoria } from '../../models/categoria.model';

@Injectable()
export class CategoriaService {

  totalCategorias: number = 0;

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService
  ) { }

  cargarCategorias() {

    let url = URL_SERVICIOS + '/categoria';
    return this.http.get( url )
              .map( (resp: any) => {
                this.totalCategorias = resp.total;
                return resp.categorias;
              });

  }

  obtenerCategoria( id: string ) {

    let url = URL_SERVICIOS + '/categoria/' + id;
    return this.http.get( url )
                .map( (resp: any) => resp.categoria );

  }

  borrarCategoria( id: string ) {

    let url = URL_SERVICIOS + '/categoria/' + id;
    url += '?token=' + this._usuarioService.token;

    return this.http.delete( url )
                .map( resp => swal('Categoria Borrado', 'Eliminado correctamente', 'success') );

  }

  crearCategoria( nombre: string ) {

    let url = URL_SERVICIOS + '/categoria';
    url += '?token=' + this._usuarioService.token;

    return this.http.post( url, { nombre } )
              .map( (resp: any) => resp.categoria );

  }

  buscarCategoria( termino: string ) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/categorias/' + termino;
    return this.http.get( url )
                .map( (resp: any) => resp.categorias );

  }

  actualizarCategoria( categoria: Categoria ) {

    let url = URL_SERVICIOS + '/categoria/' + categoria._id;
    url += '?token=' + this._usuarioService.token;

    return this.http.put( url, categoria )
              .map( (resp: any) => {

                swal('Categoria Actualiado', categoria.nombre, 'success');
                return resp.categoria;
              });

  }

}
