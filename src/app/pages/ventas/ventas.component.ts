import { Component, OnInit } from '@angular/core';
import { Venta } from '../../models/venta.model';
import { VentaService } from '../../services/venta/venta.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styles: []
})
export class VentasComponent implements OnInit {

  ventas: Venta[] = [];

  constructor(
    public _ventaService: VentaService
  ) { }

  ngOnInit() {
    this.cargarVentas();
  }

  cargarVentas() {
    this._ventaService.cargarVentas()
          .subscribe( ventas => this.ventas = ventas );
  }

  buscarVenta( termino: string ) {

    if ( termino.length <= 0 ) {
      this.cargarVentas();
      return;
    }

    this._ventaService.buscarVentas( termino )
            .subscribe( ventas =>  this.ventas = ventas );
  }

  borrarVenta( venta: Venta ) {

    this._ventaService.borrarVenta( venta._id )
            .subscribe( () =>  this.cargarVentas() );

  }

}
