import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagformSettingComponent } from './magform-setting.component';

describe('MagformSettingComponent', () => {
  let component: MagformSettingComponent;
  let fixture: ComponentFixture<MagformSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagformSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagformSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
