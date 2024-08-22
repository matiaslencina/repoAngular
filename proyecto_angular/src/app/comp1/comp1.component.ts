import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  public empleados: any = [
    {
    nombre: "Pedro",
    pasante: false,
    edad: 25,
    datos: {
    puesto: "Programación",
    antiguedad: 3
    }
    },
    {
    nombre: "Julieta",
    pasante: false,
    edad: 28,
    datos: {
    puesto: "Programación",
    antiguedad: 1
    }
    },
    {
    nombre: "Joaquin",
    pasante: true,
    edad: 20,
    datos: {
    puesto: "Programación",
    antiguedad: 1
    }
    },
    {
    nombre: "Ricardo",
    pasante: false,
    edad: 50,
    datos: {
    puesto: "Ventas",
    antiguedad: 5
    }
    },
    {
    nombre: "Fabio",
    pasante: true,
    edad: 22,
    datos: {
    puesto: "Programación",
    antiguedad: 0.5
    }
    }
    ];
    

    onClick(nombre: string){
      console.log(`hola ${nombre}`); 
    }
    
}
