import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTiempoComponent } from './deleteTiempo.component';

describe('DeleteCiudadComponent', () => {
  let component: DeleteTiempoComponent; 
  let fixture: ComponentFixture<DeleteTiempoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTiempoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
