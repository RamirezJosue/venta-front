import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../models/articulo.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticuloService } from '../../services/articulo/articulo.service';
import { NgForm } from '@angular/forms';
import { CategoriaService } from '../../services/categoria/categoria.service';
import { Categoria } from '../../models/categoria.model';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styles: []
})
export class ArticuloComponent implements OnInit {

  categorias: Categoria[] = [];
  articulo: Articulo = new Articulo('', '',);
  categoria: Categoria = new Categoria('');

  constructor(
    public _articuloService: ArticuloService,
    public _categoriaService: CategoriaService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {

    activatedRoute.params.subscribe( params => {

      let id = params['id'];

      if ( id !== 'nuevo' ) {
        this.cargarArticulo( id );
      }

    });

  }

  ngOnInit() {

    this._categoriaService.cargarCategorias()
          .subscribe( categorias => this.categorias = categorias );

  }

  cargarArticulo( id: string ) {
    this._articuloService.cargarArticulo( id )
          .subscribe( articulo => {

            console.log( articulo );
            this.articulo = articulo;
            this.articulo.categoria = articulo.categoria._id;
            this.cambioCategoria( this.articulo.categoria );
          });
  }

  guardarArticulo( f: NgForm ) {

    console.log( f.valid );
    console.log( f.value );

    if ( f.invalid ) {
      return;
    }

    this._articuloService.guardarArticulo( this.articulo )
            .subscribe( articulo => {

              this.articulo._id = articulo._id;

              this.router.navigate(['/articulos' ]);

            });

  }

  cambioCategoria( id: string ) {

    this._categoriaService.obtenerCategoria( id )
          .subscribe( categoria => this.categoria = categoria );

  }



}
