import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewShowComponent } from './review-show.component';

describe('ReviewShowComponent', () => {
  let component: ReviewShowComponent;
  let fixture: ComponentFixture<ReviewShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
