import { TestBed } from '@angular/core/testing';

import { BannerPhoneSvService } from './banner-phone-sv.service';



describe('BannerPhoneSvService', () => {
  let service: BannerPhoneSvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannerPhoneSvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
