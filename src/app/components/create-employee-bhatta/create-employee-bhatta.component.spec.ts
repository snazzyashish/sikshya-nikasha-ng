import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeBhattaComponent } from './create-employee-bhatta.component';

describe('CreateEmployeeBhattaComponent', () => {
  let component: CreateEmployeeBhattaComponent;
  let fixture: ComponentFixture<CreateEmployeeBhattaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployeeBhattaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEmployeeBhattaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
