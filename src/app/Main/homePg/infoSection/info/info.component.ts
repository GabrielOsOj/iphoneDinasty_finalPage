import { Component } from '@angular/core';
import { objImg } from '../../../../Core/Objs';


@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

  url:string="webIcons/info-section/"

  Icons: Array<objImg> = [
    { url: this.url+'bank.webp', name: 'bank' },
    { url: this.url+'box.webp', name: 'box' },
    { url: this.url+'shield.webp', name: 'shield' },
    { url: this.url+'customer-support.webp', name: 'customer-support' }
  ];

}
