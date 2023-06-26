import { ComponentFixture, TestBed } from '@angular/core/testing';

import { patchTiempoComponent } from './patchTiempo.component';

describe('PatchTiempoComponent', () => {
  let component: patchTiempoComponent;
  let fixture: ComponentFixture<patchTiempoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ patchTiempoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(patchTiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
