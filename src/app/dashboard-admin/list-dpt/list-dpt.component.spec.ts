import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDptComponent } from './list-dpt.component';

describe('ListDptComponent', () => {
  let component: ListDptComponent;
  let fixture: ComponentFixture<ListDptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListDptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListDptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
