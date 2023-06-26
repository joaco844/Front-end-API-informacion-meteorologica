import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCiudadComponent } from './deleteCiudad.component';

describe('DeleteCiudadComponent', () => {
  let component: DeleteCiudadComponent;
  let fixture: ComponentFixture<DeleteCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCiudadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
