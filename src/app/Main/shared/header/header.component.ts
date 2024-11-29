import { CommonModule } from '@angular/common';
import { Component, HostListener, input, output } from '@angular/core';
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

  Icon: objImg = { url: '/webIcons/many-icons/logo_dinasty.webp', name: '' };
  goToEmitter = output<string>();

  isMenuOpen: boolean = false;
  isNotOnTopOfPage:boolean = false;
  isPageOnMain = input<boolean>(false);


  @HostListener('window:scroll',["$event"])
  fnScrolled(){
    this.isNotOnTopOfPage=(window.pageYOffset>30);
  }

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  goToEmit(to:string){
    this.goToEmitter.emit(to);
  }

}
