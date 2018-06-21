import { Component, OnInit } from '@angular/core';
import { DetalleVenta } from '../../models/detalleVenta.model';
import { Router, ActivatedRoute } from '@angular/router';
import { DetalleVentaService } from '../../services/detalleVenta/detalleVenta.service';
import { NgForm } from '@angular/forms';
import { VentaService } from '../../services/venta/venta.service';
import { Venta } from '../../models/venta.model';
import { ArticuloService } from '../../services/articulo/articulo.service';
import { Articulo } from '../../models/articulo.model';

@Component({
  selector: 'app-detalleVenta',
  templateUrl: './detalleVenta.component.html',
  styles: []
})
export class DetalleVentaComponent implements OnInit {

  ventas: Venta[] = [];
  articulos: Articulo[] = [];
  detalleVenta: DetalleVenta = new DetalleVenta( 0 );
  venta: Venta = new Venta('', '', '', '', '', '', '', '', '', '');
  articulo: Articulo = new Articulo('', '');
  

  constructor(
    public _detalleVentaService: DetalleVentaService,
    public _ventaService: VentaService,
    public _articuloService: ArticuloService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {

    activatedRoute.params.subscribe( params => {

      let id = params['id'];

      if ( id !== 'nuevo' ) {
        this.cargarDetalleVenta( id );
      }

    });

  }

  ngOnInit() {

    this._ventaService.cargarVenta('')
          .subscribe( ventas => this.ventas = ventas );
    this._articuloService.cargarArticulo('')
      .subscribe(articulos => this.articulos = articulos);

  }

  cargarDetalleVenta( id: string ) {
    this._detalleVentaService.cargarDetalleVenta( id )
          .subscribe( detalleVenta => {

            console.log( detalleVenta );
            this.detalleVenta = detalleVenta;
            this.detalleVenta.venta = detalleVenta.venta._id;
            this.detalleVenta.articulo = detalleVenta.articulo._id;
            this.cambioVenta(this.detalleVenta.venta );
            this.cambioArticulo(this.detalleVenta.articulo);
          });
  }

  guardarDetalleVenta( f: NgForm ) {

    console.log( f.valid );
    console.log( f.value );

    if ( f.invalid ) {
      return;
    }

    this._detalleVentaService.guardarDetalleVenta( this.detalleVenta )
            .subscribe( detalleVenta => {

              this.detalleVenta._id = detalleVenta._id;

              this.router.navigate(['/detalleVentas' ]);

            });

  }

  cambioVenta( id: string ) {

    this._ventaService.obtenerVenta( id )
          .subscribe( venta => this.venta = venta );

  }

  cambioArticulo(id: string) {

    this._articuloService.obtenerArticulo(id)
      .subscribe(articulo => this.articulo = articulo);

  }



}
