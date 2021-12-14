import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rpg-enemigos-list',
  templateUrl: './enemigos-list.component.html',
  styleUrls: ['./enemigos-list.component.css']
})
export class EnemigosListComponent implements OnInit {
  enemigos: any;
  constructor() { 
    this.enemigos = [
      { id: 1, nombre: "lobo", clase: "salvaje" },
      { id: 1, nombre: "murciélago", clase: "salvaje" },
      { id: 1, nombre: "duende", clase: "salvaje" },
      { id: 1, nombre: "serpiente", clase: "salvaje" },
      { id: 1, nombre: "tarántula", clase: "salvaje" },
      { id: 1, nombre: "escorpión", clase: "salvaje" },
      { id: 1, nombre: "esqueleto", clase: "salvaje" },
  ];
  }

  ngOnInit(): void {
  }

}
