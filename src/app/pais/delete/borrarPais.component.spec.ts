import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarPaisComponent } from './borrarPais.component';

describe('DeleteComponent', () => {
  let component: BorrarPaisComponent;
  let fixture: ComponentFixture<BorrarPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarPaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrarPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
