import { Component, OnInit } from '@angular/core';
import { IphoneProductColorImgs } from '../../../../Core/iphone-product';
import { StaticDataSvService } from '../../../../Services/static-data-sv.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../../shared/cards/product-card/product-card.component';

@Component({
  selector: 'app-family-carrousel',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './family-carrousel.component.html',
  styleUrl: './family-carrousel.component.css'
})
export class FamilyCarrouselComponent implements OnInit {

  titlesCarrouselPosition:number = 0;
  phonesCarrouselPosition:number = 0;

  isMobileView:boolean = false;

  phonesDetails:Array<IphoneProductColorImgs>=[]
  phonesFamily: Array<IphoneProductColorImgs>=[]

  objPhoneCardInfo={"width":400};
  
  /* bar menu */
  hover:boolean = false;

  /* click style*/
  varLastBtnPressed:number=0;
  arButtons:Array<boolean>=[false,false,false,false,false]; 
  
  constructor(private data:StaticDataSvService){
    // this.phonesDetails=;
    this.phonesDetails=data.getPhoneAndImgColorsData();
    console.log(this.phonesDetails)
  
  }
  //retocar el tema de los botones de la familia y el filtro

  ngOnInit() {

    this.fnfiltro(12,0);

  }

  // fnReadScreenInfo(){
  //   if(window.innerWidth>600){
  //     this.objPhoneCardInfo.width=400;
  //   }else if(window.innerWidth<=600){
  //     this.objPhoneCardInfo.width=window.innerWidth;
  //   }
  // }

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

  /* titles carrousel*/
  fnDesplAder(){
    this.titlesCarrouselPosition = this.titlesCarrouselPosition>=100? this.titlesCarrouselPosition:this.titlesCarrouselPosition+=100; 
  }

  fnDesplAizq(){
    this.titlesCarrouselPosition=this.titlesCarrouselPosition<=(window.innerWidth-(300*4))?this.titlesCarrouselPosition:this.titlesCarrouselPosition-=100
  }

  fnHover(value:boolean){
    this.hover = value;
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

}
