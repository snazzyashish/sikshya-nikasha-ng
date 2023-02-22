import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsfrastructureListComponent } from './insfrastructure-list.component';

describe('InsfrastructureListComponent', () => {
  let component: InsfrastructureListComponent;
  let fixture: ComponentFixture<InsfrastructureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsfrastructureListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsfrastructureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
