import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdministrativeSettingsComponent } from './create-administrative-settings.component';

describe('CreateAdministrativeSettingsComponent', () => {
  let component: CreateAdministrativeSettingsComponent;
  let fixture: ComponentFixture<CreateAdministrativeSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAdministrativeSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAdministrativeSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
