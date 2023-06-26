import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPromedioComponent } from './getPromedio.component';

describe('getPromedioComponent', () => {
  let component: GetPromedioComponent;
  let fixture: ComponentFixture<GetPromedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPromedioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPromedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
