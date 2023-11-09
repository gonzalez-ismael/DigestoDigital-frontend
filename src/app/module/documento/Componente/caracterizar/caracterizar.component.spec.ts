import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracterizarComponent } from './caracterizar.component';

describe('CaracterizarComponent', () => {
  let component: CaracterizarComponent;
  let fixture: ComponentFixture<CaracterizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracterizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracterizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
