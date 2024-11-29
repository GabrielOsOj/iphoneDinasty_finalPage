import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { objImg } from '../../../../Core/Objs';

@Component({
  selector: 'app-wss',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wss.component.html',
  styleUrl: './wss.component.css'
})
export class WssComponent {
  
  Icons:objImg = { url:'/webIcons/many-icons/logo_instagram.png', name: 'instagram'}
  igUrl:string = 'https://www.instagram.com/dinastia.iphone?igsh=OTAwc3hucDgycmtt';
  isStuck=false;
  almendra:number = 0;
  
}
