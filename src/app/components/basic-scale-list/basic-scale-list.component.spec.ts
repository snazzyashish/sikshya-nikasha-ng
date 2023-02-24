import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicScaleListComponent } from './basic-scale-list.component';

describe('BasicScaleListComponent', () => {
  let component: BasicScaleListComponent;
  let fixture: ComponentFixture<BasicScaleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicScaleListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicScaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
