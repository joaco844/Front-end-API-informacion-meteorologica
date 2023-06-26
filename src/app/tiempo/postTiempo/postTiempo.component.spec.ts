import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTiempoComponent } from './postTiempo.component';

describe('PostTiempoComponent', () => {
  let component: PostTiempoComponent;
  let fixture: ComponentFixture<PostTiempoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostTiempoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostTiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
