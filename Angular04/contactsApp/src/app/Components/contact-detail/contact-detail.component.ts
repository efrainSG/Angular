import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { observable } from 'rxjs';
import { IContact } from 'src/app/Models/icontact';

@Component({
  selector: 'cont-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  _getBack: string = '/list';
  contact: IContact | undefined;
  pageTitle: string = "Contact's detail";

  get getBack(): string {
    return this._getBack;
  }
  set getBack(value: string) {
    this._getBack = value;
  }

  constructor(private route: ActivatedRoute, private router: Router) {
    this.contact = {
      id: Number( route.snapshot.paramMap.get('id')),
      address: 'street 2',
      favorite: true,
      name: 'name 2',
      phone: '000-000'
    };
   }

  ngOnInit(): void {
  }

  onBack(): void {
    this.router.navigate([this._getBack]);
  }

  delete(): void {
    if(confirm("R U sure 2 delete this rec?")){
      alert("deleted :-p");
      this.onBack();
    }
  }
}
