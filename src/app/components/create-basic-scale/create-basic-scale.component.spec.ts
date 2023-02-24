import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBasicScaleComponent } from './create-basic-scale.component';

describe('CreateBasicScaleComponent', () => {
  let component: CreateBasicScaleComponent;
  let fixture: ComponentFixture<CreateBasicScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBasicScaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBasicScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
