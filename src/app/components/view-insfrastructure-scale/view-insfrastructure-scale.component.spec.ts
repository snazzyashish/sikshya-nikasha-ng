import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInsfrastructureScaleComponent } from './view-insfrastructure-scale.component';

describe('ViewInsfrastructureScaleComponent', () => {
  let component: ViewInsfrastructureScaleComponent;
  let fixture: ComponentFixture<ViewInsfrastructureScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInsfrastructureScaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewInsfrastructureScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
