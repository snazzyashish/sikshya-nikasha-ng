import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInsfrastructureScaleComponent } from './create-insfrastructure-scale.component';

describe('CreateInsfrastructureScaleComponent', () => {
  let component: CreateInsfrastructureScaleComponent;
  let fixture: ComponentFixture<CreateInsfrastructureScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInsfrastructureScaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateInsfrastructureScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
