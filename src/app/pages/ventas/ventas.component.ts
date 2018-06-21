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
  desde: number = 0;

  totalRegistro: number = 0;

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

  cambiarDesde( valor: number ) {

    let desde = this.desde + valor;
    console.log( desde );

    if ( desde >= this.totalRegistro ) {
      return;
    }

    if ( desde < 0 ) {
      return;
    }

    this.desde += valor;
    this.cargarVentas();

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
