import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeScaleCreateComponent } from './grade-scale-create.component';

describe('GradeScaleCreateComponent', () => {
  let component: GradeScaleCreateComponent;
  let fixture: ComponentFixture<GradeScaleCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeScaleCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeScaleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
