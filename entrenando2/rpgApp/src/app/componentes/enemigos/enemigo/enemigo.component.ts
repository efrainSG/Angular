import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rpg-enemigo',
  templateUrl: './enemigo.component.html',
  styleUrls: ['./enemigo.component.css']
})
export class EnemigoComponent implements OnInit {
  @Input() id!: number;
  @Input() nombre!: string;
  @Input() clase!: string;
  @Output() experiencia!: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
