import { ComponentFixture, TestBed } from '@angular/core/testing';

import { getTemperaturaPromedioComponent } from './getTemperaturaPromedio.component';

describe('getTemperaturaPromedioComponent', () => {
  let component: getTemperaturaPromedioComponent;
  let fixture: ComponentFixture<getTemperaturaPromedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ getTemperaturaPromedioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(getTemperaturaPromedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
