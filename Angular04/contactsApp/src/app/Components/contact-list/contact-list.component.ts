import { Component, OnDestroy, OnInit } from '@angular/core';
import { IContact } from 'src/app/Models/icontact';
import { ContactService } from 'src/app/Services/contact.service';

@Component({
  selector: 'cont-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Contacts list';
   _list: IContact[] = [];
   _filtered: IContact[] = [];
   _filterString:string = '';
   get Filter():string {
     return this._filterString
   }
   set Filter(value:string) {
     this._filterString = value;
     this._filtered = this.performFilter(this._filterString);
   }

  constructor(private service: ContactService) { }

  ngOnInit(): void {
    this.service.getContacts().subscribe({
      next: conts => {
        this._list = conts;
        this._filtered = this.performFilter('');
      },
      error: err => console.error(err)
    });
  }

  performFilter(filterBy:string): IContact[] {
    return this._list.filter(c=>c.name.toLowerCase().includes(filterBy.toLowerCase()));
  }

  ngOnDestroy(): void {

  }

}
