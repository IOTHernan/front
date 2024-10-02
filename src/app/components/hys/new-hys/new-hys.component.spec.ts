import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHysComponent } from './new-hys.component';

describe('NewHysComponent', () => {
  let component: NewHysComponent;
  let fixture: ComponentFixture<NewHysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewHysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewHysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
