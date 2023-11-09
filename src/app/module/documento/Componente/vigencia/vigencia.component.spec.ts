import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VigenciaComponent } from './vigencia.component';

describe('VigenciaComponent', () => {
  let component: VigenciaComponent;
  let fixture: ComponentFixture<VigenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VigenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VigenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
