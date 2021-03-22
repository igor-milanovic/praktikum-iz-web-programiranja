import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestiraneRuteraComponent } from './testirane-rutera.component';

describe('TestiraneRuteraComponent', () => {
  let component: TestiraneRuteraComponent;
  let fixture: ComponentFixture<TestiraneRuteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestiraneRuteraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestiraneRuteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
