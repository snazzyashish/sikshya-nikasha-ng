import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsfrastructureScaleListComponent } from './insfrastructure-scale-list.component';

describe('InsfrastructureScaleListComponent', () => {
  let component: InsfrastructureScaleListComponent;
  let fixture: ComponentFixture<InsfrastructureScaleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsfrastructureScaleListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsfrastructureScaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
