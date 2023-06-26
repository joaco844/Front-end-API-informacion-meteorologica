import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPromedioPaisComponent } from './GetPromedioPais.component';

describe('GetPromedioPaisComponent', () => {
  let component: GetPromedioPaisComponent;
  let fixture: ComponentFixture<GetPromedioPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPromedioPaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPromedioPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
