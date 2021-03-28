import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCompleteComponent } from './modal-complete.component';

describe('ModalCompleteComponent', () => {
  let component: ModalCompleteComponent;
  let fixture: ComponentFixture<ModalCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
