import { Injectable } from '@angular/core';
import { objVideo } from '../../Core/Objs';
import bannerVideo from '../../Data/banners-json/bannerVi2.json'

@Injectable({
  providedIn: 'root'
})
export class BannerViSvService {

  constructor() { }

  fnGetBannerViData(): Array<objVideo>{
    return bannerVideo;
  }
}
