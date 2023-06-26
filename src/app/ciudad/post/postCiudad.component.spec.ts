import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCiudadComponent } from './postCiudad.component';

describe('PostCiudadComponent', () => {
  let component: PostCiudadComponent;
  let fixture: ComponentFixture<PostCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCiudadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
