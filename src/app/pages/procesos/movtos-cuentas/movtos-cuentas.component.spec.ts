import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovtosCuentasComponent } from './movtos-cuentas.component';

describe('MovtosCuentasComponent', () => {
  let component: MovtosCuentasComponent;
  let fixture: ComponentFixture<MovtosCuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovtosCuentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovtosCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
