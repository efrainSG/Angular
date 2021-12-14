import { Component, OnInit } from '@angular/core';
import { MiembroComponent } from '../miembro/miembro.component';

@Component({
  selector: 'rpg-miembros-list',
  templateUrl: './miembros-list.component.html',
  styleUrls: ['./miembros-list.component.css']
})

export class MiembrosListComponent implements OnInit {

  miembros!: any;

  constructor() { }

  ngOnInit(): void {
    this.miembros = [
      { id: 1, nombre: "ERICK", clase:"GUERRERO" },
      { id: 1, nombre: "JHON", clase:"LADRON" },
      { id: 1, nombre: "ORCO", clase:"MAGO NEGRO" },
      { id: 1, nombre: "LILA", clase:"MAGA BLANCA" }
  ];
  }

}
