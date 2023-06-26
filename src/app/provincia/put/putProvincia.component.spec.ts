import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutProvinciaComponent } from './putProvincia.component';

describe('PutProvinciaComponent', () => {
  let component: PutProvinciaComponent;
  let fixture: ComponentFixture<PutProvinciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutProvinciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
