import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBasicScaleComponent } from './view-basic-scale.component';

describe('ViewBasicScaleComponent', () => {
  let component: ViewBasicScaleComponent;
  let fixture: ComponentFixture<ViewBasicScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBasicScaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBasicScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
