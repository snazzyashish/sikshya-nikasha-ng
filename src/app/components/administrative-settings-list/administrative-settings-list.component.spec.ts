import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeSettingsListComponent } from './administrative-settings-list.component';

describe('AdministrativeSettingsListComponent', () => {
  let component: AdministrativeSettingsListComponent;
  let fixture: ComponentFixture<AdministrativeSettingsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrativeSettingsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrativeSettingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
