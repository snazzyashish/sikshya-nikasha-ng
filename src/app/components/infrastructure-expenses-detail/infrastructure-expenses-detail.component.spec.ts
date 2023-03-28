import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructureExpensesDetailComponent } from './infrastructure-expenses-detail.component';

describe('InfrastructureExpensesDetailComponent', () => {
  let component: InfrastructureExpensesDetailComponent;
  let fixture: ComponentFixture<InfrastructureExpensesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfrastructureExpensesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfrastructureExpensesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
