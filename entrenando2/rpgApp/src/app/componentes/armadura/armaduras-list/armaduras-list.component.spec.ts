import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmadurasListComponent } from './armaduras-list.component';

describe('ArmadurasListComponent', () => {
  let component: ArmadurasListComponent;
  let fixture: ComponentFixture<ArmadurasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmadurasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmadurasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
