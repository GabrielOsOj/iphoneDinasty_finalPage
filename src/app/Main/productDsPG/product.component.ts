import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { ImgComponent } from "./phoneImgSection/img/img.component";
import { IphoneImagenColor, IphoneProductColorImgs } from '../../Core/iphone-product';
import { StaticDataSvService } from '../../Services/static-data-sv.service';
import { phoneColorData } from './DTOs/phoneColorData';
import { TecnicalSheetComponent } from "./tecnicalDetailsSection/tecnical-sheet/tecnical-sheet.component";
import { ImgTextComponent } from '../shared/dynamicBanner/img-text/img-text.component';
import { bannerPhone } from '../../Core/banners-data';
import { BannerPhoneSvService } from '../../Services/bannerPhoneSv/banner-phone-sv.service';
import { CommonModule } from '@angular/common';
import { objVideo } from '../../Core/Objs';
import { FooterComponent } from '../shared/footer/footer.component';
import { FormComponent } from "./formSection/form.component";
import { WssComponent } from "../shared/wssButton/wss/wss.component";
import { BackTopComponent } from "../shared/back-top/back-top.component";
import { ToProductsButtonComponent } from '../shared/back-to-products/to-products-button.component';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ImgTextComponent, HeaderComponent, FooterComponent, TecnicalSheetComponent, ImgComponent, WssComponent, BackTopComponent, ToProductsButtonComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  @Input('id') phoneId!: string;

  phoneSelected: IphoneProductColorImgs = <IphoneProductColorImgs>{};
  phoneData: phoneColorData = <phoneColorData>{};
  phoneColorObj: IphoneImagenColor = <IphoneImagenColor>{}

  bannerDescription:bannerPhone=<bannerPhone>{};

  constructor(private data: StaticDataSvService, private bannerData : BannerPhoneSvService) {
    //va a llegar si o si uno solo, por efectos practicos pongo el 0
    //del 0 al 17
    //falta imagenes del iphone 15 y el 15 plus

  }

  ngOnInit(): void {
    this.phoneSelected = this.fnGetPhoneFromModel(this.data.getPhoneAndImgColorsData(), this.phoneId);
    this.fnLoadImgData();
    this.bannerDescription = this.bannerData.fnGetPhoneBannerInfo(this.phoneSelected.modelo);
  
    this.loadImgs();
  }

  fnGetPhoneFromModel(phones: Array<IphoneProductColorImgs>, phoneModel: string) {
    return phones.filter((phone) =>{return phone.modelo == phoneModel})[0];
  }

  fnLoadImgData() {
    this.phoneData.phoneModel = this.phoneSelected.modelo;
    this.phoneData.phoneDescription = this.phoneSelected.pantalla.medidas;
    this.phoneData.phonoColorsAvalible = this.fnGetColorsAvalible();
    this.phoneData.phoneImgColorsSetSelected = this.fnGetAllIdemColoredImgs(this.phoneData.phonoColorsAvalible[0]);

    this.phoneColorObj = this.fnGetObjectColorImg(this.phoneData.phonoColorsAvalible[1]);
  }

  private fnGetColorsAvalible(): Array<string> {
    return this.phoneSelected.imagenes.map(set => set.imgColor);
  }

  private fnGetAllIdemColoredImgs(color: string) {
    return Object.values(this.phoneSelected.imagenes.filter(img => img.imgColor == color)[0]).filter(set => set != color);
  }

  fnGetObjectColorImg(color: string){
    return this.phoneSelected.imagenes.filter(img => img.imgColor == color)[0];
  }

  fnColorSelector(color: string): void {
    this.phoneData.phoneImgColorsSetSelected = this.fnGetAllIdemColoredImgs(color);
    this.phoneColorObj = this.fnGetObjectColorImg(color);
  }

  loadImgs() {
    this.bannerDescription.screen.urlImg=this.phoneColorObj.imgFront;
    this.bannerDescription.camara.urlImg=this.phoneColorObj.imgCamera;
    this.bannerDescription.description.urlImg=this.phoneColorObj.imgSide;
    this.bannerDescription.batery.urlImg=this.phoneColorObj.imgCamera;
  }
 
  videoT:objVideo = {'url':"videos/ip16_presentation.mp4"}

}
