import { TestBed } from '@angular/core/testing';

import { BannerViSvService } from './banner-vi-sv.service';

describe('BannerViSvService', () => {
  let service: BannerViSvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannerViSvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
