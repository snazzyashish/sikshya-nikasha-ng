import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStationaryKhajaScaleComponent } from './view-stationary-khaja-scale.component';

describe('ViewStationaryKhajaScaleComponent', () => {
  let component: ViewStationaryKhajaScaleComponent;
  let fixture: ComponentFixture<ViewStationaryKhajaScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStationaryKhajaScaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewStationaryKhajaScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
