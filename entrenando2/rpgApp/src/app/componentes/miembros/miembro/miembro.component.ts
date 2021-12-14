import { Component, Input, OnInit, Output, OnChanges } from '@angular/core';
import { ArmaduraComponent } from '../../armadura/armadura/armadura.component';
import { ArmaComponent } from '../../armas/arma/arma.component';

@Component({
  selector: 'rpg-miembro',
  templateUrl: './miembro.component.html',
  styleUrls: ['./miembro.component.css']
})
export class MiembroComponent implements OnInit {

  @Input() id!: number;
  @Input() nombre!: string;
  @Input() clase!: string;

  @Output() salud!: number;
  @Output() nivel!: number;
  @Output() experiencia!: number;
  @Output() ataque!: number;
  @Output() certeza!: number;
  @Output() defensa!: number;
  @Output() evasion!: number;

  private ataqueBase!: number;
  private certezaBase!: number;
  private defensaBase!: number;
  private evasionBase!: number;

  arma!: ArmaComponent;
  armaduras!: any[];

  constructor() { }

  ngOnInit(): void {
    this.armaduras = [new ArmaduraComponent(), new ArmaduraComponent(), new ArmaduraComponent(), new ArmaduraComponent()];
    
    switch (this.clase) {
      case "GUERRERO": 
        this.salud = 50;
        this.ataqueBase = 10;
        this.certezaBase = 6;
        this.defensaBase = 7;
        this.evasionBase = 3;
      break;
      case "LADRON": 
        this.salud = 45;
        this.ataqueBase =7;
        this.ataqueBase = 7;
        this.certezaBase = 8;
        this.defensaBase = 5;
        this.evasionBase = 5;
      break;
      case "MAGO NEGRO": 
        this.salud = 40;
        this.ataqueBase = 5;
        this.ataqueBase = 5;
        this.certezaBase = 7;
        this.defensaBase = 4;
        this.evasionBase = 6;
      break;
      case "MAGA BLANCA": 
        this.salud = 55;
        this.ataqueBase = 6;
        this.ataqueBase = 6;
        this.certezaBase = 6;
        this.defensaBase = 6;
        this.evasionBase = 3;
      break;
  }
  this.nivel = 1;
  this.experiencia = 0;
  this.ataque = this.ataqueBase;
  this.defensa = this.defensaBase;
  this.evasion = this.evasionBase;
  this.certeza = this.certezaBase;

  this.arma = new ArmaComponent();
  this.armaduras = [];
  }

  addExperiencia(experiencia: number) {
    this.experiencia += experiencia;
    let factor: number;
    switch (this.clase) {
      case "GUERRERO": 
        factor = (this.experiencia * (1+(this.nivel / 100))) % 20;
        break;
      case "LADRON": 
        factor = (this.experiencia * (1+(this.nivel / 100))) % 17;
        break;
      case "MAGO NEGRO": 
        factor = (this.experiencia * (1+(this.nivel / 100))) % 21;
        break;
      case "MAGA BLANCA": 
        factor = (this.experiencia * (1+(this.nivel / 100))) % 23;
        break;
      default:
        factor = 0;
        break;
    }
    console.log(factor);
    if (factor < 3) {
      this.nivel ++;
      this.salud *= (1 + (this.nivel/50));
      this.salud = Math.floor(this.salud);
    }
  }

  addArma(tipo: string) {
    switch (tipo) {
      case "cuchillo":
        if (this.clase == "GUERRERO" || this.clase == "LADRON" || this.clase == "MAGO NEGRO") {
          this.arma.nombre = "cuchillo";
          this.arma.tipo = "cuchillo";
        } else {
          this.arma.nombre = "";
          this.arma.tipo = "";
        }
      break;
      case "espada":
        if (this.clase == "GUERRERO" || this.clase == "LADRON") {
          this.arma.nombre = "espada";
          this.arma.tipo = "espada corta";
        } else {
          this.arma.nombre = "";
          this.arma.tipo = "";
        }
      break;
      case "mazo":
        if (this.clase == "GUERRERO" || this.clase == "LADRON" || this.clase == "MAGA BLANCA") {
          this.arma.nombre = "mazo";
          this.arma.tipo = "mazo de madera";
        } else {
          this.arma.nombre = "";
          this.arma.tipo = "";
        }
      break;
      case "hacha":
        if (this.clase == "GUERRERO") {
          this.arma.nombre = "hacha";
          this.arma.tipo = "hacha";
        } else {
          this.arma.nombre = "";
          this.arma.tipo = "";
        }
      break;
      case "bastón":
        if (this.clase == "GUERRERO" || this.clase == "LADRON" || this.clase == "MAGO NEGRO") {
          this.arma.nombre = "bastón";
          this.arma.tipo = "bastón de madera";
        } else {
          this.arma.nombre = "";
          this.arma.tipo = "";
        }
      break;
      default:
        this.arma.nombre = "";
        this.arma.tipo = "";
      break;
    }
    this.arma.ngOnChanges();
    this.ataque = this.arma.ataque + this.ataqueBase;
    this.certeza = this.arma.certeza + this.certezaBase;
  }

  addArmadura(tipo: string) {
    switch (tipo) {
      case "escudo":
        this.armaduras[0] = new ArmaduraComponent();
        if (this.clase == "GUERRERO" || this.clase == "LADRON"){
          this.armaduras[0].nombre = tipo;
          this.armaduras[0].tipo = tipo;
        } else {
          this.armaduras[0].nombre = "";
          this.armaduras[0].tipo = "";
        }
        this.armaduras[0].ngOnChanges();
      break;
      case "peto":
        this.armaduras[1] = new ArmaduraComponent();
        if (this.clase == "GUERRERO" || this.clase == "LADRON"){
          this.armaduras[1].nombre = tipo;
          this.armaduras[1].tipo = tipo;
        } else {
          this.armaduras[1].nombre = "";
          this.armaduras[1].tipo = "";
        }
        this.armaduras[1].ngOnChanges();
      break;
      case "casco":
        this.armaduras[2] = new ArmaduraComponent();
        if (this.clase == "GUERRERO"){
          this.armaduras[2].nombre = tipo;
          this.armaduras[2].tipo = tipo;
        } else {
          this.armaduras[2].nombre = "";
          this.armaduras[2].tipo = "";
        }
        this.armaduras[2].ngOnChanges();
      break;
      case "guantelete":
        this.armaduras[1] = new ArmaduraComponent();
        this.armaduras[1].nombre = tipo;
        this.armaduras[1].tipo = tipo;

        this.armaduras[1].ngOnChanges();
      break;
      case "capa":
        this.armaduras[3] = new ArmaduraComponent();
        this.armaduras[3].nombre = tipo;
        this.armaduras[3].tipo = tipo;

        this.armaduras[3].ngOnChanges();
      break;
      default:
      break;
    }
    this.defensa = this.defensaBase;
    this.evasion = this.evasionBase;
    this.armaduras.forEach(element => {
      console.log(element);
      this.defensa += (element.defensa | 0);
      this.evasion += (element.evasion | 0);
    });
  }

  ngOnChanges(): void{
  }
}
