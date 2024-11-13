import { Component } from '@angular/core';
import { objImg } from '../../../../Core/iphone-product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wss',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wss.component.html',
  styleUrl: './wss.component.css'
})
export class WssComponent {
  
  Icons:objImg= { url: 'icons/whatsapp.png', name: 'twitter'}
  isStuck=false;
  almendra:number = 0;
  
}
