import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona.model';
import { PersonaService } from '../../services/persona/persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styles: []
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(
    public _personaService: PersonaService
  ) { }

  ngOnInit() {
    this.cargarPersonas();
  }

  cargarPersonas() {
    this._personaService.cargarPersonas()
          .subscribe( personas => this.personas = personas );
  }

  buscarPersona( termino: string ) {

    if ( termino.length <= 0 ) {
      this.cargarPersonas();
      return;
    }

    this._personaService.buscarPersonas( termino )
            .subscribe( personas =>  this.personas = personas );
  }

  borrarPersona( persona: Persona ) {

    this._personaService.borrarPersona( persona._id )
            .subscribe( () =>  this.cargarPersonas() );

  }

}
