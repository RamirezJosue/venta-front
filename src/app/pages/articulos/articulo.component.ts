import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../models/articulo.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticuloService } from '../../services/articulo/articulo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styles: []
})
export class ArticuloComponent implements OnInit {

  articulo: Articulo = new Articulo('', '',);

  constructor(
    public _articuloService: ArticuloService,
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
  }

  cargarArticulo( id: string ) {
    this._articuloService.cargarArticulo( id )
          .subscribe( articulo => {

            console.log( articulo );
            this.articulo = articulo;
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

              this.router.navigate(['/articulos']);

            });

  }

}
