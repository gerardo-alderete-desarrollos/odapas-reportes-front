import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteSubcategoriasComponent } from './reporte-subcategorias.component';

describe('ReporteSubcategoriasComponent', () => {
  let component: ReporteSubcategoriasComponent;
  let fixture: ComponentFixture<ReporteSubcategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteSubcategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteSubcategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
