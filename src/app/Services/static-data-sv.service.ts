import { Injectable } from '@angular/core';
import { bannerPhone } from '../Core/banners-data';
import { IphoneProduct, IphoneProductColorImgs } from '../Core/iphone-product';
import { VideoBanner } from '../Core/videoBanner';


import phoneProductImg from '../Data/iphoneProductImg.json'
import phoneProductImgsColors from '../Data/iphoneProductsImgColors.json'
import bannerStatic from '../Data/banners-json/bannerStatic.json';
import bannerVideo from '../Data/banners-json/bannerVideo.json';


@Injectable({
  providedIn: 'root'
})
export class StaticDataSvService {

  constructor() { }

  //usado por tecnical-sheet component
  getPhoneData(): Array<IphoneProduct> {
    return phoneProductImg;
  }

  // getPhoneAndImgData(): Array<IphoneProduct> {
  //   return phoneProductImg;
  // }

  // getPhoneAndImgColorsData(): Array<IphoneProductColorImgs> {
  //   return phoneProductImgsColors;
  // }

  getPhoneAndImgColorsData():Array<IphoneProductColorImgs>{
    return phoneProductImgsColors;
  }

  getBannerStatic(): bannerPhone[]{
    return bannerStatic;
  }
  
  getBannerVideo(): Array<VideoBanner> {
    return bannerVideo;
  }

}
