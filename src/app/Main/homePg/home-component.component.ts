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

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SpacerComponent, BannerComponent, ImgTextComponent, VideoFullComponent, FamilyCarrouselComponent, InfoComponent, FaqComponent, WssComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

}
