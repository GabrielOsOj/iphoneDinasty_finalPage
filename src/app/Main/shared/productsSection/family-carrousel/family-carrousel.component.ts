import { Component, inject, OnInit } from '@angular/core';
import { IphoneProductColorImgs } from '../../../../Core/iphone-product';
import { StaticDataSvService } from '../../../../Services/static-data-sv.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../../shared/cards/product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { HammerGestureConfig, HammerModule } from '@angular/platform-browser';

@Component({
  selector: 'app-family-carrousel',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, FormsModule, HammerModule],
  templateUrl: './family-carrousel.component.html',
  styleUrl: './family-carrousel.component.css'
})
export class FamilyCarrouselComponent implements OnInit {

  titlesCarrouselPosition:number = 0;
  phonesCarrouselPosition:number = 0;

  phonesDetails:Array<IphoneProductColorImgs>=[]
  phonesFamily: Array<IphoneProductColorImgs>=[]

  objPhoneCardInfo={"width":400};
  
  /* click style*/
  varLastBtnPressed:number=0;
  arButtons:Array<boolean>=[false,false,false,false,false]; 

  /* family carrousel mobile */
  optSelectMobile:number;
  arrFamiliesMobile:Array<number>=[];


  constructor(private data:StaticDataSvService){

    this.phonesDetails=data.getPhoneAndImgColorsData();

    this.arrFamiliesMobile = this.utDeleteRepeat(this.phonesDetails.map(m=>m.family));
    this.optSelectMobile=this.arrFamiliesMobile[4];
  }

  ngOnInit() {
    this.fnfiltro(16,4);
  }

  fnGetElementWidth(width:number){
    this.objPhoneCardInfo.width=width;
  }

  fnfiltro(selectedFamily:number, btnNum:number){
    this.phonesFamily=this.phonesDetails.filter((phone)=>{
     return phone.family == selectedFamily;
    })
    this.arButtons.fill(false);
    this.arButtons[btnNum]=!this.arButtons[btnNum];
  }

  /* phones carrousel*/
  fnDespPhonCarroLeft(){
    this.phonesCarrouselPosition=this.phonesCarrouselPosition>=0?this.phonesCarrouselPosition:this.phonesCarrouselPosition+=this.objPhoneCardInfo.width; 
  }

  fnDespPhonCarroRight(){
    this.phonesCarrouselPosition=this.phonesCarrouselPosition<=
    (-(this.objPhoneCardInfo.width*(this.phonesFamily.length-1)))
    ?this.phonesCarrouselPosition:this.phonesCarrouselPosition-=this.objPhoneCardInfo.width
  }

  /* carrusel family mobile */
  fnOnChangue(a:number){
    this.fnfiltro(a,0);
  }

  utDeleteRepeat(arr:Array<any>){
    return [...new Set(arr)];
  }

  /*swipe control*/ 
  swipe(dir:string){
    console.log(dir);
  }
}
