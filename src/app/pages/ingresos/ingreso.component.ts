import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../../models/ingreso.model';
import { Router, ActivatedRoute } from '@angular/router';
import { IngresoService } from '../../services/ingreso/ingreso.service';
import { NgForm } from '@angular/forms';
import { PersonaService } from '../../services/persona/persona.service';
import { Persona } from '../../models/persona.model';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styles: []
})
export class IngresoComponent implements OnInit {

  personas: Persona[] = [];
  ingreso: Ingreso = new Ingreso('', '', );
  persona: Persona = new Persona('', '');
  

  constructor(
    public _ingresoService: IngresoService,
    public _proveedorService: PersonaService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {

    activatedRoute.params.subscribe( params => {

      let id = params['id'];

      if ( id !== 'nuevo' ) {
        this.cargarIngreso( id );
      }

    });

  }

  ngOnInit() {

    this._proveedorService.cargarPersonas()
          .subscribe( personas => this.personas = personas );

  }

  cargarIngreso( id: string ) {
    this._ingresoService.cargarIngreso( id )
          .subscribe( ingreso => {

            console.log( ingreso );
            this.ingreso = ingreso;
            this.ingreso.proveedor = ingreso.persona._id;
            this.cambioProveedor(this.ingreso.proveedor );
          });
  }

  guardarIngreso( f: NgForm ) {

    console.log( f.valid );
    console.log( f.value );

    if ( f.invalid ) {
      return;
    }

    this._ingresoService.guardarIngreso( this.ingreso )
            .subscribe( ingreso => {

              this.ingreso._id = ingreso._id;

              this.router.navigate(['/ingresos' ]);

            });

  }

  cambioProveedor( id: string ) {

    this._proveedorService.obtenerPersona( id )
          .subscribe( persona => this.persona = persona );

  }



}
