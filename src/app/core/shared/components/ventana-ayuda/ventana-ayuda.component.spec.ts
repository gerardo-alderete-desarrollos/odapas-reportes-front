import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaAyudaComponent } from './ventana-ayuda.component';

describe('VentanaAyudaComponent', () => {
  let component: VentanaAyudaComponent;
  let fixture: ComponentFixture<VentanaAyudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaAyudaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentanaAyudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
