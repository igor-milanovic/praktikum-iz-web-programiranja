import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupiModalComponent } from './kupi-modal.component';

describe('KupiModalComponent', () => {
  let component: KupiModalComponent;
  let fixture: ComponentFixture<KupiModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupiModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KupiModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
