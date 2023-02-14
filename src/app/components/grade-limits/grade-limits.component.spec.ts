import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeLimitsComponent } from './grade-limits.component';

describe('GradeLimitsComponent', () => {
  let component: GradeLimitsComponent;
  let fixture: ComponentFixture<GradeLimitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeLimitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeLimitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
