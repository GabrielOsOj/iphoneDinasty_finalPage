import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { objImg } from '../../../Core/iphone-product';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  Icon: objImg = { url: 'icons/fake-logo.png', name: 'Dinastia Iphone' };

  isMenuOpen: boolean = false;
  isNotOnTopOfPage:boolean = false;

  @HostListener('window:scroll',["$event"])
  fnScrolled(){
    this.isNotOnTopOfPage=(window.pageYOffset>30);
  }

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
