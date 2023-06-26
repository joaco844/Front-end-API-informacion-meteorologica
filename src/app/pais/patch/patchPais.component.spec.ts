import { ComponentFixture, TestBed } from '@angular/core/testing';

import { patchPaisComponent } from './patchPais.component';

describe('patchPaisComponent', () => {
  let component: patchPaisComponent;
  let fixture: ComponentFixture<patchPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ patchPaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(patchPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
