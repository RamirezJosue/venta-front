import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../../models/ingreso.model';
import { IngresoService } from '../../services/ingreso/ingreso.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styles: []
})
export class IngresosComponent implements OnInit {

  ingresos: Ingreso[] = [];

  constructor(
    public _ingresoService: IngresoService
  ) { }

  ngOnInit() {
    this.cargarIngresos();
  }

  cargarIngresos() {
    this._ingresoService.cargarIngresos()
          .subscribe( ingresos => this.ingresos = ingresos );
  }

  buscarIngreso( termino: string ) {

    if ( termino.length <= 0 ) {
      this.cargarIngresos();
      return;
    }

    this._ingresoService.buscarIngresos( termino )
            .subscribe( ingresos =>  this.ingresos = ingresos );
  }

  borrarIngreso( ingreso: Ingreso ) {

    this._ingresoService.borrarIngreso( ingreso._id )
            .subscribe( () =>  this.cargarIngresos() );

  }

}
