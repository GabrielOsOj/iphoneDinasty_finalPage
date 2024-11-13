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

@Component({
  selector: 'app-comparator',
  standalone: true,
  imports: [OtrosComponent,AlmacenamientoComponent,PantallaComponent,CamarasComponent,ProcesadorComponent,ImgComponent,HeaderComponent,FooterComponent, CommonModule,FormsModule],
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
    // this.dataPhonesT = this.data.getData();
    // this.dataPhonesT = this.data.getPhoneData();
    // this.dataPhonesT = this.data.getPhoneAndImgData();
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

  emptyPhoneDetails:IphoneProduct={
    "modelo": "",
    "procesador": {
      "tipo": "",
      "cantidad_nucleos": 0,
      "potencia": ""
    },
    "camara": {
      "trasera": {
        "resolucion": ""
      },
      "frontal": {
        "resolucion": ""
      }
    },
    "almacenamiento": [],
    "pantalla": {
      "medidas": ""
    },
    "otros": {
      "resistente_agua_polvo": "",
      "tipo_sim": [],
      "nfc": false,
      "pin_carga": "",
      "viene_con_cargador": false
    },
    "imagenes": []
  };

  fnIsScreenSmall(){

    return (window.innerWidth<=1024)?true:false;

  }

  fnPhoneSelector(inputNum:number,phoneModel:string){
    this.arrPhonesToCompare[inputNum]=this.searchInData(phoneModel)
  }

  searchInData(phoneModel:string):IphoneProductColorImgs{
    return this.dataPhonesT.filter(phone=>phone.modelo==phoneModel)[0];
  }

}
