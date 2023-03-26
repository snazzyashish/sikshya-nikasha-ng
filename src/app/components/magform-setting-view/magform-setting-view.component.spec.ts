import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagformSettingViewComponent } from './magform-setting-view.component';

describe('MagformSettingViewComponent', () => {
  let component: MagformSettingViewComponent;
  let fixture: ComponentFixture<MagformSettingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagformSettingViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagformSettingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
