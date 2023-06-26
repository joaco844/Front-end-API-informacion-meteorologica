import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutCiudadComponent } from './putCiudad.component';

describe('PutCiudadComponent', () => {
  let component: PutCiudadComponent;
  let fixture: ComponentFixture<PutCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutCiudadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
