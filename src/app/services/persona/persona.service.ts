import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Persona } from '../../models/persona.model';


@Injectable()
export class PersonaService {

  totalPersonas: number = 0;

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService
  ) { }

  cargarPersonas() {

    let url = URL_SERVICIOS + '/persona';
    url += '?token=' + this._usuarioService.token;

    return this.http.get( url )
              .map( (resp: any) => {

                this.totalPersonas = resp.total;
                return resp.personas;
              });

  }

  obtenerPersona(id: string) {

    let url = URL_SERVICIOS + '/persona/' + id;
    return this.http.get(url)
      .map((resp: any) => resp.persona);

  }

  cargarPersona( id: string ) {

    let url = URL_SERVICIOS + '/persona/' + id;

    return this.http.get( url )
              .map( (resp: any) => resp.persona );

  }

  buscarPersonas( termino: string ) {

    let url = URL_SERVICIOS + '/busqueda/coleccion/personas/' + termino;
    return this.http.get( url )
                .map( (resp: any) => resp.personas );

  }

  borrarPersona( id: string ) {

    let url = URL_SERVICIOS + '/persona/' + id;
    url += '?token=' + this._usuarioService.token;

    return this.http.delete( url )
              .map( resp => {
                swal( 'Persona Borrado', 'Persona borrado correctamente', 'success' );
                return resp;
              });

  }

    guardarPersona( persona: Persona ) {

      let url = URL_SERVICIOS + '/persona';

      if ( persona._id ) {
        // actualizando
        url += '/' + persona._id;
        url += '?token=' + this._usuarioService.token;

        return this.http.put( url, persona )
                  .map( (resp: any) => {
                    swal('Persona Actualizado', persona.nombre, 'success');
                    return resp.persona;

                  });

      } else {
        // creando
        url += '?token=' + this._usuarioService.token;
        return this.http.post( url, persona )
                .map( (resp: any) => {
                  swal('Persona Creado', persona.nombre, 'success');
                  return resp.persona;
                });
      }

  }
}
