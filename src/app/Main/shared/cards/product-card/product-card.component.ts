import { Component, ElementRef, input, output } from '@angular/core';
import { IphoneProductColorImgs } from '../../../../Core/iphone-product';
import { RouterLink } from '@angular/router';
import { HammerGestureConfig, HammerModule } from '@angular/platform-browser';
import 'hammerjs'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink,HammerModule, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  phoneDetails= input.required<IphoneProductColorImgs>();
  imgColorNum = input.required<number>();
  imgSelected:string = "";

  constructor(private elem: ElementRef){}

  elementWidth = output<number>();
  
  ngOnInit(): void {
    this.elementWidth.emit(this.elem.nativeElement.offsetWidth);

  }

  colorParser():Array<string>{
    return this.phoneDetails().imagenes.map((imgObj)=>{
      return imgObj.imgColor
    })
  }


}
