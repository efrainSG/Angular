import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'rpg-armadura',
  templateUrl: './armadura.component.html',
  styleUrls: ['./armadura.component.css']
})
export class ArmaduraComponent implements OnInit, OnChanges {

  @Input() nombre: string = "";
  @Input() tipo: string = "";

  precio!: number;
  defensa!: number;
  evasion!: number;
  
  constructor() { 

  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    switch (this.tipo) {
      case "escudo":
        this.precio = 25;
        this.defensa = 20;
        this.evasion = 5;
        this.nombre = "Escudo de madera";
      break;
      case "peto":
        this.precio = 10;
        this.defensa = 10;
        this.evasion = 7;
        this.nombre = "Peto de lana y cuero";
      break;
      case "casco":
        this.precio = 10;
        this.defensa = 5;
        this.evasion = 6;
        this.nombre = "casco de cuero y hueso";
      break;
      case "guantelete":
        this.precio = 15;
        this.defensa = 7;
        this.evasion = 7;
        this.nombre = "Guatelete de cuero y hueso";
      break;
      case "capa":
        this.precio = 5;
        this.defensa = 2;
        this.evasion = 5;
        this.nombre = "Capa de lana";
      break;
      default:
        this.precio = 0;
        this.defensa = 0;
        this.evasion = 0;
        this.nombre = "";
      break;
    }
  }

}
