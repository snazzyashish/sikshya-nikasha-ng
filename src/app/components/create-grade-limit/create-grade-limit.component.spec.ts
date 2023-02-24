import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGradeLimitComponent } from './create-grade-limit.component';

describe('CreateGradeLimitComponent', () => {
  let component: CreateGradeLimitComponent;
  let fixture: ComponentFixture<CreateGradeLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGradeLimitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGradeLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
