import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchCiudadComponent } from './patchCiudad.component';

describe('PatchCiudadComponent', () => {
  let component: PatchCiudadComponent;
  let fixture: ComponentFixture<PatchCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatchCiudadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatchCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
