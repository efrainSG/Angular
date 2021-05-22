import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounce, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HeroService } from '../services/hero.service';
import { Hero } from '../classes/hero';

// without this decorator ans its specifications, the class will never become a real component.
@Component({
  selector: 'app-hero-search', // defines the tag will be used to instantiate the component.

  /********* the next files referenced by the attributes must be inside the same component folder **********/
  templateUrl: './hero-search.component.html', // specifies the HTML wich will be rendered using the selector.
  styleUrls: ['./hero-search.component.css'], // stablishes the CSS styles for the component.
})

// here, in the class, lies the code for the component.
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerm = new Subject<string>();

  constructor(private heroService: HeroService) {

  }

  search(term: string): void {
    this.searchTerm.next(term);
  }

  ngOnInit() :void {
    this.heroes$ = this.searchTerm.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term:string)=>this.heroService.searchHeroes(term))
    );
  }


}
