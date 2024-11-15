import { AfterViewInit, Component, input } from '@angular/core';
import { VideoBanner } from '../../../../Core/videoBanner';
import { StaticDataSvService } from '../../../../Services/static-data-sv.service';
import { CommonModule } from '@angular/common';
import { objVideo } from '../../../../Core/Objs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-full',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-full.component.html',
  styleUrl: './video-full.component.css'
})
export class VideoFullComponent implements AfterViewInit {

  bannerVi=input.required<objVideo>();

  constructor(private route: ActivatedRoute) {}
  ngAfterViewInit(): void {
    let a = document.getElementById('video') as HTMLVideoElement
    if(a){a.play()}
    
  }

  onVideoEnd(event: Event): void {
    const videoElement = event.target as HTMLVideoElement;
    videoElement.pause(); // Pausar el video al final
  }

}
