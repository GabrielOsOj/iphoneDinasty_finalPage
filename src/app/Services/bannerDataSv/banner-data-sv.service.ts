import { Injectable } from '@angular/core';

import bannerRDMdata from '../../Data/banners-json/bannerRandomData.json'
import bannerColoredImgs from '../../Data/banners-json/coloredBannerData.json'

import { bannerData } from '../../Core/banners-data';
import { objImg } from '../../Core/Objs';

@Injectable({
  providedIn: 'root'
})
export class BannerDataSvService {

  constructor() { }

  fnGetRandomData(): bannerData {
    return bannerRDMdata[this.getRandomData(bannerRDMdata.length)];
  }

  fnGetManyRandomData(quantity: number): Array<bannerData> {
    return bannerRDMdata.slice(0, quantity);
  }

  fnGetPhoneData(id:number):bannerData{
    return bannerRDMdata[id];
  }

  fnGetBannerColoredImgs():Array<objImg>{
  
    return bannerColoredImgs
  
  }

  // fnGetManyRandomData(quantity: number): Array<bannerData>{
  //   let arr:Array<bannerData>= [...bannerRDMdata];
  //   if(quantity>=bannerRDMdata.length){
  //     quantity = bannerRDMdata.length;
  //   }
  //   for (let i = arr.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [arr[i], arr[j]] = [arr[j], arr[i]];
  //   }
  //   return arr.slice(0, quantity);
  // }

  private getRandomData(max: number) {
    return Math.floor(Math.random() * max);
  }

  
}