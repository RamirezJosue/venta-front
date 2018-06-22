import { Component, OnInit } from '@angular/core';
import { DetalleIngreso } from '../../models/detalleIngreso.model';
import { Router, ActivatedRoute } from '@angular/router';
import { DetalleIngresoService } from '../../services/detalleIngreso/detalleIngreso.service';
import { NgForm } from '@angular/forms';
import { IngresoService } from '../../services/ingreso/ingreso.service';
import { Ingreso } from '../../models/ingreso.model';
import { ArticuloService } from '../../services/articulo/articulo.service';
import { Articulo } from '../../models/articulo.model';

@Component({
  selector: 'app-detalleIngreso',
  templateUrl: './detalleIngreso.component.html',
  styles: []
})
export class DetalleIngresoComponent implements OnInit {

  ingresos: Ingreso[] = [];
  articulos: Articulo[] = [];
  detalleIngreso: DetalleIngreso = new DetalleIngreso( 0 );
  ingreso: Ingreso = new Ingreso('', '');
  articulo: Articulo = new Articulo('', '');
  

  constructor(
    public _detalleIngresoService: DetalleIngresoService,
    public _ingresoService: IngresoService,
    public _articuloService: ArticuloService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {

    activatedRoute.params.subscribe( params => {

      let id = params['id'];

      if ( id !== 'nuevo' ) {
        this.cargarDetalleIngreso( id );
      }

    });

  }

  ngOnInit() {

    this._ingresoService.cargarIngreso('')
          .subscribe( ingresos => this.ingresos = ingresos );
    this._articuloService.cargarArticulo('')
      .subscribe(articulos => this.articulos = articulos);

  }

  cargarDetalleIngreso( id: string ) {
    this._detalleIngresoService.cargarDetalleIngreso( id )
          .subscribe( detalleIngreso => {

            console.log( detalleIngreso );
            this.detalleIngreso = detalleIngreso;
            this.detalleIngreso.ingreso = detalleIngreso.ingreso._id;
            this.detalleIngreso.articulo = detalleIngreso.articulo._id;
            this.cambioIngreso(this.detalleIngreso.ingreso );
            this.cambioArticulo(this.detalleIngreso.articulo);
          });
  }

  guardarDetalleIngreso( f: NgForm ) {

    console.log( f.valid );
    console.log( f.value );

    if ( f.invalid ) {
      return;
    }

    this._detalleIngresoService.guardarDetalleIngreso( this.detalleIngreso )
            .subscribe( detalleIngreso => {

              this.detalleIngreso._id = detalleIngreso._id;

              this.router.navigate(['/detalleIngresos' ]);

            });

  }

  cambioIngreso( id: string ) {

    this._ingresoService.obtenerIngreso( id )
          .subscribe( ingreso => this.ingreso = ingreso );

  }

  cambioArticulo(id: string) {

    this._articuloService.obtenerArticulo(id)
      .subscribe(articulo => this.articulo = articulo);

  }



}
