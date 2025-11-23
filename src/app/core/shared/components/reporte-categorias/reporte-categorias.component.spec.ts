import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteCategoriasComponent } from './reporte-categorias.component';

describe('ReporteCategoriasComponent', () => {
  let component: ReporteCategoriasComponent;
  let fixture: ComponentFixture<ReporteCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
