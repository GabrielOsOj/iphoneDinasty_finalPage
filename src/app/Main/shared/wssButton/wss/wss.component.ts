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
  
  Icons:objImg= { url: 'icons/whatsapp.png', name: 'twitter'}
  isStuck=false;
  almendra:number = 0;
  
}
