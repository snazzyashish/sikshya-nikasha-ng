import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStationaryKhajaScaleComponent } from './create-stationary-khaja-scale.component';

describe('CreateStationaryKhajaScaleComponent', () => {
  let component: CreateStationaryKhajaScaleComponent;
  let fixture: ComponentFixture<CreateStationaryKhajaScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStationaryKhajaScaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStationaryKhajaScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
