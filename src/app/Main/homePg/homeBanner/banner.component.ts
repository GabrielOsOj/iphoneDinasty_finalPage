import { ApplicationRef, ChangeDetectorRef, Component, HostListener, inject, input } from '@angular/core';
import { first, interval } from 'rxjs';
import { objImg } from '../../../Core/Objs';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  private _changeDetector = inject(ChangeDetectorRef);
  private _applicationRef = inject(ApplicationRef);

  showSection: boolean = false;

  bannerDataToLoad = input;

  constructor(private route:Router) {
    
  }

  toRight = input(false);

  goToIp16(){
    console.log("algo")
    this.route.navigate(['/','product','']);
  }

  
// funcion de scroll banner2
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.showSection = scrollPosition > 380;
  }
}