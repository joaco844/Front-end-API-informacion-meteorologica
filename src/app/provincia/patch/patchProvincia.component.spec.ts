import { ComponentFixture, TestBed } from '@angular/core/testing';

import { patchProvinciaComponent } from './patchProvincia.component';

describe('PatchComponent', () => {
  let component: patchProvinciaComponent;
  let fixture: ComponentFixture<patchProvinciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ patchProvinciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(patchProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
