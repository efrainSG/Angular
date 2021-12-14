import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'rpg-arma',
  templateUrl: './arma.component.html',
  styleUrls: ['./arma.component.css']
})
export class ArmaComponent implements OnInit, OnChanges {

  @Input() nombre!: string;
  @Input() tipo!: string;
  precio!: number;
  ataque!: number;
  certeza!: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    switch (this.nombre) {
      case "cuchillo":
        this.precio = 10;        this.ataque = 10;        this.certeza = 3;
        break;
      case "espada":
        this.precio = 50;        this.ataque = 15;        this.certeza = 7;
        break;
      case "bastón":
        this.precio = 20;        this.ataque = 7;        this.certeza = 10;
        break;
      case "mazo":
        this.precio = 35;        this.ataque = 13;        this.certeza = 5;
        break;
      case "hacha":
        this.precio = 50;        this.ataque = 20;        this.certeza = 5;
        break;
      default:
        this.precio = 0;        this.ataque = 0;        this.certeza = 0;
        console.log(this.precio, this.ataque, this.certeza);
        break;
    }
  }

}
