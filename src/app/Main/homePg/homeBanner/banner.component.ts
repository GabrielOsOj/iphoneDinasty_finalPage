import { ApplicationRef, ChangeDetectorRef, Component, inject } from '@angular/core';
import { first, interval } from 'rxjs';
import { objImg } from '../../../Core/Objs';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  private _changeDetector = inject(ChangeDetectorRef);
  private _applicationRef = inject(ApplicationRef);

  // imgs: photoObj = {
  //   url: '/static_imgs/banners/banner_dark.png',
  //   title: 'Banner Dark',
  //   alt: 'Dark banner'
  // };

  imgs: objImg = {
    url: '/static_imgs/banners/banner_light.png',
    name: 'Banner White',
    alt: 'Lighting banner'
  }

  phones: Array<objImg> = [
  {
    url: '/bannersAllPictures/ip14_midnight_special.webp',
    name: 'iphone16',
    alt: 'iphone14'
  }, {
    url: '/bannersAllPictures/all_colors_ip12.webp',
    name: 'iphone15',
    alt: 'ipone12'
  },{
    url: '/bannersAllPictures/ip14_pro_gold_backSide.webp',
    name: 'iphone16',
    alt: 'ipone16ProMax'
  }
]
  
  index: number = 0;
  counter: number = 0;

  constructor(private route:Router) {
    this._applicationRef.isStable.pipe(first((isStable) => isStable))
      .subscribe(() => {

        interval(1000).subscribe(() => {this.timerAdmin()})

      });
  }

  timerAdmin() {

    if (this.counter == 10) {
      this.nextImg();
      this.counter = 0;
    }
    this.counter++;
  }

  nextImg() {
    this.index = (this.index + 1) % this.phones.length;
    this._changeDetector.detectChanges();
  }
  restartClock() {
    this.counter = 0;
  }

  goToIp16(){
    console.log("algo")
    this.route.navigate(['/','product','']);
  }

}