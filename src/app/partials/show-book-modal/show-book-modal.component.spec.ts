import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBookModalComponent } from './show-book-modal.component';

describe('ShowBookModalComponent', () => {
  let component: ShowBookModalComponent;
  let fixture: ComponentFixture<ShowBookModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBookModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBookModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
