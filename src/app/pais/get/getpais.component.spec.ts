import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetpaisComponent } from './getpais.component';

describe('GetrecetaComponent', () => {
  let component: GetpaisComponent;
  let fixture: ComponentFixture<GetpaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetpaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetpaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
