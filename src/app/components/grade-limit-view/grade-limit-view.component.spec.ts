import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeLimitViewComponent } from './grade-limit-view.component';

describe('GradeLimitViewComponent', () => {
  let component: GradeLimitViewComponent;
  let fixture: ComponentFixture<GradeLimitViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeLimitViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeLimitViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
