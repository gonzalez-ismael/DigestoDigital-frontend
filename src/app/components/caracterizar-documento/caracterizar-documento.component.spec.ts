import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracterizarDocumentoComponent } from './caracterizar-documento.component';

describe('CaracterizarDocumentoComponent', () => {
  let component: CaracterizarDocumentoComponent;
  let fixture: ComponentFixture<CaracterizarDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracterizarDocumentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracterizarDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
