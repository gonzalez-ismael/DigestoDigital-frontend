import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparticionComponent } from './reparticion.component';

describe('ReparticionComponent', () => {
  let component: ReparticionComponent;
  let fixture: ComponentFixture<ReparticionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReparticionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReparticionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
