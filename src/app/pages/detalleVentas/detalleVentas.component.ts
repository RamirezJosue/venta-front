import { Component, OnInit } from '@angular/core';
import { DetalleVenta } from '../../models/detalleVenta.model';
import { DetalleVentaService } from '../../services/detalleVenta/detalleVenta.service';

@Component({
  selector: 'app-detalleVentas',
  templateUrl: './detalleVentas.component.html',
  styles: []
})
export class DetalleVentasComponent implements OnInit {

  detalleVentas: DetalleVenta[] = [];

  constructor(
    public _detalleVentaService: DetalleVentaService
  ) { }

  ngOnInit() {
    this.cargarDetalleVentas();
  }

  cargarDetalleVentas() {
    this._detalleVentaService.cargarDetalleVentas()
          .subscribe( detalleVentas => this.detalleVentas = detalleVentas );
  }

  buscarDetalleVenta( termino: string ) {

    if ( termino.length <= 0 ) {
      this.cargarDetalleVentas();
      return;
    }

    this._detalleVentaService.buscarDetalleVentas( termino )
            .subscribe( detalleVentas =>  this.detalleVentas = detalleVentas );
  }

  borrarDetalleVenta( detalleVenta: DetalleVenta ) {

    this._detalleVentaService.borrarDetalleVenta( detalleVenta._id )
            .subscribe( () =>  this.cargarDetalleVentas() );

  }

}
