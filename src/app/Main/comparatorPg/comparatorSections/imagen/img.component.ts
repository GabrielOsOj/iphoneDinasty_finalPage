import { CommonModule } from '@angular/common';
import { Component, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IphoneImagenColor } from '../../../../Core/iphone-product';
import { StmtModifier } from '@angular/compiler';

@Component({
  selector: 'app-comparador-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img.component.html',
  styleUrl: './img.component.css'
})
export class ImgComponent implements OnChanges, OnInit{


  AllcolorsPhoneImagen = input.required<Array<IphoneImagenColor>>();
  imgSelected?:string;
  

  ngOnInit(): void {
    this.changeColor(this.colorParser()[0]);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changeColor(this.colorParser()[0])
  }

  constructor(){
  }

  colorParser():Array<string>{
    return this.AllcolorsPhoneImagen().map((imgObj)=>{
      return imgObj.imgColor
    })
  }

  changeColor(colorSelected : string){
 
  this.imgSelected = this.AllcolorsPhoneImagen().filter((img)=>{return img.imgColor == colorSelected})[0].imgFront
  }

}