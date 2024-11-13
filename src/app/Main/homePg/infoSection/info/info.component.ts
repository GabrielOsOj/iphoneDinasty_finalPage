import { Component } from '@angular/core';
import { objImg } from '../../../../Core/iphone-product';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

  Icons:Array<objImg> = [
    { url: 'icons/bank.png', name: 'bank' },
    { url: 'icons/box.png', name: 'box' },
    { url: 'icons/shield.png', name: 'shield' },
    { url: 'icons/customer-support.png', name: 'customer-support' }
  ];;

}
