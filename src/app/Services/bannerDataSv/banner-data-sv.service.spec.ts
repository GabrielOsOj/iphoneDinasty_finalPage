import { TestBed } from '@angular/core/testing';

import { BannerDataSvService } from './banner-data-sv.service';

describe('BannerDataSvService', () => {
  let service: BannerDataSvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannerDataSvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
