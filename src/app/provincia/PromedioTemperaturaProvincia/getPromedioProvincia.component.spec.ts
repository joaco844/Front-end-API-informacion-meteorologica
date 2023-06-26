import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPromedioProvinciaComponent } from './getPromedioProvincia.component';

describe('GetPromedioProvinciaComponent', () => {
  let component: GetPromedioProvinciaComponent;
  let fixture: ComponentFixture<GetPromedioProvinciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPromedioProvinciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPromedioProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
