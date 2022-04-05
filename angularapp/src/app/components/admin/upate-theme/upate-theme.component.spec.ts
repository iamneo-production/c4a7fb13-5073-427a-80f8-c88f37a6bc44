import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpateThemeComponent } from './upate-theme.component';

describe('UpateThemeComponent', () => {
  let component: UpateThemeComponent;
  let fixture: ComponentFixture<UpateThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpateThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpateThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
