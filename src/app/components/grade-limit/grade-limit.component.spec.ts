import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeLimitComponent } from './grade-limit.component';

describe('GradeLimitComponent', () => {
  let component: GradeLimitComponent;
  let fixture: ComponentFixture<GradeLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeLimitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
