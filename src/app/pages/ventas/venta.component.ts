import { Component, OnInit } from '@angular/core';
import { Venta } from '../../models/venta.model';
import { Router, ActivatedRoute } from '@angular/router';
import { VentaService } from '../../services/venta/venta.service';
import { NgForm } from '@angular/forms';
import { PersonaService } from '../../services/persona/persona.service';
import { Persona } from '../../models/persona.model';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styles: []
})
export class VentaComponent implements OnInit {

  personas: Persona[] = [];
  venta: Venta = new Venta('', '',);
  persona: Persona = new Persona('', '');
  

  constructor(
    public _ventaService: VentaService,
    public _personaService: PersonaService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {

    activatedRoute.params.subscribe( params => {

      let id = params['id'];

      if ( id !== 'nuevo' ) {
        this.cargarVenta( id );
      }

    });

  }

  ngOnInit() {

    this._personaService.cargarPersonas()
          .subscribe( personas => this.personas = personas );

  }

  cargarVenta( id: string ) {
    this._ventaService.cargarVenta( id )
          .subscribe( venta => {

            console.log( venta );
            this.venta = venta;
            this.venta.cliente = venta.persona._id;
            this.cambioPersona(this.venta.cliente );
          });
  }

  guardarVenta( f: NgForm ) {

    console.log( f.valid );
    console.log( f.value );

    if ( f.invalid ) {
      return;
    }

    this._ventaService.guardarVenta( this.venta )
            .subscribe( venta => {

              this.venta._id = venta._id;

              this.router.navigate(['/ventas' ]);

            });

  }

  cambioPersona( id: string ) {

    this._personaService.obtenerPersona( id )
          .subscribe( persona => this.persona = persona );

  }



}
