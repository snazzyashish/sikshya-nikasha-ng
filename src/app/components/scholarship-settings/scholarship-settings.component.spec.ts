import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipSettingsComponent } from './scholarship-settings.component';

describe('ScholarshipSettingsComponent', () => {
  let component: ScholarshipSettingsComponent;
  let fixture: ComponentFixture<ScholarshipSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScholarshipSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScholarshipSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
