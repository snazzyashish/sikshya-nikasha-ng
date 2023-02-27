import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationaryKhajaScaleListComponent } from './stationary-khaja-scale-list.component';

describe('StationaryKhajaScaleListComponent', () => {
  let component: StationaryKhajaScaleListComponent;
  let fixture: ComponentFixture<StationaryKhajaScaleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationaryKhajaScaleListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationaryKhajaScaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
