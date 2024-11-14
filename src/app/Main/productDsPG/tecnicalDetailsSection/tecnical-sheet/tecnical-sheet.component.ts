import { Component } from '@angular/core';
import { StaticDataSvService } from '../../../../Services/static-data-sv.service';
import { IphoneProduct } from '../../../../Core/iphone-product';

@Component({
  selector: 'app-tecnical-sheet',
  standalone: true,
  imports: [],
  templateUrl: './tecnical-sheet.component.html',
  styleUrl: './tecnical-sheet.component.css'
})
export class TecnicalSheetComponent {

  
  phone : IphoneProduct;


  constructor(private data: StaticDataSvService) {

    this.phone = data.getPhoneData()[0];


  }
  
  fnChangeTrues(value:boolean):string{

    return value? "Si":"No";
  }
  
}
