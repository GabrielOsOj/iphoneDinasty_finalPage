import { TestBed } from '@angular/core/testing';

import { FaqSService } from './faq-s.service'; 

describe('FaqSService', () => {
  let service: FaqSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaqSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
