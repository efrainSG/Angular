import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmaduraComponent } from './armadura.component';

describe('ArmaduraComponent', () => {
  let component: ArmaduraComponent;
  let fixture: ComponentFixture<ArmaduraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmaduraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmaduraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
