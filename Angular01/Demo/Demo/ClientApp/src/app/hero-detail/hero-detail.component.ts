import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../classes/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
  hero: Hero | undefined;

  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location){
  }

  getHero():void{
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10); // Still don't understand what does mean this...
    this.heroService.getHero(id).subscribe(hero=>this.hero = hero); // .subscribe chains actions don't?
  }

  goBack():void{
    this.location.back();
  }

  save():void{
    if(this.hero)
      this.heroService.updateHero(this.hero).subscribe(()=>this.goBack());
  }

  ngOnInit(): void {
    this.getHero();
  }
}