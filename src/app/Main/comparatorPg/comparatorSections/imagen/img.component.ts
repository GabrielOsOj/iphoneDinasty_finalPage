import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparador-img',
  standalone: true,
  imports: [],
  templateUrl: './img.component.html',
  styleUrl: './img.component.css'
})
export class ImgComponent implements OnInit{


  colorsPhoneImagen = input<string>();
  
  ngOnInit(): void {
   
  }

}
