import { Component, OnInit } from '@angular/core';
import { Hero } from '../classes/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashBoardComponent implements OnInit{
  heroes : Hero[] = [];

  constructor(private heroService:HeroService){
  }

  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes=>this.heroes = heroes.slice(1, 5));
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  
}