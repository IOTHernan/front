import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiDialogComponentComponent } from './mi-dialog-component';

describe('MiDialogComponentComponent', () => {
  let component: MiDialogComponentComponent;
  let fixture: ComponentFixture<MiDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiDialogComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
