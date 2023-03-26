import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeExpensesDetailComponent } from './administrative-expenses-detail.component';

describe('AdministrativeExpensesDetailComponent', () => {
  let component: AdministrativeExpensesDetailComponent;
  let fixture: ComponentFixture<AdministrativeExpensesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrativeExpensesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrativeExpensesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
