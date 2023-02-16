import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailUpdateComponent } from './employee-detail-update.component';

describe('EmployeeDetailUpdateComponent', () => {
  let component: EmployeeDetailUpdateComponent;
  let fixture: ComponentFixture<EmployeeDetailUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDetailUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDetailUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
