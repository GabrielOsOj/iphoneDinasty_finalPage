import { Component } from '@angular/core';
import { BannerDataSvService } from '../../../Services/bannerDataSv/banner-data-sv.service';
import { objImg } from '../../../Core/Objs';
import { animate, style, transition, trigger } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-colored-banner',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './colored-banner.component.html',
  styleUrl: './colored-banner.component.css',
  animations:[
    trigger('fadeIn', [
      transition(':enter',[
        style({opacity:0}),
        animate('300ms ease-in'),style({opacity:1})
      ]),
      transition(':leave',[
        animate('300ms ease-out',style({opacity:0}))
      ])
    ])
  ]
})

export class ColoredBannerComponent {

  protected imgSelect:objImg;
  protected imgD:boolean=true;
  protected effectActive:Array<boolean> = [true, false, false, false];

  constructor(private bannerDataSv: BannerDataSvService){
    this.imgSelect = this.fnGetImg(0);
  }


  protected fnGetImg(index:number):objImg{
    return this.bannerDataSv.fnGetBannerColoredImgs()[index];
  }


  
  protected selectImg(index:number){

    this.imgD = false;

    this.effectActive.fill(false);
    this.effectActive[index]=true; 

    setTimeout(()=>{
      
      this.imgSelect = this.fnGetImg(index);
      this.imgD = true;

    },250)

  }

}