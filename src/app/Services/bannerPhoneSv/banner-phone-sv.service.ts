import { Injectable } from '@angular/core';
import { bannerData, bannerPhone } from '../../Core/banners-data';
import banneInfoPhone from '../../Data/banners-json/bannerStatic.json'

@Injectable({
  providedIn: 'root'
})
export class BannerPhoneSvService {

  constructor() { }

  fnGetPhoneBannerInfo(model : string): bannerPhone{
    return banneInfoPhone.filter(phone=>phone.model=model)[0];
  }
  
}
