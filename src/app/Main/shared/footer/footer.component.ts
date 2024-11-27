import { Component } from '@angular/core';
import { objImg } from '../../../Core/Objs';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

export class FooterComponent {

  url:string = "icons/footer-section/";
  formUrl:string = "https://forms.gle/tQNz9kLjKPqpne529";

  Icons:Array<objImg> = [
    { url: this.url+'instagram.webp', name: 'instagram' },
  ]

}
