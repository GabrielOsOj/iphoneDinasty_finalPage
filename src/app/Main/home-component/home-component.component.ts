import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { SpacerComponent } from '../../shared/spacer/spacer.component';
import { BannerComponent } from './homeBanner/banner.component';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SpacerComponent, BannerComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

}
