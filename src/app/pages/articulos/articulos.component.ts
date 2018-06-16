import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../models/articulo.model';
import { ArticuloService } from '../../services/articulo/articulo.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styles: []
})
export class ArticulosComponent implements OnInit {

  articulos: Articulo[] = [];

  constructor(
    public _articuloService: ArticuloService
  ) { }

  ngOnInit() {
    this.cargarArticulos();
  }

  cargarArticulos() {
    this._articuloService.cargarArticulos()
          .subscribe( articulos => this.articulos = articulos );
  }

  buscarArticulo( termino: string ) {

    if ( termino.length <= 0 ) {
      this.cargarArticulos();
      return;
    }

    this._articuloService.buscarArticulos( termino )
            .subscribe( articulos =>  this.articulos = articulos );
  }

  borrarArticulo( articulo: Articulo ) {

    this._articuloService.borrarArticulo( articulo._id )
            .subscribe( () =>  this.cargarArticulos() );

  }

}
