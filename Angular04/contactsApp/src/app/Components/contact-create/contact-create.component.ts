import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/Models/icontact';

@Component({
  selector: 'cont-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {
  pageTitle: string = 'Create contact';
  private _contact!:IContact;
  private _savedContact!: IContact;

  get savedContact(): IContact {
    return this._savedContact;
  }

  get ContactData():IContact{
    return this._contact;
  }
  set ContactData(value:IContact) {
    this._contact = value;
  }
  constructor() { }

  ngOnInit(): void {
    this.new();
  }

  new(): void {
    this._contact = {name: '', address: '', favorite: false, id: 0, phone: ''};
  }

  save(): void {
    this._contact.id = 1;
    this._savedContact = this._contact;
    this.new();
  }

}
