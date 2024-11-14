import { Component, ElementRef, input, output } from '@angular/core';
import { IphoneProductColorImgs } from '../../../../Core/iphone-product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  phoneDetails= input.required<IphoneProductColorImgs>();
  
  constructor(private elem: ElementRef){}

  elementWidth = output<number>();
  randomNum:number = 0;
  
  ngOnInit(): void {
    this.elementWidth.emit(this.elem.nativeElement.offsetWidth);
    this.randomNum = Math.floor(Math.random() * (this.phoneDetails().imagenes.length - 1));
  }
  
}
