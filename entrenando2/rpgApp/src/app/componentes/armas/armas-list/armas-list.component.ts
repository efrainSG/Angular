import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rpg-armas-list',
  templateUrl: './armas-list.component.html',
  styleUrls: ['./armas-list.component.css']
})
export class ArmasListComponent implements OnInit {

  armas: any= [];
  constructor() { }

  ngOnInit(): void {
    this.armas = [
      {id: 1, nombre: "cuchillo"}
    ];
  }

}
