import { Component } from '@angular/core';
import { VideoBanner } from '../../../../Core/videoBanner';
import { StaticDataSvService } from '../../../../Services/static-data-sv.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-full',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-full.component.html',
  styleUrl: './video-full.component.css'
})
export class VideoFullComponent {

  bannerVi!:  Array<VideoBanner>;

  constructor(private staticDataSvService: StaticDataSvService) {}

  ngOnInit(): void {
    this.bannerVi = this.staticDataSvService.getBannerVideo();
  }


  onVideoEnd(event: Event): void {
    const videoElement = event.target as HTMLVideoElement;
    videoElement.pause(); // Pausar el video al final
  }
}
