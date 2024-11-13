import { Component, input, output } from '@angular/core';
import { phoneColorData } from '../../DTOs/phoneColorData';
import { StaticDataSvService } from '../../../../Services/static-data-sv.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './img.component.html',
  styleUrl: './img.component.css'
})
export class ImgComponent {

  phoneData = input.required<phoneColorData>();
  colorSelected = output<string>();

  mainImageUrl: string = ""; // Imagen principal inicial
  selectedImageIndex: number = 0;

  //output fn
  fnSelectColor(color:string){
    this.colorSelected.emit(color);
  }

  ngOnInit(): void {
    this.mainImageUrl = this.phoneData().phoneImgColorsSetSelected[0];
    console.log(this.mainImageUrl)
  }

  // Cambiar la imagen principal al hacer clic en una miniatura
  setMainImage(index: number): void {
    this.mainImageUrl = this.phoneData().phoneImgColorsSetSelected[index];
    this.selectedImageIndex = index;
  }

  // Navegar a la imagen anterior
  prevImage(): void {
    if (this.selectedImageIndex > 0) {
      this.selectedImageIndex--;
      this.mainImageUrl = this.phoneData().phoneImgColorsSetSelected[this.selectedImageIndex];
    }
  }

  // Navegar a la siguiente imagen
  nextImage(): void {
    if (
      this.selectedImageIndex < this.phoneData().phoneImgColorsSetSelected.length - 1) {
      this.selectedImageIndex++;
      this.mainImageUrl = this.phoneData().phoneImgColorsSetSelected[this.selectedImageIndex];
    }
  }

}
