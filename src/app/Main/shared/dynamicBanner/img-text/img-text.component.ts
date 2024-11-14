import { Component, input } from '@angular/core';
import { bannerData, bannerPhone } from '../../../../Core/banners-data';
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

  bannerDataToLoad = input.required<bannerData>();
  bannerHasVideo = input(false);

  constructor() {}

  toRight = input(false);

  onVideoEnd(event: Event): void {
    const videoElement = event.target as HTMLVideoElement;
    videoElement.pause(); // Pausar el video al final
  }

  
}
