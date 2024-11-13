import { Component } from '@angular/core';
import { objImg } from '../../Core/iphone-product';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

export class FooterComponent {

  Icons:Array<objImg> = [
    { url: 'icons/twitter.png', name: 'twitter' },
    { url: 'icons/social.png', name: 'social' },
    { url: 'icons/instagram.png', name: 'instagram' },
    { url: 'icons/tik-tok.png', name: 'tik-tok' }
  ]
  

}
