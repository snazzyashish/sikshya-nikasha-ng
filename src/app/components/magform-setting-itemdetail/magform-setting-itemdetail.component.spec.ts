import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagformSettingItemdetailComponent } from './magform-setting-itemdetail.component';

describe('MagformSettingItemdetailComponent', () => {
  let component: MagformSettingItemdetailComponent;
  let fixture: ComponentFixture<MagformSettingItemdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagformSettingItemdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagformSettingItemdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
