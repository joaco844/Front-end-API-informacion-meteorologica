import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutPaisComponent } from './putPais.component';

describe('PutComponent', () => {
  let component: PutPaisComponent;
  let fixture: ComponentFixture<PutPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutPaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
