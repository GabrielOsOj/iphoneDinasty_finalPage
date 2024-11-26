import { Component } from '@angular/core';
import { OtrosComponent } from './comparatorSections/otros/otros.component';
import { AlmacenamientoComponent } from './comparatorSections/almacenamiento/almacenamiento.component';
import { PantallaComponent } from './comparatorSections/pantalla/pantalla.component';
import { CamarasComponent } from './comparatorSections/camaras/camaras.component';
import { ProcesadorComponent } from './comparatorSections/procesador/procesador.component';
import { ImgComponent } from './comparatorSections/imagen/img.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { IphoneProduct, IphoneProductColorImgs } from '../../Core/iphone-product';
import { StaticDataSvService } from '../../Services/static-data-sv.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WssComponent } from "../shared/wssButton/wss/wss.component";
import { BackTopComponent } from "../shared/back-top/back-top.component";
import { ToProductsButtonComponent } from "../shared/back-to-products/to-products-button.component";

@Component({
  selector: 'app-comparator',
  standalone: true,
  imports: [OtrosComponent, AlmacenamientoComponent, PantallaComponent, CamarasComponent, ProcesadorComponent, ImgComponent, HeaderComponent, FooterComponent, CommonModule, FormsModule, WssComponent, BackTopComponent, ToProductsButtonComponent],
  templateUrl: './comparator.component.html',
  styleUrl: './comparator.component.css'
})
export class ComparatorComponent {

  dataPhonesT:Array<IphoneProductColorImgs>; 
  arrPhonesToCompare:Array<IphoneProductColorImgs>=[];

  userModelOne:string;
  userModelTwo:string;
  userModelThree:string;

  varHasThreeSelectors:boolean = true;

  constructor(private data:StaticDataSvService){
    this.dataPhonesT = this.data.getPhoneAndImgColorsData();

    if(this.fnIsScreenSmall()){

      this.arrPhonesToCompare=[this.dataPhonesT[0],this.dataPhonesT[1]];
      this.userModelOne=this.arrPhonesToCompare[0].modelo;
      this.userModelTwo=this.arrPhonesToCompare[1].modelo;
      this.userModelThree="";
      this.varHasThreeSelectors = false;
      return;

    };

    this.arrPhonesToCompare=[this.dataPhonesT[0],this.dataPhonesT[1],this.dataPhonesT[2]];

    this.userModelOne=this.arrPhonesToCompare[0].modelo;
    this.userModelTwo=this.arrPhonesToCompare[1].modelo;
    this.userModelThree=this.arrPhonesToCompare[2].modelo;
    
  }

  emptyPhoneDetails:IphoneProduct=<IphoneProduct>{};

  fnIsScreenSmall(){
    return (window.innerWidth<=1024)?true:false;
  }

  fnPhoneSelector(inputNum:number,phoneModel:string){
    this.arrPhonesToCompare[inputNum]=this.searchInData(phoneModel);
  }

  searchInData(phoneModel:string):IphoneProductColorImgs{
    return this.dataPhonesT.filter(phone=>phone.modelo==phoneModel)[0];
  }

}
