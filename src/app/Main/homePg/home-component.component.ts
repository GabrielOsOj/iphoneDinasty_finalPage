import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SpacerComponent } from '../shared/spacer/spacer.component';
import { BannerComponent } from './homeBanner/banner.component';
import { ImgTextComponent } from '../shared/dynamicBanner/img-text/img-text.component';
import { VideoFullComponent } from '../shared/dynamicBanner/video-full/video-full.component';
import { FamilyCarrouselComponent } from './productsSection/family-carrousel/family-carrousel.component';
import { InfoComponent } from './infoSection/info/info.component';
import { FaqComponent } from "./faqSection/faq/faq.component";
import { WssComponent } from "../shared/wssButton/wss/wss.component";
import { BannerDataSvService } from '../../Services/bannerDataSv/banner-data-sv.service';
import { bannerData } from '../../Core/banners-data';
import { objVideo } from '../../Core/Objs';
import { BannerViSvService } from '../../Services/bannerVideoSv/banner-vi-sv.service';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,SpacerComponent,BannerComponent,
    ImgTextComponent,FamilyCarrouselComponent,InfoComponent,FaqComponent,WssComponent,VideoFullComponent
  ],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})

/*
[VideoFullComponent]
*/
export class HomeComponentComponent {

  bannersDataL:Array<bannerData>=[];

  videoT:objVideo=<objVideo>{
    
  }


  constructor(private bannerData :BannerDataSvService, private videoBanner: BannerViSvService){
    //in this main, exists two banners
    this.bannersDataL[0]= bannerData.fnGetPhoneData(0);
    this.bannersDataL[1]= bannerData.fnGetPhoneData(2);
    this.videoT = this.videoBanner.fnGetBannerViData()[0];
  }


  goTo(name:string){
    let a = document.getElementById(name);
    a?.scrollIntoView();
  }

}
