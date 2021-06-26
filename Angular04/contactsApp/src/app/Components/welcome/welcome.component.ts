import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cont-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  pageTitle: string = "Welcome";
  constructor() { }

  ngOnInit(): void {
  }

}