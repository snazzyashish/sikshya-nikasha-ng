import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateScholarshipAmountComponent } from './create-scholarship-amount.component';

describe('CreateScholarshipAmountComponent', () => {
  let component: CreateScholarshipAmountComponent;
  let fixture: ComponentFixture<CreateScholarshipAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateScholarshipAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateScholarshipAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
