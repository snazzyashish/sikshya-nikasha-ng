import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagformItemComponent } from './magform-item.component';

describe('MagformItemComponent', () => {
  let component: MagformItemComponent;
  let fixture: ComponentFixture<MagformItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagformItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagformItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
