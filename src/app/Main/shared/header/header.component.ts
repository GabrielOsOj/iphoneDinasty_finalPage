import { CommonModule } from '@angular/common';
import { Component, HostListener, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { objImg } from '../../../Core/Objs';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  Icon: objImg = { url: '/icons/many-icons/logo_dinasty.webp', name: '' };
  goToEmitter = output<string>();

  isMenuOpen: boolean = false;
  isNotOnTopOfPage:boolean = false;

  @HostListener('window:scroll',["$event"])
  fnScrolled(){
    this.isNotOnTopOfPage=(window.pageYOffset>30);
  }

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  goToEmit(to:string){
    this.isMenuOpen=!this.isMenuOpen;
    this.goToEmitter.emit(to);
  }

}
