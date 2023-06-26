import { ComponentFixture, TestBed } from '@angular/core/testing';

import { getUnPais } from './get.component';

describe('GetrecetaComponent', () => {
  let component: getUnPais;
  let fixture: ComponentFixture<getUnPais>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ getUnPais ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(getUnPais);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
