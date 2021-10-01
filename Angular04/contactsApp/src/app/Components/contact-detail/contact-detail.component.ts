import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { observable } from 'rxjs';
import { IContact } from 'src/app/Models/icontact';
import { ContactService } from 'src/app/Services/contact.service';

@Component({
  selector: 'cont-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  _getBack: string = '/list';
  contact: IContact = {
    id: 0,
    address: '',
    favorite: true,
    name: '',
    phone: ''
  };
  pageTitle: string = "Contact's detail";

  get getBack(): string {
    return this._getBack;
  }
  set getBack(value: string) {
    this._getBack = value;
  }

  constructor(private route: ActivatedRoute, private router: Router, private service: ContactService) {
  }

  ngOnInit(): void {
    this.contact.id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getContact(this.contact.id).subscribe({
      next: c => this.contact = c,
      error: e => console.error(e)      
    });
    console.log(this.contact);

  }

  onBack(): void {
    this.router.navigate([this._getBack]);
  }

  delete(): void {
    if(confirm("R U sure 2 delete this rec?")){
      this.service.delContact(this.contact.id).subscribe({
        next: r => console.log(r),
        error: e => console.error(e)        
      });
      this.onBack();
    }
  }
}
