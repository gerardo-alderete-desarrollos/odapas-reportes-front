import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonFlotanteComponent } from './boton-flotante.component';

describe('BotonFlotanteComponent', () => {
  let component: BotonFlotanteComponent;
  let fixture: ComponentFixture<BotonFlotanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonFlotanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonFlotanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
