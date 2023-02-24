import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeScaleViewComponent } from './grade-scale-view.component';

describe('GradeScaleViewComponent', () => {
  let component: GradeScaleViewComponent;
  let fixture: ComponentFixture<GradeScaleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeScaleViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeScaleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
