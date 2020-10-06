import { Component, OnInit } from '@angular/core';
import { Persona } from '../modelos/persona';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario;
  persona: Persona;

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.persona= new Persona();
  }


  add(form){
    console.log(form);
    alert('Se agrego una nueva persona ' + JSON.stringify(this.persona));
    this.personaService.post(this.persona);
  }

}
