import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutTiempoComponent } from './putTiempo.component';

describe('PutTiempoComponent', () => {
  let component: PutTiempoComponent;
  let fixture: ComponentFixture<PutTiempoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutTiempoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutTiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
