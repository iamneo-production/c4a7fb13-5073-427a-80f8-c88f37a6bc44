import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddOnComponent } from './customer-add-on.component';

describe('CustomerAddOnComponent', () => {
  let component: CustomerAddOnComponent;
  let fixture: ComponentFixture<CustomerAddOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAddOnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAddOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
