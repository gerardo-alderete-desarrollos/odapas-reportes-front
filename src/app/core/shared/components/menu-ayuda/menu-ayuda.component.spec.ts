import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAyudaComponent } from './menu-ayuda.component';

describe('MenuAyudaComponent', () => {
  let component: MenuAyudaComponent;
  let fixture: ComponentFixture<MenuAyudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAyudaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuAyudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
