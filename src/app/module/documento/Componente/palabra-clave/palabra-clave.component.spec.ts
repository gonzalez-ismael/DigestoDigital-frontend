import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalabraClaveComponent } from './palabra-clave.component';

describe('PalabraClaveComponent', () => {
  let component: PalabraClaveComponent;
  let fixture: ComponentFixture<PalabraClaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalabraClaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalabraClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
