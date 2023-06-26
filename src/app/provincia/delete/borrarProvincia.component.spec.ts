import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarProvinciaComponent } from './borrarProvincia.component';

describe('BorrarProvinciaComponent', () => {
  let component: BorrarProvinciaComponent;
  let fixture: ComponentFixture<BorrarProvinciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarProvinciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrarProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
