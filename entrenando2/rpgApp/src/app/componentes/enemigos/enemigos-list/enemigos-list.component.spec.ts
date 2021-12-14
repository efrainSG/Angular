import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemigosListComponent } from './enemigos-list.component';

describe('EnemigosListComponent', () => {
  let component: EnemigosListComponent;
  let fixture: ComponentFixture<EnemigosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnemigosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnemigosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
