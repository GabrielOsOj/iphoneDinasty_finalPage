import { Injectable } from '@angular/core';

import bannerRDMdata from '../../Data/banners-json/bannerRandomData.json'
import { bannerData } from '../../Core/banners-data';

@Injectable({
  providedIn: 'root'
})
export class BannerDataSvService {

  constructor() {}

  fnGetRandomData():bannerData{
    return bannerRDMdata[this.getRandomData(bannerRDMdata.length)];
  }

  fnGetManyRandomData(quantity: number): Array<bannerData>{
    let arr = [quantity];
    for(let i=0; i<quantity; i++){
      
    }
    return bannerRDMdata;
  }

  getRandomData(max: number){
    return Math.floor(Math.random() * max);
  }

}
