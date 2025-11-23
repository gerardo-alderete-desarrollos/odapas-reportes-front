import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtencionClientesComponent } from './atencion-clientes.component';

describe('AtencionClientesComponent', () => {
  let component: AtencionClientesComponent;
  let fixture: ComponentFixture<AtencionClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtencionClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtencionClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
