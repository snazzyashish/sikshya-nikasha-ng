import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminitrativeExpensesComponent } from './adminitrative-expenses.component';

describe('AdminitrativeExpensesComponent', () => {
  let component: AdminitrativeExpensesComponent;
  let fixture: ComponentFixture<AdminitrativeExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminitrativeExpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminitrativeExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
