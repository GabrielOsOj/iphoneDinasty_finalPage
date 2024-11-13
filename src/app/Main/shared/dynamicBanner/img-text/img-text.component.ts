import { Component, input } from '@angular/core';
import { bannerPhone } from '../../../../Core/banners-data';
import { VideoBanner } from '../../../../Core/videoBanner';
import { CommonModule } from '@angular/common';
import { StaticDataSvService } from '../../../../Services/static-data-sv.service';

@Component({
  selector: 'app-img-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img-text.component.html',
  styleUrl: './img-text.component.css'
})
export class ImgTextComponent {
 
  bannerDataIphone: bannerPhone[] = [];
  
  bannerVi!:  Array<VideoBanner>;

  constructor(private staticDataService: StaticDataSvService) {}
  // constructor() {}

  ngOnInit(): void {
    
    this.bannerDataIphone = this.staticDataService.getBannerStatic();

    this.bannerVi = this.staticDataService.getBannerVideo();
  }
  
  // toRight: boolean = false;
  
  toRight = input(false);


  onVideoEnd(event: Event): void {
    const videoElement = event.target as HTMLVideoElement;
    videoElement.pause(); // Pausar el video al final
  }
  
}
