import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCiudadComponent } from './getCiudad.component';

describe('GetCiudadComponent', () => {
  let component: GetCiudadComponent;
  let fixture: ComponentFixture<GetCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCiudadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
