import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBhattaComponent } from './employee-bhatta.component';

describe('EmployeeBhattaComponent', () => {
  let component: EmployeeBhattaComponent;
  let fixture: ComponentFixture<EmployeeBhattaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeBhattaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeBhattaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
