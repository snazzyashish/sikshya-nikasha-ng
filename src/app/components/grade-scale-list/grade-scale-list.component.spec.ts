import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeScaleListComponent } from './grade-scale-list.component';

describe('GradeScaleListComponent', () => {
  let component: GradeScaleListComponent;
  let fixture: ComponentFixture<GradeScaleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeScaleListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeScaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
