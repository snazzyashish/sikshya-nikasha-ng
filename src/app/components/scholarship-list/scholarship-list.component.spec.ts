import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipListComponent } from './scholarship-list.component';

describe('ScholarshipListComponent', () => {
  let component: ScholarshipListComponent;
  let fixture: ComponentFixture<ScholarshipListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScholarshipListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScholarshipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
