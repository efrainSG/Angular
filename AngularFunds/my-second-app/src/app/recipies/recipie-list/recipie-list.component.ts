import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a simple recipe test', 'https://cdn.cookmonkeys.es/recetas/medium/maki-sushi-3740.jpg'),
    new Recipe('A test recipe', 'This is a simple recipe test', 'https://cdn.cookmonkeys.es/recetas/medium/maki-sushi-3740.jpg'),
    new Recipe('A test recipe', 'This is a simple recipe test', 'https://cdn.cookmonkeys.es/recetas/medium/maki-sushi-3740.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
