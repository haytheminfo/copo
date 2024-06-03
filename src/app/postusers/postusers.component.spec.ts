import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostusersComponent } from './postusers.component';

describe('PostusersComponent', () => {
  let component: PostusersComponent;
  let fixture: ComponentFixture<PostusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostusersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
