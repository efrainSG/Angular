import { Component } from "@angular/core";

@Component({
  selector:'pm-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
  pageTitle: string = 'Acme product management';
  data= {
  num1:1,
  num2:2,
  numRes:0
  };
}