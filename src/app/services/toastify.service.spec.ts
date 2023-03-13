import { TestBed } from '@angular/core/testing';

import { AlertService } from './alert.service';

describe('ToastifyService', () => {
  let service:AlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
