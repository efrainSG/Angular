import { Component, OnDestroy, OnInit } from '@angular/core';
import { IContact } from 'src/app/Models/icontact';

@Component({
  selector: 'cont-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Contacts list';
   _list: IContact[] = [
    {id:1, name:"Efra",address:"street 1", phone:"000", favorite:false },
    {id:2, name:"May",address:"street 1", phone:"000", favorite:true },
    {id:3, name:"Juan",address:"street 1", phone:"000", favorite:true },
    {id:4, name:"Josh",address:"street 1", phone:"000", favorite:true },
    {id:5, name:"Yesa",address:"street 1", phone:"000", favorite:true },
    {id:6, name:"Casca",address:"street 1", phone:"000", favorite:false },
    {id:7, name:"Moon",address:"street 1", phone:"000", favorite:false },
    ];
   _filtered: IContact[] = [];
   _filterString:string = '';
   get Filter():string {
     return this._filterString
   }
   set Filter(value:string) {
     this._filterString = value;
     this._filtered = this.performFilter(this._filterString);
   }

  constructor() { }

  ngOnInit(): void {
    this._filtered = this.performFilter('');
  }

  performFilter(filterBy:string): IContact[] {
    return this._list.filter(c=>c.name.toLowerCase().includes(filterBy.toLowerCase()));
  }

  ngOnDestroy(): void {

  }

}
