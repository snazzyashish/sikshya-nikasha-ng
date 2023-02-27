import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdministrativeSettingsComponent } from './view-administrative-settings.component';

describe('ViewAdministrativeSettingsComponent', () => {
  let component: ViewAdministrativeSettingsComponent;
  let fixture: ComponentFixture<ViewAdministrativeSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAdministrativeSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAdministrativeSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
