import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProvinciaComponent } from './postProvincia.component';

describe('PostProvinciaComponent', () => {
  let component: PostProvinciaComponent;
  let fixture: ComponentFixture<PostProvinciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostProvinciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
