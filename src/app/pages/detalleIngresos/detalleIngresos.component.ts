import { Component, OnInit } from '@angular/core';
import { DetalleIngreso } from '../../models/detalleIngreso.model';
import { DetalleIngresoService } from '../../services/detalleIngreso/detalleIngreso.service';

@Component({
  selector: 'app-detalleIngresos',
  templateUrl: './detalleIngresos.component.html',
  styles: []
})
export class DetalleIngresosComponent implements OnInit {

  detalleIngresos: DetalleIngreso[] = [];

  constructor(
    public _detalleIngresoService: DetalleIngresoService
  ) { }

  ngOnInit() {
    this.cargarDetalleIngresos();
  }

  cargarDetalleIngresos() {
    this._detalleIngresoService.cargarDetalleIngresos()
          .subscribe( detalleIngresos => this.detalleIngresos = detalleIngresos );
  }

  buscarDetalleIngreso( termino: string ) {

    if ( termino.length <= 0 ) {
      this.cargarDetalleIngresos();
      return;
    }

    this._detalleIngresoService.buscarDetalleIngresos( termino )
            .subscribe( detalleIngresos =>  this.detalleIngresos = detalleIngresos );
  }

  borrarDetalleIngreso( detalleIngreso: DetalleIngreso ) {

    this._detalleIngresoService.borrarDetalleIngreso( detalleIngreso._id )
            .subscribe( () =>  this.cargarDetalleIngresos() );

  }

}
