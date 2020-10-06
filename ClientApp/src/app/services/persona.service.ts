import { Injectable } from '@angular/core';
import { Persona } from '../modelos/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }
  get(): Persona[] {
    return JSON.parse(localStorage.getItem('datos'));
  }
  post(persona: Persona) {
    let i: number = 0;
    let personas: Persona[] = [];
    if (this.get() != null) {
      personas = this.get();
    }

    if (personas!=null){
      
      for(let persons of personas){
        if(persona.identificacion==persons.identificacion){
          i=1
        }
      }
    }

    let total:number = 0;
    total = persona.vrapoyo +this.totalayudas(personas);

    if(total < 600000){
      if (i == 0){
        personas.push(persona);
        localStorage.setItem('datos', JSON.stringify(personas));
      } 
    }
       
  }

  totalayudas(personas:Persona[]){
    let totalayudas:number = 0;

    for(let persons of personas){
      
        totalayudas += persons.vrapoyo;
      
      
    }

    return totalayudas;
  }


 
}
