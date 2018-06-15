import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona.model';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonaService } from '../../services/persona/persona.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styles: []
})
export class PersonaComponent implements OnInit {

  persona: Persona = new Persona('', '',);

  constructor(
    public _personaService: PersonaService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {

    activatedRoute.params.subscribe( params => {

      let id = params['id'];

      if ( id !== 'nuevo' ) {
        this.cargarPersona( id );
      }

    });

   }

  ngOnInit() {
  }

  cargarPersona( id: string ) {
    this._personaService.cargarPersona( id )
          .subscribe( persona => {

            console.log( persona );
            this.persona = persona;
          });
  }

  guardarPersona( f: NgForm ) {

    console.log( f.valid );
    console.log( f.value );

    if ( f.invalid ) {
      return;
    }

    this._personaService.guardarPersona( this.persona )
            .subscribe( persona => {

              this.persona._id = persona._id;

              this.router.navigate(['/personas']);

            });

  }

}
