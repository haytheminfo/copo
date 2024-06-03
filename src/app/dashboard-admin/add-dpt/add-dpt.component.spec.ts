import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDptComponent } from './add-dpt.component';

describe('AddDptComponent', () => {
  let component: AddDptComponent;
  let fixture: ComponentFixture<AddDptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
