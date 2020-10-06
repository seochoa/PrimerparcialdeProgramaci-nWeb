import { Component, OnInit } from '@angular/core';
import { NumericLiteral } from 'typescript';
import { Persona } from '../modelos/persona';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  personas:Persona[];
  ayudasT:number = 0;
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
  
    this.get();
  }
  

  get(){
  
    this.personas = this.personaService.get();
    
    for(let person of this.personas){
      this.ayudasT +=  person.vrapoyo;
    }
    
  }

}
