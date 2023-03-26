import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeExpensesDetailViewComponent } from './administrative-expenses-detail-view.component';

describe('AdministrativeExpensesDetailViewComponent', () => {
  let component: AdministrativeExpensesDetailViewComponent;
  let fixture: ComponentFixture<AdministrativeExpensesDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrativeExpensesDetailViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrativeExpensesDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
