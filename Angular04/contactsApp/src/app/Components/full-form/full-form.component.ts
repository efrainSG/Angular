import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserSettings } from 'src/app/data/user-settings';

@Component({
  selector: 'cont-full-form',
  templateUrl: './full-form.component.html',
  styleUrls: ['./full-form.component.css']
})
export class FullFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null
  };

  userSettings: UserSettings = { ...this.originalUserSettings };
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log('in submit: ', form.valid);
  }

  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.valid);
  }
}
