import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarLibroComponent } from './ingresar-libro.component';

describe('IngresarLibroComponent', () => {
  let component: IngresarLibroComponent;
  let fixture: ComponentFixture<IngresarLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarLibroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
