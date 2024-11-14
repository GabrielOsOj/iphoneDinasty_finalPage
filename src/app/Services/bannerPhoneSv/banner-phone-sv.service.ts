import { Injectable } from '@angular/core';
import { bannerPhone } from '../../Core/banners-data';
import banneInfoPhone from '../../Data/banners-json/bannerStatic.json'

@Injectable({
  providedIn: 'root'
})
export class BannerPhoneSvService {

  constructor() { }

  fnGetPhoneBannerInfo(): bannerPhone{
    return banneInfoPhone [0];

  }
}
