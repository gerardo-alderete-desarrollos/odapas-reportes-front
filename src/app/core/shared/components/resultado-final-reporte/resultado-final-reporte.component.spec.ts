import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoFinalReporteComponent } from './resultado-final-reporte.component';

describe('ResultadoFinalReporteComponent', () => {
  let component: ResultadoFinalReporteComponent;
  let fixture: ComponentFixture<ResultadoFinalReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoFinalReporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoFinalReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
